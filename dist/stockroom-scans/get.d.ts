import { z } from 'zod';
/**
 * StockroomScan GET response schema
 * Endpoint: GET /{companyId}/stockroom-scans (returns array)
 *
 * Note: This endpoint returns data in a generic "ObjectSubset" format
 * with attributes, relationships, and meta properties.
 *
 * The stockroom scans feature is used for mobile scanning operations
 * in the inFlow Stockroom mobile app.
 */
export declare const StockroomScanGET: z.ZodObject<{
    attributes: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    relationships: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodArray<z.ZodUnknown, "many">>>>>;
    meta: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    attributes?: Record<string, unknown>;
    relationships?: Record<string, unknown[]>;
    meta?: Record<string, unknown>;
}, {
    attributes?: Record<string, unknown>;
    relationships?: Record<string, unknown[]>;
    meta?: Record<string, unknown>;
}>;
/**
 * Available includes for ?include= query parameter
 */
export declare const StockroomScanIncludes: {};
/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[stockroomScanNumber]=...
 */
export declare const StockroomScanFilters: {
    stockroomScanNumber: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map