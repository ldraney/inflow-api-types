import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Quantity with unit of measure for PUT requests
 */
export const StockAdjustmentQuantityPUT = z.object({
  quantity: decimal,
  unitOfMeasure: z.string().optional(),
  unitOfMeasureId: uuid.optional(),
});

/**
 * Stock adjustment line for PUT - requires stockAdjustmentLineId for updates
 */
export const StockAdjustmentLinePUT = z.object({
  stockAdjustmentLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: StockAdjustmentQuantityPUT.optional(),
  sublocation: z.string().nullable().optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main StockAdjustment PUT Schema
// ============================================================================

/**
 * StockAdjustment PUT request schema
 * Endpoint: PUT /{companyId}/stock-adjustments
 *
 * This is an upsert operation:
 * - Generate a new GUID for stockAdjustmentId when inserting
 * - Use an existing stockAdjustmentId when updating
 *
 * Required fields:
 * - stockAdjustmentId (generate GUID for insert)
 */
export const StockAdjustmentPUT = z.object({
  // Primary identifier - REQUIRED
  stockAdjustmentId: uuid,

  // Adjustment number (auto-generated if not provided)
  adjustmentNumber: z.string().optional(),

  // Status
  isCancelled: z.boolean().optional(),

  // Location
  locationId: uuid.optional(),

  // Adjustment reason
  adjustmentReasonId: uuid.nullable().optional(),

  // Date
  date: z.string().optional(), // ISO date

  // Notes
  remarks: z.string().optional(),

  // Lines (inventory adjustments)
  lines: z.array(StockAdjustmentLinePUT).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for StockAdjustment
 *
 * Use these to understand which fields can be modified and when.
 */
export const StockAdjustmentConstraints = {
  /**
   * Read-only fields - calculated or system-managed, cannot be set via API
   */
  readOnly: [
    'lastModifiedById',
    'lastModifiedBy',
    'attachments',
  ],

  /**
   * Immutable fields - can only be set on creation, cannot be changed afterwards
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['stockAdjustmentId'],
    update: ['stockAdjustmentId'],
  },

  /**
   * Nested arrays that require their own IDs
   * When inserting nested items, generate a new GUID for the item ID
   * When updating nested items, use the existing item ID
   */
  nestedWithIds: [
    { field: 'lines', idField: 'stockAdjustmentLineId' },
  ],

  /**
   * Default values applied when fields are omitted on create
   */
  defaults: {},
};

/**
 * Helper to create a new stock adjustment payload with generated IDs
 */
export function createStockAdjustmentPayload(data, generateUuid) {
  return {
    stockAdjustmentId: generateUuid(),
    ...data,
  };
}

/**
 * Helper to create stock adjustment lines with generated IDs
 */
export function createStockAdjustmentLines(lines, generateUuid) {
  return lines.map(line => ({
    stockAdjustmentLineId: generateUuid(),
    ...line,
  }));
}
