import { z } from 'zod';
// ============================================================================
// StockroomScan PUT Schema
// ============================================================================
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
export const StockroomScanPUT = z.object({
    // Attributes contain the main data fields
    attributes: z.record(z.unknown()).nullable().optional(),
    // Relationships contain nested related entities
    relationships: z.record(z.array(z.unknown()).nullable()).nullable().optional(),
    // Meta contains additional metadata
    meta: z.record(z.unknown()).nullable().optional(),
});
// ============================================================================
// Field Constraints
// ============================================================================
/**
 * Field constraints for StockroomScan
 *
 * Note: Due to the generic ObjectSubset format, specific field constraints
 * are not documented in the swagger specification. The actual fields
 * available depend on the stockroom scan type and context.
 */
export const StockroomScanConstraints = {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: [],
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: [],
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: ['attributes.stockroomScanId'],
        update: ['attributes.stockroomScanId'],
    },
    /**
     * Nested arrays that require their own IDs
     */
    nestedWithIds: [],
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {},
};
