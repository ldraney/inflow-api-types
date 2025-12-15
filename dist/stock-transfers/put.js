import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';
import { StockTransferStatus } from './get.js';
// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================
/**
 * Quantity with unit of measure for PUT requests
 */
export const QuantityWithUomPUT = z.object({
    quantity: decimal,
    unitOfMeasure: z.string().optional(),
    unitOfMeasureId: uuid.optional(),
});
/**
 * Stock transfer line for PUT - requires stockTransferLineId for updates
 */
export const StockTransferLinePUT = z.object({
    stockTransferLineId: uuid, // Required - generate new GUID for insert
    productId: uuid,
    description: z.string().optional(),
    quantity: QuantityWithUomPUT.optional(),
    fromSublocation: z.string().nullable().optional(),
    toSublocation: z.string().nullable().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main StockTransfer PUT Schema
// ============================================================================
/**
 * StockTransfer PUT request schema
 * Endpoint: PUT /{companyId}/stock-transfers
 *
 * This is an upsert operation:
 * - Generate a new GUID for stockTransferId when inserting
 * - Use an existing stockTransferId when updating
 *
 * Required fields:
 * - stockTransferId (generate GUID for insert)
 * - fromLocationId (source location)
 * - toLocationId (destination location)
 */
export const StockTransferPUT = z.object({
    // Primary identifier - REQUIRED
    stockTransferId: uuid,
    // Transfer number (auto-generated if not provided)
    transferNumber: z.string().optional(),
    // Status
    status: StockTransferStatus.optional(),
    isCancelled: z.boolean().optional(),
    // Locations - REQUIRED
    fromLocationId: uuid,
    toLocationId: uuid,
    // Dates
    transferDate: z.string().optional(), // ISO date
    sentDate: z.string().nullable().optional(),
    receivedDate: z.string().nullable().optional(),
    // Assignment
    assignedToTeamMemberId: uuid.nullable().optional(),
    // Notes
    remarks: z.string().optional(),
    // Lines (inventory movements)
    lines: z.array(StockTransferLinePUT).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
    // Concurrency - include to protect against concurrent modifications
    timestamp: rowversion.optional(),
});
// ============================================================================
// Field Constraints
// ============================================================================
/**
 * Field constraints for StockTransfer
 *
 * Use these to understand which fields can be modified and when.
 */
export const StockTransferConstraints = {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: [
        'lastModifiedById',
        'lastModifiedBy',
        'attachments',
    ],
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: [],
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: ['stockTransferId', 'fromLocationId', 'toLocationId'],
        update: ['stockTransferId'],
    },
    /**
     * Nested arrays that require their own IDs
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: [
        { field: 'lines', idField: 'stockTransferLineId' },
    ],
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {
        status: 'Open',
    },
};
/**
 * Helper to create a new stock transfer payload with generated IDs
 */
export function createStockTransferPayload(data, generateUuid) {
    return {
        stockTransferId: generateUuid(),
        ...data,
    };
}
/**
 * Helper to create stock transfer lines with generated IDs
 */
export function createStockTransferLines(lines, generateUuid) {
    return lines.map(line => ({
        stockTransferLineId: generateUuid(),
        ...line,
    }));
}
