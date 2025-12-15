import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';
import { AddressPUT } from '../vendors/put.js';
// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================
/**
 * Customer address for PUT - requires customerAddressId for updates
 */
export const CustomerAddressPUT = z.object({
    customerAddressId: uuid, // Required - generate new GUID for insert
    name: z.string().optional(),
    address: AddressPUT.optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main Customer PUT Schema
// ============================================================================
/**
 * Customer PUT request schema
 * Endpoint: PUT /{companyId}/customers
 *
 * This is an upsert operation:
 * - Generate a new GUID for customerId when inserting
 * - Use an existing customerId when updating
 */
export const CustomerPUT = z.object({
    // Primary identifier - REQUIRED
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
    // Nested arrays - each item requires its own ID
    addresses: z.array(CustomerAddressPUT).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
    // Concurrency - include to protect against concurrent modifications
    timestamp: rowversion.optional(),
});
// ============================================================================
// Field Constraints
// ============================================================================
/**
 * Field constraints for Customer
 *
 * Use these to understand which fields can be modified and when.
 */
export const CustomerConstraints = {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: [
        'lastModifiedDttm',
        'lastModifiedById',
        'lastModifiedBy',
        'attachments',
        'balances',
        'credits',
        'dues',
        'orderHistory',
    ],
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: [],
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: ['customerId', 'name'],
        update: ['customerId'],
    },
    /**
     * Nested arrays that require their own IDs
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: [
        { field: 'addresses', idField: 'customerAddressId' },
    ],
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {
        isActive: true,
    },
};
/**
 * Helper to create a new customer payload with generated IDs
 */
export function createCustomerPayload(data, generateUuid) {
    return {
        customerId: generateUuid(),
        ...data,
    };
}
/**
 * Helper to prepare nested array items with generated IDs
 */
export function createNestedItems(items, idField, generateUuid) {
    return items.map(item => ({
        [idField]: generateUuid(),
        ...item,
    }));
}
