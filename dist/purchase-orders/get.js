import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime, int64 } from '../primitives.js';
import { AddressSchema } from '../vendors/get.js';
// ============================================================================
// Enums
// ============================================================================
/**
 * Purchase order inventory status
 */
export const POInventoryStatus = z.enum([
    'Quote', 'Unapproved', 'Unfulfilled', 'Started', 'Fulfilled',
    'quote', 'unapproved', 'unfulfilled', 'started', 'fulfilled',
]);
/**
 * Purchase order payment status
 */
export const POPaymentStatus = z.enum([
    'Quote', 'Unapproved', 'Unpaid', 'Partial', 'Paid', 'Owing',
    'quote', 'unapproved', 'unpaid', 'partial', 'paid', 'owing',
]);
/**
 * Payment type enum for payment lines
 */
export const PaymentType = z.enum([
    'Payment', 'BatchPayment', 'ApplyCredit', 'ConvertToCredit', 'Refund', 'InFlowPay',
    'payment', 'batchPayment', 'applyCredit', 'convertToCredit', 'refund', 'inFlowPay',
]);
// ============================================================================
// Nested Schemas
// ============================================================================
/**
 * Percent or fixed amount - used for discounts, non-vendor costs
 */
export const PercentOrFixedAmount = z.object({
    isPercent: z.boolean().optional(),
    value: decimal.optional(),
}).nullable().optional();
/**
 * Quantity with unit of measure
 * Note: swagger.json documents 'quantity' and 'uomName' but API returns different fields
 */
export const QuantityWithUom = z.object({
    standardQuantity: decimal.optional(),
    uomQuantity: decimal.optional(),
    uom: z.string().optional(),
    serialNumbers: z.array(z.string()).optional(),
}).optional();
/**
 * Attachment schema for purchase orders
 */
export const POAttachmentSchema = z.object({
    attachmentId: uuid.optional(),
    fileName: z.string().optional(),
    fileSize: int64.optional(),
    attachmentUrl: z.string().optional(),
    lastModDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
});
/**
 * Purchase order line - products ordered
 */
export const PurchaseOrderLineSchema = z.object({
    purchaseOrderLineId: uuid.optional(),
    productId: uuid.optional(),
    description: z.string().optional(),
    vendorItemCode: z.string().optional(),
    quantity: QuantityWithUom,
    unitPrice: decimal.optional(),
    discount: PercentOrFixedAmount,
    subTotal: decimal.optional(),
    tax1Rate: decimal.optional(),
    tax2Rate: decimal.optional(),
    taxCodeId: uuid.optional(),
    returnDate: dateTime.nullable().optional(),
    serviceCompleted: z.boolean().nullable().optional(),
    timestamp: rowversion.optional(),
});
/**
 * Purchase order receive line - products received into warehouse
 */
