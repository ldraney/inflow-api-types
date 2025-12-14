import { z } from 'zod';
/**
 * Quantity with unit of measure for PUT requests
 */
export declare const CountSheetQuantityPUT: z.ZodObject<{
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
 * Count sheet line for PUT - requires countSheetLineId for updates
 */
export declare const CountSheetLinePUT: z.ZodObject<{
    countSheetLineId: z.ZodString;
    productId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    countedQuantity: z.ZodOptional<z.ZodObject<{
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
    description?: string;
    countSheetLineId?: string;
    countedQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
}, {
    productId?: string;
    sublocation?: string;
    timestamp?: string;
    description?: string;
    countSheetLineId?: string;
    countedQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
}>;
/**
 * CountSheet PUT request schema
 * Endpoint: PUT /{companyId}/stock-counts/{stockCountId}/count-sheet
 *
 * This is an upsert operation:
 * - Generate a new GUID for countSheetId when inserting
 * - Use an existing countSheetId when updating
 *
 * Note: Count sheets are inserted/updated via the parent stock count endpoint
 *
 * Required fields:
 * - countSheetId (generate GUID for insert)
 */
export declare const CountSheetPUT: z.ZodObject<{
    countSheetId: z.ZodString;
    sheetNumber: z.ZodOptional<z.ZodNumber>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        countSheetLineId: z.ZodString;
        productId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        countedQuantity: z.ZodOptional<z.ZodObject<{
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
        description?: string;
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }, {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }>, "many">>;
    remarks: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    remarks?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }[];
    countSheetId?: string;
    sheetNumber?: number;
}, {
    timestamp?: string;
    remarks?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }[];
    countSheetId?: string;
    sheetNumber?: number;
}>;
/**
 * Field constraints for CountSheet
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const CountSheetConstraints: {
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
 * Helper to create a new count sheet payload with generated IDs
 */
export declare function createCountSheetPayload(data: any, generateUuid: any): any;
/**
 * Helper to create count sheet lines with generated IDs
 */
export declare function createCountSheetLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map