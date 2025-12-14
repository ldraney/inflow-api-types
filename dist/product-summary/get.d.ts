import { z } from 'zod';
/**
 * Product Summary GET response schema
 * Endpoint: GET /{companyId}/products/{productId}/summary
 *           GET /{companyId}/products/{productId}/summary?locationId={locationId}
 *
 * Endpoint: POST /{companyId}/products/summary (bulk fetch, returns array)
 *           Request body: array of ProductSummaryKey (up to 100)
 *
 * Key summary information about a product's inventory, optionally at a specific location.
 *
 * Note: swagger.json says quantities are type: number, but API returns decimal strings like "0.00000"
 */
export declare const ProductSummaryGET: z.ZodObject<{
    productId: z.ZodString;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    imageSmallUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityOnHand: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityOnOrder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityOnPurchaseOrder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityOnWorkOrder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityOnTransferOrder: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityReserved: z.ZodOptional<z.ZodString>;
    quantityReservedForSales: z.ZodOptional<z.ZodString>;
    quantityReservedForManufacturing: z.ZodOptional<z.ZodString>;
    quantityReservedForTransfers: z.ZodOptional<z.ZodString>;
    quantityReservedForBuilds: z.ZodOptional<z.ZodString>;
    quantityAvailable: z.ZodOptional<z.ZodString>;
    rawQuantityAvailable: z.ZodOptional<z.ZodString>;
    quantityPicked: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityInTransit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    quantityBuildable: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
    quantityOnHand?: string;
    imageSmallUrl?: string;
    quantityOnOrder?: string;
    quantityOnPurchaseOrder?: string;
    quantityOnWorkOrder?: string;
    quantityOnTransferOrder?: string;
    quantityReserved?: string;
    quantityReservedForSales?: string;
    quantityReservedForManufacturing?: string;
    quantityReservedForTransfers?: string;
    quantityReservedForBuilds?: string;
    quantityAvailable?: string;
    rawQuantityAvailable?: string;
    quantityPicked?: string;
    quantityInTransit?: string;
    quantityBuildable?: string;
}, {
    productId?: string;
    locationId?: string;
    quantityOnHand?: string;
    imageSmallUrl?: string;
    quantityOnOrder?: string;
    quantityOnPurchaseOrder?: string;
    quantityOnWorkOrder?: string;
    quantityOnTransferOrder?: string;
    quantityReserved?: string;
    quantityReservedForSales?: string;
    quantityReservedForManufacturing?: string;
    quantityReservedForTransfers?: string;
    quantityReservedForBuilds?: string;
    quantityAvailable?: string;
    rawQuantityAvailable?: string;
    quantityPicked?: string;
    quantityInTransit?: string;
    quantityBuildable?: string;
}>;
/**
 * Product Summary Key - used for bulk fetch via POST
 * Request body for: POST /{companyId}/products/summary
 *
 * Up to 100 product/location combinations can be fetched at once.
 */
export declare const ProductSummaryKey: z.ZodObject<{
    productId: z.ZodString;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
}, {
    productId?: string;
    locationId?: string;
}>;
/**
 * Query parameters for single product summary
 * GET /{companyId}/products/{productId}/summary?locationId={uuid}
 */
export declare const ProductSummaryQueryParams: {
    locationId: {
        type: string;
        required: boolean;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map