export const PurchaseOrderReceiveLineSchema = z.object({
    purchaseOrderReceiveLineId: uuid.optional(),
    productId: uuid.optional(),
    description: z.string().optional(),
    vendorItemCode: z.string().optional(),
    quantity: QuantityWithUom,
    locationId: uuid.optional(),
    sublocation: z.string().optional(),
    receiveDate: dateTime.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Purchase order unstock line - returned products unstocked
 */
export const PurchaseOrderUnstockLineSchema = z.object({
    purchaseOrderUnstockLineId: uuid.optional(),
    productId: uuid.optional(),
    description: z.string().optional(),
    vendorItemCode: z.string().optional(),
    quantity: QuantityWithUom,
    locationId: uuid.optional(),
    sublocation: z.string().optional(),
    unstockDate: dateTime.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Purchase order payment line - payment history (read-only)
 */
export const PurchaseOrderPaymentLineSchema = z.object({
    purchaseOrderPaymentHistoryLineId: uuid.optional(),
    amount: decimal.optional(),
    datePaid: dateTime.optional(),
    paymentMethod: z.string().optional(),
    paymentType: PaymentType.optional(),
    referenceNumber: z.string().optional(),
    remarks: z.string().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main PurchaseOrder GET Schema
// ============================================================================
/**
 * PurchaseOrder GET response schema
 * Endpoint: GET /{companyId}/purchase-orders/{purchaseOrderId}
 * Endpoint: GET /{companyId}/purchase-orders (returns array)
 */
export const PurchaseOrderGET = z.object({
    // Primary identifier
    purchaseOrderId: uuid,
    // Order identification
    orderNumber: z.string().optional(),
    vendorOrderNumber: z.string().optional(),
    // Vendor
    vendorId: uuid.optional(),
    vendor: z.object({
        vendorId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    vendorAddress: AddressSchema.optional(),
    // Contact info for this order
    contactName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    // Dates
    orderDate: dateTime.optional(),
    requestShipDate: dateTime.nullable().optional(),
    dueDate: dateTime.nullable().optional(),
    // Status
    inventoryStatus: POInventoryStatus.optional(),
    paymentStatus: POPaymentStatus.optional(),
    isQuote: z.boolean().optional(),
    isCancelled: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    // Location
    locationId: uuid.nullable().optional(),
    location: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Shipping
    carrier: z.string().optional(),
    showShipping: z.boolean().optional(),
    shipToCompanyName: z.string().optional(),
    shipToAddress: AddressSchema.optional(),
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
    calculateTax2OnTax1: z.boolean().optional(),
    tax1Name: z.string().optional(),
    tax1Rate: decimalNullable.optional(),
    tax1OnShipping: z.boolean().optional(),
    tax2Name: z.string().optional(),
    tax2Rate: decimalNullable.optional(),
    tax2OnShipping: z.boolean().optional(),
    // Financials
    subTotal: decimal.optional(),
    freight: decimalNullable.optional(),
    nonVendorCosts: PercentOrFixedAmount,
    returnFee: decimal.optional(),
    returnExtra: decimal.optional(),
    tax1: decimal.optional(),
    tax2: decimal.optional(),
    total: decimal.optional(),
    amountPaid: decimal.optional(),
    balance: decimal.optional(),
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
    approverTeamMemberId: uuid.nullable().optional(),
    approverTeamMember: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Remarks
    orderRemarks: z.string().optional(),
    receiveRemarks: z.string().optional(),
    returnRemarks: z.string().optional(),
    unstockRemarks: z.string().optional(),
    // Order lines
    lines: z.array(PurchaseOrderLineSchema).optional(),
    // Receive lines (inventory in)
    receiveLines: z.array(PurchaseOrderReceiveLineSchema).optional(),
    // Unstock lines (for returns)
    unstockLines: z.array(PurchaseOrderUnstockLineSchema).optional(),
    // Payment lines (read-only history)
    paymentLines: z.array(PurchaseOrderPaymentLineSchema).optional(),
    // Attachments (read-only)
    attachments: z.array(POAttachmentSchema).optional(),
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
export const PurchaseOrderIncludes = {
    vendor: {
        description: 'Vendor details',
        adds: ['vendor'],
        nested: [],
    },
    lines: {
        description: 'Order lines (products ordered)',
        adds: ['lines'],
        nested: ['product', 'taxCode'],
    },
    receiveLines: {
        description: 'Receive lines (products received)',
        adds: ['receiveLines'],
        nested: ['product', 'location'],
    },
    unstockLines: {
        description: 'Unstock lines (returned products)',
        adds: ['unstockLines'],
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
        description: 'Default location for receiving',
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
    approverTeamMember: {
        description: 'Approver team member',
        adds: ['approverTeamMember'],
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
export const PurchaseOrderFilters = {
    orderNumber: {
        type: 'string',
        description: 'Filter by order number',
    },
    inventoryStatus: {
        type: 'array',
        description: 'Filter by inventory status (Quote, Unapproved, Unfulfilled, Started, Fulfilled)',
    },
    paymentStatus: {
        type: 'array',
        description: 'Filter by payment status (Quote, Unapproved, Unpaid, Partial, Paid, Owing)',
    },
    vendorId: {
        type: 'uuid',
        description: 'Filter by vendor ID',
    },
    orderDate: {
        type: 'dateRange',
        description: 'Filter by order date range',
        example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
    },
    vendorOrderNumber: {
        type: 'string',
        description: 'Filter by vendor order number',
    },
    locationId: {
        type: 'uuid',
        description: 'Filter by location ID',
    },
    requestShipDate: {
        type: 'dateRange',
        description: 'Filter by requested ship date range',
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
        description: 'Full-text search on order number and vendor name',
    },
};
