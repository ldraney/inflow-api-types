import { z } from 'zod';
/**
 * Quantity with unit of measure for PUT requests
 */
export declare const StockAdjustmentQuantityPUT: z.ZodObject<{
    quantity: z.ZodString;
    unitOfMeasure: z.ZodOptional<z.ZodString>;
    unitOfMeasureId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    quantity?: string;
    unitOfMeasure?: string;
    unitOfMeasureId?: string;
}, {
    quantity?: string;
    unitOfMeasure?: string;
    unitOfMeasureId?: string;
}>;
/**
 * Stock adjustment line for PUT - requires stockAdjustmentLineId for updates
 */
export declare const StockAdjustmentLinePUT: z.ZodObject<{
    stockAdjustmentLineId: z.ZodString;
    productId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodString;
        unitOfMeasure: z.ZodOptional<z.ZodString>;
        unitOfMeasureId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    }, {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    }>>;
    sublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    description?: string;
    stockAdjustmentLineId?: string;
}, {
    productId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    description?: string;
    stockAdjustmentLineId?: string;
}>;
/**
 * StockAdjustment PUT request schema
 * Endpoint: PUT /{companyId}/stock-adjustments
 *
 * This is an upsert operation:
 * - Generate a new GUID for stockAdjustmentId when inserting
 * - Use an existing stockAdjustmentId when updating
 *
 * Required fields:
 * - stockAdjustmentId (generate GUID for insert)
 */
export declare const StockAdjustmentPUT: z.ZodObject<{
    stockAdjustmentId: z.ZodString;
    adjustmentNumber: z.ZodOptional<z.ZodString>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodString>;
    adjustmentReasonId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    date: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        stockAdjustmentLineId: z.ZodString;
        productId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodString;
            unitOfMeasure: z.ZodOptional<z.ZodString>;
            unitOfMeasureId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        }, {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        }>>;
        sublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockAdjustmentLineId?: string;
    }, {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockAdjustmentLineId?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    isCancelled?: boolean;
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockAdjustmentLineId?: string;
    }[];
    date?: string;
    stockAdjustmentId?: string;
    adjustmentNumber?: string;
    adjustmentReasonId?: string;
}, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    isCancelled?: boolean;
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockAdjustmentLineId?: string;
    }[];
    date?: string;
    stockAdjustmentId?: string;
    adjustmentNumber?: string;
    adjustmentReasonId?: string;
}>;
/**
 * Field constraints for StockAdjustment
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const StockAdjustmentConstraints: {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: string[];
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
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: {
        field: string;
        idField: string;
    }[];
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {};
};
/**
 * Helper to create a new stock adjustment payload with generated IDs
 */
export declare function createStockAdjustmentPayload(data: any, generateUuid: any): any;
/**
 * Helper to create stock adjustment lines with generated IDs
 */
export declare function createStockAdjustmentLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map