import { z } from 'zod';
// ============================================================================
// StockroomScan GET Schema
// ============================================================================
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
export const StockroomScanGET = z.object({
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
export const StockroomScanIncludes = {
// Include options may exist but are not documented in swagger
};
/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[stockroomScanNumber]=...
 */
export const StockroomScanFilters = {
    stockroomScanNumber: {
        type: 'string',
        description: 'Filter by stockroom scan number',
    },
};
