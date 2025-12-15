import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime } from '../primitives.js';
import { QuantityWithUom } from '../purchase-orders/get.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Manufacturing order operation for PUT
 */
export const ManufacturingOrderOperationPUT = z.object({
  manufacturingOrderOperationId: uuid, // Required - generate new GUID for insert
  operationTypeId: uuid,
  instructions: z.string().optional(),
  remarks: z.string().optional(),
  cost: decimalNullable.optional(),
  perHourCost: decimalNullable.optional(),
  seconds: decimalNullable.optional(),
  minutes: decimalNullable.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Manufacturing order line for PUT - BOM definition
 */
export const ManufacturingOrderLinePUT = z.object({
  manufacturingOrderLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  parentManufacturingOrderLineId: uuid.nullable().optional(),
  manufacturingOrderOperations: z.array(ManufacturingOrderOperationPUT).optional(),
  manufacturingOrderLines: z.lazy(() => z.array(ManufacturingOrderLinePUT)).optional(),
  timestamp: rowversion.optional(),
});

/**
 * Manufacturing order pick line for PUT - raw materials picked
 */
export const ManufacturingOrderPickLinePUT = z.object({
  manufacturingOrderPickLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  pickDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Manufacturing order put-away line for PUT - finished products
 */
export const ManufacturingOrderPutLinePUT = z.object({
  manufacturingOrderPutLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Manufacturing order pick matching for PUT
 */
export const ManufacturingOrderPickMatchingPUT = z.object({
  manufacturingOrderPickMatchingId: uuid, // Required - generate new GUID for insert
  manufacturingOrderLineId: uuid,
  manufacturingOrderPickLineId: uuid,
  matchedQuantity: decimal,
  serial: z.string().optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main ManufacturingOrder PUT Schema
// ============================================================================

/**
 * ManufacturingOrder PUT request schema
 * Endpoint: PUT /{companyId}/manufacturing-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for manufacturingOrderId when inserting
 * - Use an existing manufacturingOrderId when updating
 *
 * Query parameter: ?fillDefaultBom=true to auto-fill BOM from product definition
 */
export const ManufacturingOrderPUT = z.object({
  // Primary identifier - REQUIRED
  manufacturingOrderId: uuid,

  // Order identification
  manufacturingOrderNumber: z.string().optional(), // Will be auto-generated if not provided

  // Status
  isCancelled: z.boolean().optional(),
  isCompleted: z.boolean().optional(),

  // Dates
  orderDate: dateTime.optional(),
  dueDate: dateTime.nullable().optional(),

  // Primary finished product
  primaryFinishedProductId: uuid.nullable().optional(),

  // Location
  locationId: uuid.optional(),

  // Currency
  currencyId: uuid.nullable().optional(),

  // Costs (deprecated - use operation costs instead)
  extraCosts: decimalNullable.optional(),

  // Team member
  assignedToTeamMemberId: uuid.nullable().optional(),

  // Remarks
  remarks: z.string().optional(),
  pickRemarks: z.string().optional(),
  putAwayRemarks: z.string().optional(),

  // BOM lines (finished products + raw materials)
  lines: z.array(ManufacturingOrderLinePUT).optional(),

  // Pick lines (raw materials picked)
  pickLines: z.array(ManufacturingOrderPickLinePUT).optional(),

  // Put-away lines (finished products put away)
  putLines: z.array(ManufacturingOrderPutLinePUT).optional(),

  // Pick matchings (link pick lines to order lines)
  pickMatchings: z.array(ManufacturingOrderPickMatchingPUT).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for ManufacturingOrder
 */
export const ManufacturingOrderConstraints = {
  /**
   * Read-only fields - calculated or system-managed
   */
  readOnly: [
    'lastModifiedById',
    'lastModifiedBy',
    'attachments',
    'status',
    'isPrioritized',
    'completedDate',
    'splitPartNumber',
    'version',
  ],

  /**
   * Immutable fields - can only be set on creation
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['manufacturingOrderId'],
    update: ['manufacturingOrderId'],
  },

  /**
   * Nested arrays that require their own IDs
   */
  nestedWithIds: [
    { field: 'lines', idField: 'manufacturingOrderLineId' },
    { field: 'pickLines', idField: 'manufacturingOrderPickLineId' },
    { field: 'putLines', idField: 'manufacturingOrderPutLineId' },
    { field: 'pickMatchings', idField: 'manufacturingOrderPickMatchingId' },
    { field: 'lines.manufacturingOrderOperations', idField: 'manufacturingOrderOperationId' },
  ],

  /**
   * Auto-calculated fields if not provided
   */
  autoCalculated: [
    'manufacturingOrderNumber',
    'status',
    'completedDate',
  ],

  /**
   * Default values
   */
  defaults: {
    isCancelled: false,
    isCompleted: false,
  },

  /**
   * Query parameters for PUT endpoint
   */
  queryParams: {
    fillDefaultBom: {
      type: 'boolean',
      default: false,
      description: 'Auto-fill BOM lines from product definition',
    },
  },
};

/**
 * Helper to create a new manufacturing order payload
 */
export function createManufacturingOrderPayload(data, generateUuid) {
  return {
    manufacturingOrderId: generateUuid(),
    ...data,
  };
}

/**
 * Helper to prepare BOM lines with generated IDs
 */
export function createOrderLines(lines, generateUuid) {
  return lines.map(line => ({
    manufacturingOrderLineId: generateUuid(),
    ...line,
    manufacturingOrderOperations: line.manufacturingOrderOperations?.map(op => ({
      manufacturingOrderOperationId: generateUuid(),
      ...op,
    })),
    manufacturingOrderLines: line.manufacturingOrderLines
      ? createOrderLines(line.manufacturingOrderLines, generateUuid)
      : undefined,
  }));
}

/**
 * Helper to prepare pick lines with generated IDs
 */
export function createPickLines(lines, generateUuid) {
  return lines.map(line => ({
    manufacturingOrderPickLineId: generateUuid(),
    ...line,
  }));
}

/**
 * Helper to prepare put-away lines with generated IDs
 */
export function createPutLines(lines, generateUuid) {
  return lines.map(line => ({
    manufacturingOrderPutLineId: generateUuid(),
    ...line,
  }));
}
