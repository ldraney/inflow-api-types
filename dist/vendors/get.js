import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime, int32, int64 } from '../primitives';
// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================
/**
 * Address type enum
 * Note: API may return camelCase despite swagger showing PascalCase
 */
export const AddressType = z.enum(['Commercial', 'Residential', 'commercial', 'residential']).nullable().optional();
/**
 * Address schema - embedded in VendorAddress
 */
export const AddressSchema = z.object({
    address1: z.string().optional(),
    address2: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    postalCode: z.string().optional(),
    country: z.string().optional(),
    remarks: z.string().optional(),
    addressType: AddressType,
});
/**
 * Vendor address schema - included via ?include=addresses
 */
export const VendorAddressSchema = z.object({
    vendorAddressId: uuid.optional(),
    vendorId: uuid.optional(),
    name: z.string().optional(),
    address: AddressSchema.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Attachment schema - read-only, included via ?include=attachments
 */
export const AttachmentSchema = z.object({
    attachmentId: uuid.optional(),
    fileName: z.string().optional(),
    fileSize: int64.optional(),
    attachmentUrl: z.string().optional(),
    lastModDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
});
/**
 * Vendor balance schema - read-only, included via ?include=balances
 */
export const VendorBalanceSchema = z.object({
    vendorBalanceId: z.string().optional(),
    vendorId: uuid.optional(),
    currencyId: uuid.nullable().optional(),
    balance: decimal.optional(),
});
/**
 * Vendor credit schema - read-only, included via ?include=credits
 */
export const VendorCreditSchema = z.object({
    vendorCreditId: z.string().optional(),
    vendorId: uuid.optional(),
    currencyId: uuid.nullable().optional(),
    credit: decimal.optional(),
});
/**
 * Vendor due schema - read-only, shows amounts owed by aging bucket
 */
export const VendorDueSchema = z.object({
    vendorDueId: z.string().optional(),
    currencyId: uuid.optional(),
    amountCurrent: decimal.optional(),
    amount1To30: decimal.optional(),
    amount31To60: decimal.optional(),
    amount61Plus: decimal.optional(),
});
/**
 * Vendor item schema - products this vendor sells to you
 */
export const VendorItemSchema = z.object({
    vendorItemId: uuid.optional(),
    vendorId: uuid.optional(),
    productId: uuid.optional(),
    vendorItemCode: z.string().optional(),
    cost: decimalNullable.optional(),
    leadTimeDays: int32.nullable().optional(),
    lineNum: int32.nullable().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main Vendor GET Schema
// ============================================================================
/**
 * Vendor GET response schema
 * Endpoint: GET /{companyId}/vendors/{vendorId}
 * Endpoint: GET /{companyId}/vendors (returns array)
 */
export const VendorGET = z.object({
    // Primary identifier
    vendorId: uuid,
    // Basic info
    name: z.string().optional(),
    contactName: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    fax: z.string().optional(),
    website: z.string().optional(),
    remarks: z.string().optional(),
    // Status
    isActive: z.boolean().optional(),
    // Pricing/tax settings
    isTaxInclusivePricing: z.boolean().optional(),
    discount: decimal.optional(),
    // Lead time for reordering
    leadTimeDays: int32.nullable().optional(),
    // Defaults for new orders
    defaultCarrier: z.string().optional(),
    defaultPaymentMethod: z.string().optional(),
    // References
    currencyId: uuid.optional(),
    defaultPaymentTermsId: uuid.nullable().optional(),
    defaultAddressId: uuid.nullable().optional(),
    taxingSchemeId: uuid.nullable().optional(),
    // Included relationships
    currency: z.object({
        currencyId: uuid.optional(),
        name: z.string().optional(),
        isoCode: z.string().optional(),
        symbol: z.string().optional(),
        decimalPlaces: z.number().optional(),
        decimalSeparator: z.string().optional(),
        thousandsSeparator: z.string().optional(),
        isSymbolFirst: z.boolean().optional(),
        negativeType: z.string().optional(),
        timestamp: rowversion.optional(),
    }).nullable().optional(),
    defaultPaymentTerms: z.object({
        paymentTermsId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    defaultAddress: VendorAddressSchema.nullable().optional(),
    taxingScheme: z.object({
        taxingSchemeId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Addresses
    addresses: z.array(VendorAddressSchema).optional(),
    // Attachments (read-only)
    attachments: z.array(AttachmentSchema).optional(),
    // Financial (read-only)
    balances: z.array(VendorBalanceSchema).optional(),
    credits: z.array(VendorCreditSchema).optional(),
    dues: z.array(VendorDueSchema).optional(),
    // Vendor items (products they sell)
    vendorItems: z.array(VendorItemSchema).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
    // Audit fields (read-only)
    lastModifiedDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
    // Concurrency
    timestamp: rowversion.optional(),
});
// ============================================================================
// Includes & Filters Metadata
// ============================================================================
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=addresses,vendorItems,balances
 */
export const VendorIncludes = {
    addresses: {
        description: 'All addresses (stores) for this vendor',
        adds: ['addresses'],
        nested: ['address'],
    },
    defaultAddress: {
        description: 'Default address for this vendor',
        adds: ['defaultAddress'],
        nested: ['address'],
    },
    attachments: {
        description: 'File attachments (read-only)',
        adds: ['attachments'],
        nested: ['lastModifiedBy'],
    },
    balances: {
        description: 'How much you owe this vendor by currency',
        adds: ['balances'],
        nested: ['currency'],
    },
    credits: {
        description: 'Store credit with this vendor by currency',
        adds: ['credits'],
        nested: ['currency'],
    },
    dues: {
        description: 'Amounts owed by aging bucket (current, 1-30, 31-60, 61+)',
        adds: ['dues'],
        nested: ['currency'],
    },
    vendorItems: {
        description: 'Products this vendor sells to you',
        adds: ['vendorItems'],
        nested: ['product', 'vendor'],
    },
    currency: {
        description: 'Default currency for this vendor',
        adds: ['currency'],
        nested: [],
    },
    defaultPaymentTerms: {
        description: 'Default payment terms for this vendor',
        adds: ['defaultPaymentTerms'],
        nested: [],
    },
    taxingScheme: {
        description: 'Tax scheme for this vendor',
        adds: ['taxingScheme'],
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
 * Usage: ?filter[name]=acme&filter[isActive]=true
 */
export const VendorFilters = {
    name: {
        type: 'string',
        description: 'Filter by vendor name',
    },
    contactName: {
        type: 'string',
        description: 'Filter by contact name',
    },
    phone: {
        type: 'string',
        description: 'Filter by phone number',
    },
    email: {
        type: 'string',
        description: 'Filter by email address',
    },
    website: {
        type: 'string',
        description: 'Filter by website',
    },
    address: {
        type: 'string',
        description: 'Filter by address',
    },
    city: {
        type: 'string',
        description: 'Filter by city',
    },
    state: {
        type: 'string',
        description: 'Filter by state/province',
    },
    postalCode: {
        type: 'string',
        description: 'Filter by postal/zip code',
    },
    country: {
        type: 'string',
        description: 'Filter by country',
    },
    isActive: {
        type: 'boolean',
        description: 'Filter by active status (true/false)',
    },
    smart: {
        type: 'string',
        description: 'Full-text search on name and contact name',
    },
};
