import { z } from 'zod';
/**
 * ProductCostAdjustment GET response schema
 * Endpoint: GET /{companyId}/product-cost-adjustments/{productCostAdjustmentId}
 * Endpoint: GET /{companyId}/product-cost-adjustments (returns array)
 *
 * Adjusts the inventory cost per standard unit of measure for a product.
 * For serialized products, can adjust cost for a specific serial number.
 */
export declare const ProductCostAdjustmentGET: z.ZodObject<{
    productCostAdjustmentId: z.ZodString;
    productId: z.ZodOptional<z.ZodString>;
    product: z.ZodOptional<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        sku: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
        sku?: string;
    }, {
        productId?: string;
        name?: string;
        sku?: string;
    }>>;
    serial: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dateTime: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    unitCost: z.ZodOptional<z.ZodString>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    lastModifiedBy: z.ZodOptional<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedById?: string;
    productId?: string;
    serial?: string;
    timestamp?: string;
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    productCostAdjustmentId?: string;
    dateTime?: string;
    unitCost?: string;
}, {
    lastModifiedById?: string;
    productId?: string;
    serial?: string;
    timestamp?: string;
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    productCostAdjustmentId?: string;
    dateTime?: string;
    unitCost?: string;
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=product,lastModifiedBy
 */
export declare const ProductCostAdjustmentIncludes: {
    product: {
        description: string;
        adds: string[];
        nested: any[];
    };
    lastModifiedBy: {
        description: string;
        adds: string[];
        nested: any[];
    };
};
/**
 * Available filters for ?filter[x]= query parameter
 * No documented filters for this endpoint
 */
export declare const ProductCostAdjustmentFilters: {};
//# sourceMappingURL=get.d.ts.map