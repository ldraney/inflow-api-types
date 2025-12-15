import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime } from '../primitives.js';
import { AddressPUT } from '../vendors/put.js';
import { PercentOrFixedAmount, QuantityWithUom } from './get.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Purchase order line for PUT - requires purchaseOrderLineId for updates
 */
export const PurchaseOrderLinePUT = z.object({
  purchaseOrderLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  vendorItemCode: z.string().optional(),
  quantity: QuantityWithUom,
  unitPrice: decimal.optional(),
  discount: PercentOrFixedAmount,
  tax1Rate: decimal.optional(),
  tax2Rate: decimal.optional(),
  taxCodeId: uuid.optional(),
  returnDate: dateTime.nullable().optional(),
  serviceCompleted: z.boolean().nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Purchase order receive line for PUT - requires purchaseOrderReceiveLineId for updates
 */
export const PurchaseOrderReceiveLinePUT = z.object({
  purchaseOrderReceiveLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  vendorItemCode: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  receiveDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Purchase order unstock line for PUT - requires purchaseOrderUnstockLineId for updates
 */
export const PurchaseOrderUnstockLinePUT = z.object({
  purchaseOrderUnstockLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  vendorItemCode: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  unstockDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main PurchaseOrder PUT Schema
// ============================================================================

/**
 * PurchaseOrder PUT request schema
 * Endpoint: PUT /{companyId}/purchase-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for purchaseOrderId when inserting
 * - Use an existing purchaseOrderId when updating
 * - vendorId is required
 */
export const PurchaseOrderPUT = z.object({
  // Primary identifier - REQUIRED
  purchaseOrderId: uuid,

  // Vendor - REQUIRED
  vendorId: uuid,

  // Order identification
  orderNumber: z.string().optional(), // Will be auto-generated if not provided
  vendorOrderNumber: z.string().optional(),

  // Vendor address override
  vendorAddress: AddressPUT.optional(),

  // Contact info for this order
  contactName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),

  // Dates
  orderDate: dateTime.optional(),
  requestShipDate: dateTime.nullable().optional(),
  dueDate: dateTime.nullable().optional(),

  // Status
  isQuote: z.boolean().optional(),
  isCancelled: z.boolean().optional(),

  // Location
  locationId: uuid.nullable().optional(),

  // Shipping
  carrier: z.string().optional(),
  showShipping: z.boolean().optional(),
  shipToCompanyName: z.string().optional(),
  shipToAddress: AddressPUT.optional(),

  // Currency/exchange
  currencyId: uuid.optional(),
  exchangeRate: decimal.optional(),

  // Tax settings
  taxingSchemeId: uuid.optional(),
  isTaxInclusive: z.boolean().optional(),
  calculateTax2OnTax1: z.boolean().optional(),
  tax1Name: z.string().optional(),
  tax1Rate: decimalNullable.optional(),
  tax1OnShipping: z.boolean().optional(),
  tax2Name: z.string().optional(),
  tax2Rate: decimalNullable.optional(),
  tax2OnShipping: z.boolean().optional(),

  // Financials (optional - calculated by inFlow if not provided)
  subTotal: decimal.optional(),
  freight: decimalNullable.optional(),
  nonVendorCosts: PercentOrFixedAmount,
  returnFee: decimal.optional(),
  returnExtra: decimal.optional(),
  tax1: decimal.optional(),
  tax2: decimal.optional(),
  total: decimal.optional(),

  // Payment terms
  paymentTermsId: uuid.nullable().optional(),

  // Team members
  assignedToTeamMemberId: uuid.nullable().optional(),
  approverTeamMemberId: uuid.nullable().optional(),

  // Remarks
  orderRemarks: z.string().optional(),
  receiveRemarks: z.string().optional(),
  returnRemarks: z.string().optional(),
  unstockRemarks: z.string().optional(),

  // Order lines
  lines: z.array(PurchaseOrderLinePUT).optional(),

  // Receive lines (inventory in)
  receiveLines: z.array(PurchaseOrderReceiveLinePUT).optional(),

  // Unstock lines (for returns)
  unstockLines: z.array(PurchaseOrderUnstockLinePUT).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for PurchaseOrder
 */
export const PurchaseOrderConstraints = {
  /**
   * Read-only fields - calculated or system-managed
   */
  readOnly: [
    'lastModifiedById',
    'lastModifiedBy',
    'attachments',
    'paymentLines',
    'amountPaid',
    'balance',
    'inventoryStatus',
    'paymentStatus',
    'isCompleted',
    'exchangeRateAutoPulled',
  ],

  /**
   * Immutable fields - can only be set on creation
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['purchaseOrderId', 'vendorId'],
    update: ['purchaseOrderId'],
  },

  /**
   * Nested arrays that require their own IDs
   */
  nestedWithIds: [
    { field: 'lines', idField: 'purchaseOrderLineId' },
    { field: 'receiveLines', idField: 'purchaseOrderReceiveLineId' },
    { field: 'unstockLines', idField: 'purchaseOrderUnstockLineId' },
  ],

  /**
   * Auto-calculated fields if not provided
   */
  autoCalculated: [
    'orderNumber',
    'subTotal',
    'tax1',
    'tax2',
    'total',
  ],

  /**
   * Default values
   */
  defaults: {
    isQuote: false,
    isCancelled: false,
    showShipping: true,
    isTaxInclusive: false,
    calculateTax2OnTax1: false,
    tax1OnShipping: false,
    tax2OnShipping: false,
  },
};

/**
 * Helper to create a new purchase order payload
 */
export function createPurchaseOrderPayload(data, generateUuid) {
  return {
    purchaseOrderId: generateUuid(),
    ...data,
  };
}

/**
 * Helper to prepare order lines with generated IDs
 */
export function createOrderLines(lines, generateUuid) {
  return lines.map(line => ({
    purchaseOrderLineId: generateUuid(),
    ...line,
  }));
}

/**
 * Helper to prepare receive lines with generated IDs
 */
export function createReceiveLines(lines, generateUuid) {
  return lines.map(line => ({
    purchaseOrderReceiveLineId: generateUuid(),
    ...line,
  }));
}
