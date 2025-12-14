import { z } from 'zod';
/**
 * Customer address for PUT - requires customerAddressId for updates
 */
export declare const CustomerAddressPUT: z.ZodObject<{
    customerAddressId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        address1: z.ZodOptional<z.ZodString>;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        remarks: z.ZodOptional<z.ZodString>;
        addressType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Commercial", "Residential", "commercial", "residential"]>>>;
    }, "strip", z.ZodTypeAny, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    name?: string;
    address?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    customerAddressId?: string;
}, {
    timestamp?: string;
    name?: string;
    address?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    customerAddressId?: string;
}>;
/**
 * Customer PUT request schema
 * Endpoint: PUT /{companyId}/customers
 *
 * This is an upsert operation:
 * - Generate a new GUID for customerId when inserting
 * - Use an existing customerId when updating
 */
export declare const CustomerPUT: z.ZodObject<{
    customerId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    fax: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    discount: z.ZodOptional<z.ZodString>;
    pricingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taxExemptNumber: z.ZodOptional<z.ZodString>;
    taxingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultCarrier: z.ZodOptional<z.ZodString>;
    defaultPaymentMethod: z.ZodOptional<z.ZodString>;
    defaultLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultSalesRep: z.ZodOptional<z.ZodString>;
    defaultSalesRepTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultBillingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultShippingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultPaymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        customerAddressId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodObject<{
            address1: z.ZodOptional<z.ZodString>;
            address2: z.ZodOptional<z.ZodString>;
            city: z.ZodOptional<z.ZodString>;
            state: z.ZodOptional<z.ZodString>;
            postalCode: z.ZodOptional<z.ZodString>;
            country: z.ZodOptional<z.ZodString>;
            remarks: z.ZodOptional<z.ZodString>;
            addressType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Commercial", "Residential", "commercial", "residential"]>>>;
        }, "strip", z.ZodTypeAny, {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        }, {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        }>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
    }, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    remarks?: string;
    customFields?: Record<string, unknown>;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    addresses?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
    }[];
    customerId?: string;
    taxExemptNumber?: string;
    defaultLocationId?: string;
    defaultSalesRep?: string;
    defaultSalesRepTeamMemberId?: string;
    defaultBillingAddressId?: string;
    defaultShippingAddressId?: string;
}, {
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    remarks?: string;
    customFields?: Record<string, unknown>;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    addresses?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
    }[];
    customerId?: string;
    taxExemptNumber?: string;
    defaultLocationId?: string;
    defaultSalesRep?: string;
    defaultSalesRepTeamMemberId?: string;
    defaultBillingAddressId?: string;
    defaultShippingAddressId?: string;
}>;
/**
 * Field constraints for Customer
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const CustomerConstraints: {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: string[];
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: any[];
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: string[];
        update: string[];
    };
    /**
     * Nested arrays that require their own IDs
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: {
        field: string;
        idField: string;
    }[];
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {
        isActive: boolean;
    };
};
/**
 * Helper to create a new customer payload with generated IDs
 */
export declare function createCustomerPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare nested array items with generated IDs
 */
export declare function createNestedItems(items: any, idField: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map