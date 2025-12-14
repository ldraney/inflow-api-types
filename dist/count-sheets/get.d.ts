import { z } from 'zod';
/**
 * Quantity with unit of measure schema - used in count sheet lines
 */
export declare const CountSheetQuantitySchema: z.ZodObject<{
    quantity: z.ZodOptional<z.ZodString>;
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
 * Count sheet line schema - represents a single item being counted
 */
export declare const CountSheetLineSchema: z.ZodObject<{
    countSheetLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    product: z.ZodOptional<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        sku: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
        sku?: string;
    }, {
        productId?: string;
        name?: string;
        sku?: string;
    }>>;
    description: z.ZodOptional<z.ZodString>;
    countedQuantity: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodOptional<z.ZodString>;
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
    snapshotQuantity: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodOptional<z.ZodString>;
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
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    countSheetLineId?: string;
    countedQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    snapshotQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
}, {
    productId?: string;
    sublocation?: string;
    timestamp?: string;
    description?: string;
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    countSheetLineId?: string;
    countedQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    snapshotQuantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
}>;
/**
 * Count sheet status enum
 * Note: API may return camelCase values despite swagger showing PascalCase
 */
export declare const CountSheetStatus: z.ZodEnum<["Open", "InProgress", "Completed", "open", "inProgress", "completed"]>;
/**
 * CountSheet GET response schema
 * Endpoint: GET /{companyId}/count-sheets/{countSheetId}
 *
 * Note: Count sheets are typically accessed via the parent StockCount.
 * This endpoint provides direct access to a single count sheet.
 */
export declare const CountSheetGET: z.ZodObject<{
    countSheetId: z.ZodString;
    sheetNumber: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodEnum<["Open", "InProgress", "Completed", "open", "inProgress", "completed"]>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    stockCountId: z.ZodOptional<z.ZodString>;
    stockCount: z.ZodOptional<z.ZodObject<{
        stockCountId: z.ZodOptional<z.ZodString>;
        stockCountNumber: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        stockCountId?: string;
        stockCountNumber?: string;
    }, {
        stockCountId?: string;
        stockCountNumber?: string;
    }>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMember: z.ZodOptional<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>;
    startedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    completedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        countSheetLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        product: z.ZodOptional<z.ZodObject<{
            productId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
            sku: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId?: string;
            name?: string;
            sku?: string;
        }, {
            productId?: string;
            name?: string;
            sku?: string;
        }>>;
        description: z.ZodOptional<z.ZodString>;
        countedQuantity: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodOptional<z.ZodString>;
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
        snapshotQuantity: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodOptional<z.ZodString>;
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        snapshotQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }, {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        snapshotQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }>, "many">>;
    remarks: z.ZodOptional<z.ZodString>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    lastModifiedBy: z.ZodOptional<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
    lastModifiedById?: string;
    timestamp?: string;
    remarks?: string;
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        snapshotQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }[];
    completedDate?: string;
    stockCount?: {
        stockCountId?: string;
        stockCountNumber?: string;
    };
    countSheetId?: string;
    sheetNumber?: number;
    startedDate?: string;
    stockCountId?: string;
}, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
    lastModifiedById?: string;
    timestamp?: string;
    remarks?: string;
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: {
        productId?: string;
        sublocation?: string;
        timestamp?: string;
        description?: string;
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        countSheetLineId?: string;
        countedQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        snapshotQuantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
    }[];
    completedDate?: string;
    stockCount?: {
        stockCountId?: string;
        stockCountNumber?: string;
    };
    countSheetId?: string;
    sheetNumber?: number;
    startedDate?: string;
    stockCountId?: string;
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=lines,stockCount
 */
export declare const CountSheetIncludes: {
    lines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    stockCount: {
        description: string;
        adds: string[];
        nested: any[];
    };
    assignedToTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    lastModifiedBy: {
        description: string;
        adds: string[];
        nested: any[];
    };
};
/**
 * No direct filters are documented for count sheets
 * Count sheets are typically accessed via the parent stock count
 */
export declare const CountSheetFilters: {};
//# sourceMappingURL=get.d.ts.map