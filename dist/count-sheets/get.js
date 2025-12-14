import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime, int32 } from '../primitives';
// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================
/**
 * Quantity with unit of measure schema - used in count sheet lines
 */
export const CountSheetQuantitySchema = z.object({
    quantity: decimal.optional(),
    unitOfMeasure: z.string().optional(),
    unitOfMeasureId: uuid.optional(),
});
/**
 * Count sheet line schema - represents a single item being counted
 */
export const CountSheetLineSchema = z.object({
    countSheetLineId: uuid.optional(),
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
        sku: z.string().optional(),
    }).optional(),
    description: z.string().optional(),
    countedQuantity: CountSheetQuantitySchema.optional(),
    snapshotQuantity: CountSheetQuantitySchema.optional(),
    sublocation: z.string().nullable().optional(),
    timestamp: rowversion.optional(),
});
/**
 * Count sheet status enum
 * Note: API may return camelCase values despite swagger showing PascalCase
 */
export const CountSheetStatus = z.enum(['Open', 'InProgress', 'Completed', 'open', 'inProgress', 'completed']);
// ============================================================================
// Main CountSheet GET Schema
// ============================================================================
/**
 * CountSheet GET response schema
 * Endpoint: GET /{companyId}/count-sheets/{countSheetId}
 *
 * Note: Count sheets are typically accessed via the parent StockCount.
 * This endpoint provides direct access to a single count sheet.
 */
export const CountSheetGET = z.object({
    // Primary identifier
    countSheetId: uuid,
    // Sheet number within the stock count
    sheetNumber: int32.optional(),
    // Status
    status: CountSheetStatus.optional(),
    isCancelled: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    // Parent stock count
    stockCountId: uuid.optional(),
    stockCount: z.object({
        stockCountId: uuid.optional(),
        stockCountNumber: z.string().optional(),
    }).optional(),
    // Assignment
    assignedToTeamMemberId: uuid.nullable().optional(),
    assignedToTeamMember: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).optional(),
    // Dates
    startedDate: dateTime.nullable().optional(),
    completedDate: dateTime.nullable().optional(),
    // Lines
    lines: z.array(CountSheetLineSchema).optional(),
    // Notes
    remarks: z.string().optional(),
    // Audit fields (read-only)
    lastModifiedById: uuid.optional(),
    lastModifiedBy: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).optional(),
    // Concurrency
    timestamp: rowversion.optional(),
});
// ============================================================================
// Includes & Filters Metadata
// ============================================================================
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=lines,stockCount
 */
export const CountSheetIncludes = {
    lines: {
        description: 'Count sheet lines with product details',
        adds: ['lines'],
        nested: ['product'],
    },
    stockCount: {
        description: 'Parent stock count',
        adds: ['stockCount'],
        nested: [],
    },
    assignedToTeamMember: {
        description: 'Team member assigned to the count sheet',
        adds: ['assignedToTeamMember'],
        nested: [],
    },
    lastModifiedBy: {
        description: 'Team member who last modified',
        adds: ['lastModifiedBy'],
        nested: [],
    },
};
/**
 * No direct filters are documented for count sheets
 * Count sheets are typically accessed via the parent stock count
 */
export const CountSheetFilters = {};
