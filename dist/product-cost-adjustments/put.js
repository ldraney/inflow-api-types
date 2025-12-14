import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives';
// ============================================================================
// Main ProductCostAdjustment PUT Schema
// ============================================================================
/**
 * ProductCostAdjustment PUT request schema
 * Endpoint: PUT /{companyId}/product-cost-adjustments
 *
 * This is an upsert operation:
 * - Generate a new GUID for productCostAdjustmentId when inserting
 * - Use an existing productCostAdjustmentId when updating
 *
 * Required fields:
 * - productCostAdjustmentId (generate GUID for insert)
 * - productId (the product whose cost is being adjusted)
 * - unitCost (the new target cost)
 */
export const ProductCostAdjustmentPUT = z.object({
    // Primary identifier - REQUIRED
    productCostAdjustmentId: uuid,
    // Product reference - REQUIRED
    productId: uuid,
    // For serialized products - the serial number being adjusted
    serial: z.string().nullable().optional(),
    // Effective date of the adjustment
    dateTime: z.string().optional(), // ISO datetime
    // The new target cost per standard unit of measure - REQUIRED
    unitCost: decimal,
    // Concurrency - include to protect against concurrent modifications
    timestamp: rowversion.optional(),
});
// ============================================================================
// Field Constraints
// ============================================================================
/**
 * Field constraints for ProductCostAdjustment
 *
 * Use these to understand which fields can be modified and when.
 */
export const ProductCostAdjustmentConstraints = {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: [
        'lastModifiedById',
        'lastModifiedBy',
    ],
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: [],
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: ['productCostAdjustmentId', 'productId', 'unitCost'],
        update: ['productCostAdjustmentId'],
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
/**
 * Helper to create a new product cost adjustment payload with generated ID
 */
export function createProductCostAdjustmentPayload(data, generateUuid) {
    return {
        productCostAdjustmentId: generateUuid(),
        ...data,
    };
}
