import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime } from '../primitives.js';
import { AddressPUT } from '../vendors/put.js';
import { PercentOrFixedAmount, QuantityWithUom } from '../purchase-orders/get.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Sales order line for PUT - requires salesOrderLineId for updates
 */
export const SalesOrderLinePUT = z.object({
  salesOrderLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  unitPrice: decimal.optional(),
  discount: PercentOrFixedAmount,
  tax1Rate: decimal.optional(),
  tax2Rate: decimal.optional(),
  taxCodeId: uuid.optional(),
  returnDate: dateTime.nullable().optional(),
  serviceCompleted: z.boolean().nullable().optional(),
  isDiscarded: z.boolean().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order pick line for PUT - requires salesOrderPickLineId for updates
 */
export const SalesOrderPickLinePUT = z.object({
  salesOrderPickLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  pickDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order pack line for PUT - requires salesOrderPackLineId for updates
 */
export const SalesOrderPackLinePUT = z.object({
  salesOrderPackLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  containerNumber: z.string().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order ship line for PUT - requires salesOrderShipLineId for updates
 */
export const SalesOrderShipLinePUT = z.object({
  salesOrderShipLineId: uuid, // Required - generate new GUID for insert
  carrier: z.string().optional(),
  trackingNumber: z.string().optional(),
  shippedDate: dateTime.nullable().optional(),
  containers: z.array(z.string()).optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order restock line for PUT - requires salesOrderRestockLineId for updates
 */
export const SalesOrderRestockLinePUT = z.object({
  salesOrderRestockLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  restockDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main SalesOrder PUT Schema
// ============================================================================

/**
 * SalesOrder PUT request schema
 * Endpoint: PUT /{companyId}/sales-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for salesOrderId when inserting
 * - Use an existing salesOrderId when updating
 * - customerId is required
 */
export const SalesOrderPUT = z.object({
  // Primary identifier - REQUIRED
  salesOrderId: uuid,

  // Customer - REQUIRED
  customerId: uuid,

  // Order identification
  orderNumber: z.string().optional(), // Will be auto-generated if not provided
  poNumber: z.string().optional(),
  externalId: z.string().optional(),
  source: z.string().optional(),

  // Contact info for this order
  contactName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),

  // Dates
  orderDate: dateTime.optional(),
  requestedShipDate: dateTime.nullable().optional(),
  dueDate: dateTime.nullable().optional(),
  invoicedDate: dateTime.nullable().optional(),

  // Status
  isQuote: z.boolean().optional(),
  isCancelled: z.boolean().optional(),
  isInvoiced: z.boolean().optional(),
  needsConfirmation: z.boolean().optional(),

  // Location
  locationId: uuid.nullable().optional(),

  // Addresses
  sameBillingAndShipping: z.boolean().optional(),
  billingAddress: AddressPUT.optional(),
  shippingAddress: AddressPUT.optional(),
  showShipping: z.boolean().optional(),
  shipToCompanyName: z.string().optional(),

  // Pricing
  pricingSchemeId: uuid.nullable().optional(),

  // Currency/exchange
  currencyId: uuid.optional(),
  exchangeRate: decimal.optional(),

  // Tax settings
  taxingSchemeId: uuid.optional(),
  isTaxInclusive: z.boolean().optional(),
  calculateTax2OnTax1: z.boolean().nullable().optional(),
  tax1Name: z.string().optional(),
  tax1Rate: decimalNullable.optional(),
  tax1OnShipping: z.boolean().optional(),
  tax2Name: z.string().optional(),
  tax2Rate: decimalNullable.optional(),
  tax2OnShipping: z.boolean().optional(),

  // Financials (optional - calculated by inFlow if not provided)
  subTotal: decimal.optional(),
  orderFreight: decimalNullable.optional(),
  nonCustomerCost: PercentOrFixedAmount,
  returnFee: decimalNullable.optional(),
  returnFreight: decimalNullable.optional(),
  tax1: decimal.optional(),
  tax2: decimal.optional(),
  total: decimal.optional(),

  // Payment terms
  paymentTermsId: uuid.nullable().optional(),

  // Team members
  assignedToTeamMemberId: uuid.nullable().optional(),
  confirmerTeamMemberId: uuid.nullable().optional(),
  salesRep: z.string().optional(),
  salesRepTeamMemberId: uuid.nullable().optional(),

  // Remarks
  orderRemarks: z.string().optional(),
  pickRemarks: z.string().optional(),
  packRemarks: z.string().optional(),
  shipRemarks: z.string().optional(),
  returnRemarks: z.string().optional(),
  restockRemarks: z.string().optional(),

  // Order lines
  lines: z.array(SalesOrderLinePUT).optional(),

  // Pick lines (inventory out)
  pickLines: z.array(SalesOrderPickLinePUT).optional(),

  // Pack lines
  packLines: z.array(SalesOrderPackLinePUT).optional(),

  // Ship lines
  shipLines: z.array(SalesOrderShipLinePUT).optional(),

  // Restock lines (for returns)
  restockLines: z.array(SalesOrderRestockLinePUT).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for SalesOrder
 */
export const SalesOrderConstraints = {
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
    'isPrioritized',
    'exchangeRateAutoPulled',
    'costOfGoodsSold',
  ],

  /**
   * Immutable fields - can only be set on creation
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['salesOrderId', 'customerId'],
    update: ['salesOrderId'],
  },

  /**
   * Nested arrays that require their own IDs
   */
  nestedWithIds: [
    { field: 'lines', idField: 'salesOrderLineId' },
    { field: 'pickLines', idField: 'salesOrderPickLineId' },
    { field: 'packLines', idField: 'salesOrderPackLineId' },
    { field: 'shipLines', idField: 'salesOrderShipLineId' },
    { field: 'restockLines', idField: 'salesOrderRestockLineId' },
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
    isInvoiced: false,
    showShipping: true,
    sameBillingAndShipping: false,
    isTaxInclusive: false,
    needsConfirmation: false,
    tax1OnShipping: false,
    tax2OnShipping: false,
  },
};

/**
 * Helper to create a new sales order payload
 */
export function createSalesOrderPayload(data, generateUuid) {
  return {
    salesOrderId: generateUuid(),
    ...data,
  };
}

/**
 * Helper to prepare order lines with generated IDs
 */
export function createOrderLines(lines, generateUuid) {
  return lines.map(line => ({
    salesOrderLineId: generateUuid(),
    ...line,
  }));
}

/**
 * Helper to prepare pick lines with generated IDs
 */
export function createPickLines(lines, generateUuid) {
  return lines.map(line => ({
    salesOrderPickLineId: generateUuid(),
    ...line,
  }));
}
