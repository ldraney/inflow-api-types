import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime } from '../primitives';
// ============================================================================
// Main ProductCostAdjustment GET Schema
// ============================================================================
/**
 * ProductCostAdjustment GET response schema
 * Endpoint: GET /{companyId}/product-cost-adjustments/{productCostAdjustmentId}
 * Endpoint: GET /{companyId}/product-cost-adjustments (returns array)
 *
 * Adjusts the inventory cost per standard unit of measure for a product.
 * For serialized products, can adjust cost for a specific serial number.
 */
export const ProductCostAdjustmentGET = z.object({
    // Primary identifier
    productCostAdjustmentId: uuid,
    // Product reference
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
        sku: z.string().optional(),
    }).optional(),
    // For serialized products - the serial number being adjusted
    serial: z.string().nullable().optional(),
    // Effective date of the adjustment
    dateTime: dateTime.optional(),
    // The new target cost per standard unit of measure
    unitCost: decimal.optional(),
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
 * Usage: ?include=product,lastModifiedBy
 */
export const ProductCostAdjustmentIncludes = {
    product: {
        description: 'Product details',
        adds: ['product'],
        nested: [],
    },
    lastModifiedBy: {
        description: 'Team member who last modified',
        adds: ['lastModifiedBy'],
        nested: [],
    },
};
/**
 * Available filters for ?filter[x]= query parameter
 * No documented filters for this endpoint
 */
export const ProductCostAdjustmentFilters = {};
