import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime, int64 } from '../primitives';
// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================
/**
 * Attachment schema - read-only, included in attachments array
 */
export const StockAdjustmentAttachmentSchema = z.object({
    attachmentId: uuid.optional(),
    fileName: z.string().optional(),
    fileSize: int64.optional(),
    attachmentUrl: z.string().optional(),
    lastModDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
    lastModifiedBy: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).optional(),
});
/**
 * Quantity with unit of measure schema - used in lines
 */
export const StockAdjustmentQuantitySchema = z.object({
    quantity: decimal.optional(),
    unitOfMeasure: z.string().optional(),
    unitOfMeasureId: uuid.optional(),
});
/**
 * Stock adjustment line schema - represents inventory quantity change
 */
export const StockAdjustmentLineSchema = z.object({
    stockAdjustmentLineId: uuid.optional(),
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
        sku: z.string().optional(),
    }).optional(),
    description: z.string().optional(),
    quantity: StockAdjustmentQuantitySchema.optional(),
    sublocation: z.string().nullable().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main StockAdjustment GET Schema
// ============================================================================
/**
 * StockAdjustment GET response schema
 * Endpoint: GET /{companyId}/stock-adjustments/{stockAdjustmentId}
 * Endpoint: GET /{companyId}/stock-adjustments (returns array)
 */
export const StockAdjustmentGET = z.object({
    // Primary identifier
    stockAdjustmentId: uuid,
    // Adjustment number (shown on printed documents)
    adjustmentNumber: z.string().optional(),
    // Status
    isCancelled: z.boolean().optional(),
    // Location
    locationId: uuid.optional(),
    location: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).optional(),
    // Adjustment reason
    adjustmentReasonId: uuid.nullable().optional(),
    adjustmentReason: z.object({
        adjustmentReasonId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Date
    date: dateTime.optional(),
    // Notes
    remarks: z.string().optional(),
    // Lines (inventory adjustments)
    lines: z.array(StockAdjustmentLineSchema).optional(),
    // Attachments (read-only)
    attachments: z.array(StockAdjustmentAttachmentSchema).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
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
 * Usage: ?include=lines,location,adjustmentReason
 */
export const StockAdjustmentIncludes = {
    lines: {
        description: 'Adjustment line items with product details',
        adds: ['lines'],
        nested: ['product'],
    },
    location: {
        description: 'Location where adjustment occurred',
        adds: ['location'],
        nested: [],
    },
    adjustmentReason: {
        description: 'Reason for the adjustment',
        adds: ['adjustmentReason'],
        nested: [],
    },
    attachments: {
        description: 'File attachments (read-only)',
        adds: ['attachments'],
        nested: ['lastModifiedBy'],
    },
    lastModifiedBy: {
        description: 'Team member who last modified',
        adds: ['lastModifiedBy'],
        nested: [],
    },
};
/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[adjustmentNumber]=SA-000123
 */
export const StockAdjustmentFilters = {
    adjustmentNumber: {
        type: 'string',
        description: 'Filter by adjustment number',
    },
};
