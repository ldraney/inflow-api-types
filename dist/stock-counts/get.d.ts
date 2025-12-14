import { z } from 'zod';
/**
 * Attachment schema - read-only, included in attachments array
 */
export declare const StockCountAttachmentSchema: z.ZodObject<{
    attachmentId: z.ZodOptional<z.ZodString>;
    fileName: z.ZodOptional<z.ZodString>;
    fileSize: z.ZodOptional<z.ZodNumber>;
    attachmentUrl: z.ZodOptional<z.ZodString>;
    lastModDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
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
}, "strip", z.ZodTypeAny, {
    attachmentId?: string;
    fileName?: string;
    fileSize?: number;
    attachmentUrl?: string;
    lastModDttm?: string;
    lastModifiedById?: string;
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
}, {
    attachmentId?: string;
    fileName?: string;
    fileSize?: number;
    attachmentUrl?: string;
    lastModDttm?: string;
    lastModifiedById?: string;
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
}>;
/**
 * Quantity with unit of measure schema - used in count sheet lines
 */
export declare const CountQuantitySchema: z.ZodObject<{
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
 * Count sheet schema (embedded in StockCount.sheets array)
 */
export declare const StockCountSheetSchema: any;
/**
 * Stock count status enum
 * Note: API may return camelCase values despite swagger showing PascalCase
 */
export declare const StockCountStatus: z.ZodEnum<["Open", "InProgress", "InReview", "Completed", "open", "inProgress", "inReview", "completed"]>;
/**
 * StockCount GET response schema
 * Endpoint: GET /{companyId}/stock-counts/{stockCountId}
 * Endpoint: GET /{companyId}/stock-counts (returns array)
 */
export declare const StockCountGET: any;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=sheets,location
 */
export declare const StockCountIncludes: {
    sheets: {
        description: string;
        adds: string[];
        nested: string[];
    };
    location: {
        description: string;
        adds: string[];
        nested: any[];
    };
    assignedToTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    attachments: {
        description: string;
        adds: string[];
        nested: string[];
    };
    lastModifiedBy: {
        description: string;
        adds: string[];
        nested: any[];
    };
};
/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[stockCountNumber]=SC-000123
 */
export declare const StockCountFilters: {
    stockCountNumber: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map