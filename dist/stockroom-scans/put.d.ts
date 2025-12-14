import { z } from 'zod';
/**
 * StockroomScan PUT request schema
 * Endpoint: PUT /{companyId}/stockroom-scans
 *
 * Note: This endpoint accepts data in a generic "ObjectSubset" format
 * with attributes, relationships, and meta properties.
 *
 * The stockroom scans feature is used for mobile scanning operations
 * in the inFlow Stockroom mobile app.
 *
 * Required fields:
 * - stockroomScanId (in attributes, generate GUID for insert)
 */
export declare const StockroomScanPUT: z.ZodObject<{
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
 * Field constraints for StockroomScan
 *
 * Note: Due to the generic ObjectSubset format, specific field constraints
 * are not documented in the swagger specification. The actual fields
 * available depend on the stockroom scan type and context.
 */
export declare const StockroomScanConstraints: {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: any[];
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
//# sourceMappingURL=put.d.ts.map