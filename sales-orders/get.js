import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime, int32, int64 } from '../primitives.js';
import { AddressSchema } from '../vendors/get.js';
import { PercentOrFixedAmount, QuantityWithUom, PaymentType } from '../purchase-orders/get.js';

// ============================================================================
// Enums
// ============================================================================

/**
 * Sales order inventory status
 */
export const SOInventoryStatus = z.enum([
  'Unconfirmed', 'Quote', 'Unfulfilled', 'Started', 'Fulfilled',
  'unconfirmed', 'quote', 'unfulfilled', 'started', 'fulfilled',
]);

/**
 * Sales order payment status
 */
export const SOPaymentStatus = z.enum([
  'Unconfirmed', 'Quote', 'Uninvoiced', 'Invoiced', 'Partial', 'Paid', 'Owing',
  'unconfirmed', 'quote', 'uninvoiced', 'invoiced', 'partial', 'paid', 'owing',
]);

/**
 * EasyPost shipment status
 */
export const EasyPostShipmentStatus = z.enum([
  'Manual', 'Open', 'Purchased',
  'manual', 'open', 'purchased',
]);

// ============================================================================
// Nested Schemas
// ============================================================================

/**
 * Attachment schema for sales orders
 */
export const SOAttachmentSchema = z.object({
  attachmentId: uuid.optional(),
  fileName: z.string().optional(),
  fileSize: int64.optional(),
  attachmentUrl: z.string().optional(),
  lastModDttm: dateTime.optional(),
  lastModifiedById: uuid.optional(),
});

/**
 * Sales order line - products ordered
 */
