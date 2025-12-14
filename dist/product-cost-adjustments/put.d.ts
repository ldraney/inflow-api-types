import { z } from 'zod';
/**
 * ProductCostAdjustment PUT request schema
 * Endpoint: PUT /{companyId}/product-cost-adjustments
 *
 * This is an upsert operation:
 * - Generate a new GUID for productCostAdjustmentId when inserting
 * - Use an existing productCostAdjustmentId when updating
 *
 * Required fields:
 * - productCostAdjustmentId (generate GUID for insert)
 * - productId (the product whose cost is being adjusted)
 * - unitCost (the new target cost)
 */
export declare const ProductCostAdjustmentPUT: z.ZodObject<{
    productCostAdjustmentId: z.ZodString;
    productId: z.ZodString;
    serial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateTime: z.ZodOptional<z.ZodString>;
    unitCost: z.ZodString;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    serial?: string;
    timestamp?: string;
    productCostAdjustmentId?: string;
    dateTime?: string;
    unitCost?: string;
}, {
    productId?: string;
    serial?: string;
    timestamp?: string;
    productCostAdjustmentId?: string;
    dateTime?: string;
    unitCost?: string;
}>;
/**
 * Field constraints for ProductCostAdjustment
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const ProductCostAdjustmentConstraints: {
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
     */
    nestedWithIds: any[];
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {};
};
/**
 * Helper to create a new product cost adjustment payload with generated ID
 */
export declare function createProductCostAdjustmentPayload(data: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map