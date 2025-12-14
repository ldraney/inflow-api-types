import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime, int64 } from '../primitives';
import { AddressSchema } from '../vendors/get';
// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================
/**
 * Customer address schema - included via ?include=addresses
 */
export const CustomerAddressSchema = z.object({
    customerAddressId: uuid.optional(),
    customerId: uuid.optional(),
    name: z.string().optional(),
    address: AddressSchema.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Attachment schema - read-only, included via ?include=attachments
 */
export const CustomerAttachmentSchema = z.object({
    attachmentId: uuid.optional(),
    fileName: z.string().optional(),
    fileSize: int64.optional(),
    attachmentUrl: z.string().optional(),
    lastModDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
});
/**
 * Customer balance schema - read-only, included via ?include=balances
 */
export const CustomerBalanceSchema = z.object({
    customerBalanceId: z.string().optional(),
    customerId: uuid.optional(),
    currencyId: uuid.nullable().optional(),
    balance: decimal.optional(),
});
/**
 * Customer credit schema - read-only, included via ?include=credits
 */
export const CustomerCreditSchema = z.object({
    customerCreditId: z.string().optional(),
    customerId: uuid.optional(),
    currencyId: uuid.nullable().optional(),
    credit: decimal.optional(),
});
/**
 * Customer due schema - read-only, shows amounts owed by aging bucket
 */
export const CustomerDueSchema = z.object({
    customerDueId: z.string().optional(),
    currencyId: uuid.optional(),
    amountCurrent: decimal.optional(),
    amount1To30: decimal.optional(),
    amount31To60: decimal.optional(),
    amount61Plus: decimal.optional(),
});
/**
 * Customer order history schema - read-only
 */
export const CustomerOrderHistorySchema = z.object({
    lastOrderDate: dateTime.nullable().optional(),
    orderCount: z.number().optional(),
    totalOrdered: decimal.optional(),
}).nullable().optional();
// ============================================================================
// Main Customer GET Schema
// ============================================================================
/**
 * Customer GET response schema
 * Endpoint: GET /{companyId}/customers/{customerId}
 * Endpoint: GET /{companyId}/customers (returns array)
 */
export const CustomerGET = z.object({
    // Primary identifier
    customerId: uuid,
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
    // Pricing/discount
    discount: decimal.optional(),
    pricingSchemeId: uuid.nullable().optional(),
    // Tax settings
    taxExemptNumber: z.string().optional(),
    taxingSchemeId: uuid.nullable().optional(),
    // Defaults for new orders
    defaultCarrier: z.string().optional(),
    defaultPaymentMethod: z.string().optional(),
    defaultLocationId: uuid.nullable().optional(),
    defaultSalesRep: z.string().optional(),
    defaultSalesRepTeamMemberId: uuid.nullable().optional(),
    // Addresses
    defaultBillingAddressId: uuid.nullable().optional(),
    defaultShippingAddressId: uuid.nullable().optional(),
    // Payment terms
    defaultPaymentTermsId: uuid.nullable().optional(),
    // Included relationships
    pricingScheme: z.object({
        pricingSchemeId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    taxingScheme: z.object({
        taxingSchemeId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    defaultPaymentTerms: z.object({
        paymentTermsId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    defaultLocation: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    defaultSalesRepTeamMember: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    defaultBillingAddress: CustomerAddressSchema.nullable().optional(),
    defaultShippingAddress: CustomerAddressSchema.nullable().optional(),
    // Addresses
    addresses: z.array(CustomerAddressSchema).optional(),
    // Attachments (read-only)
    attachments: z.array(CustomerAttachmentSchema).optional(),
    // Financial (read-only)
    balances: z.array(CustomerBalanceSchema).optional(),
    credits: z.array(CustomerCreditSchema).optional(),
    dues: z.array(CustomerDueSchema).optional(),
    // Order history (read-only)
    orderHistory: CustomerOrderHistorySchema,
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
 * Usage: ?include=addresses,balances,pricingScheme
 */
export const CustomerIncludes = {
    addresses: {
        description: 'All addresses for this customer',
        adds: ['addresses'],
        nested: ['address'],
    },
    defaultBillingAddress: {
        description: 'Default billing address',
        adds: ['defaultBillingAddress'],
        nested: ['address'],
    },
    defaultShippingAddress: {
        description: 'Default shipping address',
        adds: ['defaultShippingAddress'],
        nested: ['address'],
    },
    attachments: {
        description: 'File attachments (read-only)',
        adds: ['attachments'],
        nested: ['lastModifiedBy'],
    },
    balances: {
        description: 'How much this customer owes you by currency',
        adds: ['balances'],
        nested: ['currency'],
    },
    credits: {
        description: 'Store credit with this customer by currency',
        adds: ['credits'],
        nested: ['currency'],
    },
    dues: {
        description: 'Amounts owed by aging bucket (current, 1-30, 31-60, 61+)',
        adds: ['dues'],
        nested: ['currency'],
    },
    orderHistory: {
        description: 'Order history summary (last order date, count, total)',
        adds: ['orderHistory'],
        nested: [],
    },
    pricingScheme: {
        description: 'Pricing scheme for this customer',
        adds: ['pricingScheme'],
        nested: [],
    },
    taxingScheme: {
        description: 'Tax scheme for this customer',
        adds: ['taxingScheme'],
        nested: [],
    },
    defaultPaymentTerms: {
        description: 'Default payment terms for this customer',
        adds: ['defaultPaymentTerms'],
        nested: [],
    },
    defaultLocation: {
        description: 'Default location for shipping/picking',
        adds: ['defaultLocation'],
        nested: [],
    },
    defaultSalesRepTeamMember: {
        description: 'Default sales rep team member',
        adds: ['defaultSalesRepTeamMember'],
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
export const CustomerFilters = {
    name: {
        type: 'string',
        description: 'Filter by customer name',
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
    pricingSchemeId: {
        type: 'uuid',
        description: 'Filter by pricing scheme ID',
    },
    defaultLocationId: {
        type: 'uuid',
        description: 'Filter by default location ID',
    },
    isActive: {
        type: 'boolean',
        description: 'Filter by active status (true/false)',
    },
    smart: {
        type: 'string',
        description: 'Full-text search on name and contact name',
    },
    lastOrder: {
        type: 'number',
        description: 'Filter by number of days since customer last ordered',
    },
};