export const SalesOrderLineSchema = z.object({
  salesOrderLineId: uuid.optional(),
  productId: uuid.optional(),
  description: z.string().optional(),
  quantity: QuantityWithUom,
  unitPrice: decimal.optional(),
  discount: PercentOrFixedAmount,
  subTotal: decimal.optional(),
  tax1Rate: decimal.optional(),
  tax2Rate: decimal.optional(),
  taxCodeId: uuid.optional(),
  returnDate: dateTime.nullable().optional(),
  serviceCompleted: z.boolean().nullable().optional(),
  isDiscarded: z.boolean().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order pick line - products picked from warehouse
 */
export const SalesOrderPickLineSchema = z.object({
  salesOrderPickLineId: uuid.optional(),
  productId: uuid.optional(),
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  pickDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order pack line - products packed into containers
 */
export const SalesOrderPackLineSchema = z.object({
  salesOrderPackLineId: uuid.optional(),
  productId: uuid.optional(),
  description: z.string().optional(),
  quantity: QuantityWithUom,
  containerNumber: z.string().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order ship line - shipments
 */
export const SalesOrderShipLineSchema = z.object({
  salesOrderShipLineId: uuid.optional(),
  carrier: z.string().optional(),
  trackingNumber: z.string().optional(),
  shippedDate: dateTime.nullable().optional(),
  containers: z.array(z.string()).optional(),
  easyPostShipmentId: z.string().optional(),
  easyPostShipmentStatus: EasyPostShipmentStatus.optional(),
  easyPostConfirmationEmailAddress: z.string().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order restock line - returned products restocked
 */
export const SalesOrderRestockLineSchema = z.object({
  salesOrderRestockLineId: uuid.optional(),
  productId: uuid.optional(),
  description: z.string().optional(),
  quantity: QuantityWithUom,
  locationId: uuid.optional(),
  sublocation: z.string().optional(),
  restockDate: dateTime.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Sales order payment line - payment history (read-only)
 */
export const SalesOrderPaymentLineSchema = z.object({
  salesOrderPaymentHistoryLineId: uuid.optional(),
  amount: decimal.optional(),
  datePaid: dateTime.optional(),
  paymentMethod: z.string().optional(),
  paymentType: PaymentType.optional(),
  referenceNumber: z.string().optional(),
  remarks: z.string().optional(),
  lineNum: int32.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Cost of goods sold - read-only
 */
export const SalesOrderCostOfGoodsSoldSchema = z.object({
  salesOrderCostOfGoodsSoldId: z.string().optional(),
  salesOrderId: uuid.optional(),
  costOfGoodsSold: decimalNullable.optional(),
}).nullable().optional();

// ============================================================================
// Main SalesOrder GET Schema
// ============================================================================

/**
 * SalesOrder GET response schema
 * Endpoint: GET /{companyId}/sales-orders/{salesOrderId}
 * Endpoint: GET /{companyId}/sales-orders (returns array)
 */
export const SalesOrderGET = z.object({
  // Primary identifier
  salesOrderId: uuid,

  // Order identification
  orderNumber: z.string().optional(),
  poNumber: z.string().optional(),
  externalId: z.string().optional(),
  source: z.string().optional(),

  // Customer
  customerId: uuid.optional(),
  customer: z.object({
    customerId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

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
  inventoryStatus: SOInventoryStatus.optional(),
  paymentStatus: SOPaymentStatus.optional(),
  isQuote: z.boolean().optional(),
  isCancelled: z.boolean().optional(),
  isCompleted: z.boolean().optional(),
  isInvoiced: z.boolean().optional(),
  isPrioritized: z.boolean().optional(),
  needsConfirmation: z.boolean().optional(),

  // Location
  locationId: uuid.nullable().optional(),
  location: z.object({
    locationId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Addresses
  sameBillingAndShipping: z.boolean().optional(),
  billingAddress: AddressSchema.optional(),
  shippingAddress: AddressSchema.optional(),
  showShipping: z.boolean().optional(),
  shipToCompanyName: z.string().optional(),

  // Pricing
  pricingSchemeId: uuid.nullable().optional(),
  pricingScheme: z.object({
    pricingSchemeId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Currency/exchange
  currencyId: uuid.optional(),
  currency: z.object({
    currencyId: uuid.optional(),
    name: z.string().optional(),
    isoCode: z.string().optional(),
    symbol: z.string().optional(),
  }).nullable().optional(),
  exchangeRate: decimal.optional(),
  exchangeRateAutoPulled: dateTime.nullable().optional(),

  // Tax settings
  taxingSchemeId: uuid.optional(),
  taxingScheme: z.object({
    taxingSchemeId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),
  isTaxInclusive: z.boolean().optional(),
  calculateTax2OnTax1: z.boolean().nullable().optional(),
  tax1Name: z.string().optional(),
  tax1Rate: decimalNullable.optional(),
  tax1OnShipping: z.boolean().optional(),
  tax2Name: z.string().optional(),
  tax2Rate: decimalNullable.optional(),
  tax2OnShipping: z.boolean().optional(),

  // Financials
  subTotal: decimal.optional(),
  orderFreight: decimalNullable.optional(),
  nonCustomerCost: PercentOrFixedAmount,
  returnFee: decimalNullable.optional(),
  returnFreight: decimalNullable.optional(),
  tax1: decimal.optional(),
  tax2: decimal.optional(),
  total: decimal.optional(),
  amountPaid: decimal.optional(),
  balance: decimal.optional(),

  // Cost of goods sold (read-only)
  costOfGoodsSold: SalesOrderCostOfGoodsSoldSchema,

  // Payment terms
  paymentTermsId: uuid.nullable().optional(),
  paymentTerms: z.object({
    paymentTermsId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Team members
  assignedToTeamMemberId: uuid.nullable().optional(),
  assignedToTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),
  confirmerTeamMemberId: uuid.nullable().optional(),
  confirmerTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),
  salesRep: z.string().optional(),
  salesRepTeamMemberId: uuid.nullable().optional(),
  salesRepTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Remarks
  orderRemarks: z.string().optional(),
  pickRemarks: z.string().optional(),
  packRemarks: z.string().optional(),
  shipRemarks: z.string().optional(),
  returnRemarks: z.string().optional(),
  restockRemarks: z.string().optional(),

  // Order lines
  lines: z.array(SalesOrderLineSchema).optional(),

  // Pick lines (inventory out)
  pickLines: z.array(SalesOrderPickLineSchema).optional(),

  // Pack lines
  packLines: z.array(SalesOrderPackLineSchema).optional(),

  // Ship lines
  shipLines: z.array(SalesOrderShipLineSchema).optional(),

  // Restock lines (for returns)
  restockLines: z.array(SalesOrderRestockLineSchema).optional(),

  // Payment lines (read-only history)
  paymentLines: z.array(SalesOrderPaymentLineSchema).optional(),

  // Attachments (read-only)
  attachments: z.array(SOAttachmentSchema).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Audit fields (read-only)
  lastModifiedById: uuid.optional(),

  // Concurrency
  timestamp: rowversion.optional(),
});

// ============================================================================
// Includes & Filters Metadata
// ============================================================================

/**
 * Available includes for ?include= query parameter
 */
export const SalesOrderIncludes = {
  customer: {
    description: 'Customer details',
    adds: ['customer'],
    nested: [],
  },
  lines: {
    description: 'Order lines (products ordered)',
    adds: ['lines'],
    nested: ['product', 'taxCode'],
  },
  pickLines: {
    description: 'Pick lines (products picked from warehouse)',
    adds: ['pickLines'],
    nested: ['product', 'location'],
  },
  packLines: {
    description: 'Pack lines (products packed into containers)',
    adds: ['packLines'],
    nested: ['product'],
  },
  shipLines: {
    description: 'Ship lines (shipments)',
    adds: ['shipLines'],
    nested: [],
  },
  restockLines: {
    description: 'Restock lines (returned products)',
    adds: ['restockLines'],
    nested: ['product', 'location'],
  },
  paymentLines: {
    description: 'Payment history lines',
    adds: ['paymentLines'],
    nested: [],
  },
  attachments: {
    description: 'File attachments (read-only)',
    adds: ['attachments'],
    nested: ['lastModifiedBy'],
  },
  location: {
    description: 'Default location for picking',
    adds: ['location'],
    nested: [],
  },
  currency: {
    description: 'Order currency',
    adds: ['currency'],
    nested: [],
  },
  paymentTerms: {
    description: 'Payment terms',
    adds: ['paymentTerms'],
    nested: [],
  },
  pricingScheme: {
    description: 'Pricing scheme',
    adds: ['pricingScheme'],
    nested: [],
  },
  taxingScheme: {
    description: 'Tax scheme',
    adds: ['taxingScheme'],
    nested: [],
  },
  assignedToTeamMember: {
    description: 'Assigned team member',
    adds: ['assignedToTeamMember'],
    nested: [],
  },
  confirmerTeamMember: {
    description: 'Confirmer team member',
    adds: ['confirmerTeamMember'],
    nested: [],
  },
  salesRepTeamMember: {
    description: 'Sales rep team member',
    adds: ['salesRepTeamMember'],
    nested: [],
  },
  costOfGoodsSold: {
    description: 'Cost of goods sold (read-only)',
    adds: ['costOfGoodsSold'],
    nested: [],
  },
  customFields: {
    description: 'Custom field values',
    adds: ['customFields'],
    nested: [],
  },
  lastModifiedBy: {
    description: 'Team member who last modified',
    adds: ['lastModifiedBy'],
    nested: [],
  },
};

/**
 * Available filters for ?filter[x]= query parameter
 */
export const SalesOrderFilters = {
  orderNumber: {
    type: 'string',
    description: 'Filter by order number',
  },
  inventoryStatus: {
    type: 'array',
    description: 'Filter by inventory status (Unconfirmed, Quote, Unfulfilled, Started, Fulfilled)',
  },
  paymentStatus: {
    type: 'array',
    description: 'Filter by payment status (Unconfirmed, Quote, Uninvoiced, Invoiced, Partial, Paid, Owing)',
  },
  customerId: {
    type: 'uuid',
    description: 'Filter by customer ID',
  },
  orderDate: {
    type: 'dateRange',
    description: 'Filter by order date range',
    example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
  },
  poNumber: {
    type: 'string',
    description: 'Filter by customer PO number',
  },
  locationId: {
    type: 'uuid',
    description: 'Filter by location ID',
  },
  requestedShipDate: {
    type: 'dateRange',
    description: 'Filter by requested ship date range',
    example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
  },
  invoicedDate: {
    type: 'dateRange',
    description: 'Filter by invoiced date range',
    example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
  },
  total: {
    type: 'numberRange',
    description: 'Filter by total amount range',
    example: '{"fromDate":"0","toDate":"1000"}',
  },
  balance: {
    type: 'numberRange',
    description: 'Filter by balance range',
    example: '{"fromDate":"0","toDate":"1000"}',
  },
  isActive: {
    type: 'boolean',
    description: 'Filter by active status (excludes cancelled orders when true)',
  },
  smart: {
    type: 'string',
    description: 'Full-text search on order number and customer name',
  },
};
