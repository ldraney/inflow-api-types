import { z } from 'zod';
/**
 * Address for PUT requests
 */
export declare const AddressPUT: z.ZodObject<{
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
}>;
/**
 * Vendor address for PUT - requires vendorAddressId for updates
 */
export declare const VendorAddressPUT: z.ZodObject<{
    vendorAddressId: z.ZodString;
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
    vendorAddressId?: string;
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
}, {
    timestamp?: string;
    name?: string;
    vendorAddressId?: string;
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
}>;
/**
 * Vendor item for PUT - requires vendorItemId for updates
 */
export declare const VendorItemPUT: z.ZodObject<{
    vendorItemId: z.ZodString;
    productId: z.ZodString;
    vendorItemCode: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}, {
    productId?: string;
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}>;
/**
 * Vendor PUT request schema
 * Endpoint: PUT /{companyId}/vendors
 *
 * This is an upsert operation:
 * - Generate a new GUID for vendorId when inserting
 * - Use an existing vendorId when updating
 */
export declare const VendorPUT: z.ZodObject<{
    vendorId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    fax: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isTaxInclusivePricing: z.ZodOptional<z.ZodBoolean>;
    discount: z.ZodOptional<z.ZodString>;
    leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultCarrier: z.ZodOptional<z.ZodString>;
    defaultPaymentMethod: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodString>;
    defaultPaymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taxingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorAddressId: z.ZodString;
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
        vendorAddressId?: string;
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
    }, {
        timestamp?: string;
        name?: string;
        vendorAddressId?: string;
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
    }>, "many">>;
    vendorItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorItemId: z.ZodString;
        productId: z.ZodString;
        vendorItemCode: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }, {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    vendorId?: string;
    leadTimeDays?: number;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    remarks?: string;
    vendorItems?: {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    isTaxInclusivePricing?: boolean;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultAddressId?: string;
    addresses?: {
        timestamp?: string;
        name?: string;
        vendorAddressId?: string;
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
    }[];
}, {
    timestamp?: string;
    vendorId?: string;
    leadTimeDays?: number;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    remarks?: string;
    vendorItems?: {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    isTaxInclusivePricing?: boolean;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultAddressId?: string;
    addresses?: {
        timestamp?: string;
        name?: string;
        vendorAddressId?: string;
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
    }[];
}>;
/**
 * Field constraints for Vendor
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const VendorConstraints: {
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
        isTaxInclusivePricing: boolean;
    };
};
/**
 * Helper to create a new vendor payload with generated IDs
 */
export declare function createVendorPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare nested array items with generated IDs
 */
export declare function createNestedItems(items: any, idField: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map