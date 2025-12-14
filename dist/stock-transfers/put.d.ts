import { z } from 'zod';
/**
 * Quantity with unit of measure for PUT requests
 */
export declare const QuantityWithUomPUT: z.ZodObject<{
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
 * Stock transfer line for PUT - requires stockTransferLineId for updates
 */
export declare const StockTransferLinePUT: z.ZodObject<{
    stockTransferLineId: z.ZodString;
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
    fromSublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    toSublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    quantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    description?: string;
    stockTransferLineId?: string;
    fromSublocation?: string;
    toSublocation?: string;
}, {
    productId?: string;
    timestamp?: string;
    quantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    description?: string;
    stockTransferLineId?: string;
    fromSublocation?: string;
    toSublocation?: string;
}>;
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
export declare const StockTransferPUT: z.ZodObject<{
    stockTransferId: z.ZodString;
    transferNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["open", "inTransit", "completed"]>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    fromLocationId: z.ZodString;
    toLocationId: z.ZodString;
    transferDate: z.ZodOptional<z.ZodString>;
    sentDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    receivedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    remarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        stockTransferLineId: z.ZodString;
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
        fromSublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        toSublocation: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }, {
        productId?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "open" | "completed" | "inTransit";
    timestamp?: string;
    fromLocationId?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    isCancelled?: boolean;
    assignedToTeamMemberId?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }[];
    stockTransferId?: string;
    transferNumber?: string;
    toLocationId?: string;
    transferDate?: string;
    sentDate?: string;
    receivedDate?: string;
}, {
    status?: "open" | "completed" | "inTransit";
    timestamp?: string;
    fromLocationId?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    isCancelled?: boolean;
    assignedToTeamMemberId?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }[];
    stockTransferId?: string;
    transferNumber?: string;
    toLocationId?: string;
    transferDate?: string;
    sentDate?: string;
    receivedDate?: string;
}>;
/**
 * Field constraints for StockTransfer
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const StockTransferConstraints: {
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
    defaults: {
        status: string;
    };
};
/**
 * Helper to create a new stock transfer payload with generated IDs
 */
export declare function createStockTransferPayload(data: any, generateUuid: any): any;
/**
 * Helper to create stock transfer lines with generated IDs
 */
export declare function createStockTransferLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map