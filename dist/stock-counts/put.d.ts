import { z } from 'zod';
/**
 * Quantity with unit of measure for PUT requests
 */
export declare const CountQuantityPUT: z.ZodObject<{
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
 * Count sheet for PUT - embedded in StockCount
 */
export declare const StockCountSheetPUT: z.ZodObject<{
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
 * StockCount PUT request schema
 * Endpoint: PUT /{companyId}/stock-counts
 *
 * This is an upsert operation:
 * - Generate a new GUID for stockCountId when inserting
 * - Use an existing stockCountId when updating
 *
 * Required fields:
 * - stockCountId (generate GUID for insert)
 */
export declare const StockCountPUT: z.ZodObject<{
    stockCountId: z.ZodString;
    stockCountNumber: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodString>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isPrepared: z.ZodOptional<z.ZodBoolean>;
    isStarted: z.ZodOptional<z.ZodBoolean>;
    isReviewed: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    remarks: z.ZodOptional<z.ZodString>;
    sheets: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    stockCountId?: string;
    stockCountNumber?: string;
    isPrepared?: boolean;
    isStarted?: boolean;
    isReviewed?: boolean;
    sheets?: {
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
    }[];
}, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    stockCountId?: string;
    stockCountNumber?: string;
    isPrepared?: boolean;
    isStarted?: boolean;
    isReviewed?: boolean;
    sheets?: {
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
    }[];
}>;
/**
 * Field constraints for StockCount
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const StockCountConstraints: {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: string[];
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: string[];
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
 * Helper to create a new stock count payload with generated IDs
 */
export declare function createStockCountPayload(data: any, generateUuid: any): any;
/**
 * Helper to create count sheets with generated IDs
 */
export declare function createCountSheets(sheets: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map