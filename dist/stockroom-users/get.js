import { z } from 'zod';
// ============================================================================
// StockroomUser GET Schema
// ============================================================================
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
export const StockroomUserGET = z.object({
    // Attributes contain the main data fields
    attributes: z.record(z.unknown()).nullable().optional(),
    // Relationships contain nested related entities
    relationships: z.record(z.array(z.unknown()).nullable()).nullable().optional(),
    // Meta contains additional metadata
    meta: z.record(z.unknown()).nullable().optional(),
});
// ============================================================================
// Includes & Filters Metadata
// ============================================================================
/**
 * Available includes for ?include= query parameter
 */
export const StockroomUserIncludes = {
// Include options may exist but are not documented in swagger
};
/**
 * No filters are documented for stockroom users
 */
export const StockroomUserFilters = {};
