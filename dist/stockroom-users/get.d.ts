import { z } from 'zod';
/**
 * StockroomUser GET response schema
 * Endpoint: GET /{companyId}/stockroom-users/{stockroomUserId}
 * Endpoint: GET /{companyId}/stockroom-users (returns array)
 *
 * Note: This endpoint returns data in a generic "ObjectSubset" format
 * with attributes, relationships, and meta properties.
 *
 * StockroomUsers represent users who have access to the inFlow Stockroom
 * mobile app. This is a read-only endpoint - users are managed through
 * the inFlow application UI.
 */
export declare const StockroomUserGET: z.ZodObject<{
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
export declare const StockroomUserIncludes: {};
/**
 * No filters are documented for stockroom users
 */
export declare const StockroomUserFilters: {};
//# sourceMappingURL=get.d.ts.map