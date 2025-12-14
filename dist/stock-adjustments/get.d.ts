import { z } from 'zod';
/**
 * Attachment schema - read-only, included in attachments array
 */
export declare const StockAdjustmentAttachmentSchema: z.ZodObject<{
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
 * Quantity with unit of measure schema - used in lines
 */
export declare const StockAdjustmentQuantitySchema: z.ZodObject<{
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
 * Stock adjustment line schema - represents inventory quantity change
 */
export declare const StockAdjustmentLineSchema: z.ZodObject<{
    stockAdjustmentLineId: z.ZodOptional<z.ZodString>;
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
    quantity: z.ZodOptional<z.ZodObject<{
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
    quantity?: {
        quantity?: string;
        unitOfMeasure?: string;
        unitOfMeasureId?: string;
    };
    description?: string;
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
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
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    stockAdjustmentLineId?: string;
}>;
/**
 * StockAdjustment GET response schema
 * Endpoint: GET /{companyId}/stock-adjustments/{stockAdjustmentId}
 * Endpoint: GET /{companyId}/stock-adjustments (returns array)
 */
export declare const StockAdjustmentGET: z.ZodObject<{
    stockAdjustmentId: z.ZodString;
    adjustmentNumber: z.ZodOptional<z.ZodString>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>;
    adjustmentReasonId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    adjustmentReason: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        adjustmentReasonId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        adjustmentReasonId?: string;
    }, {
        name?: string;
        adjustmentReasonId?: string;
    }>>>;
    date: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    remarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        stockAdjustmentLineId: z.ZodOptional<z.ZodString>;
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
        quantity: z.ZodOptional<z.ZodObject<{
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
        quantity?: {
            quantity?: string;
            unitOfMeasure?: string;
            unitOfMeasureId?: string;
        };
        description?: string;
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        stockAdjustmentLineId?: string;
    }>, "many">>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
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
    lastModifiedById?: string;
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    attachments?: {
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
    }[];
    customFields?: Record<string, unknown>;
    location?: {
        locationId?: string;
        name?: string;
    };
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        stockAdjustmentLineId?: string;
    }[];
    date?: string;
    stockAdjustmentId?: string;
    adjustmentNumber?: string;
    adjustmentReasonId?: string;
    adjustmentReason?: {
        name?: string;
        adjustmentReasonId?: string;
    };
}, {
    lastModifiedById?: string;
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    attachments?: {
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
    }[];
    customFields?: Record<string, unknown>;
    location?: {
        locationId?: string;
        name?: string;
    };
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        stockAdjustmentLineId?: string;
    }[];
    date?: string;
    stockAdjustmentId?: string;
    adjustmentNumber?: string;
    adjustmentReasonId?: string;
    adjustmentReason?: {
        name?: string;
        adjustmentReasonId?: string;
    };
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=lines,location,adjustmentReason
 */
export declare const StockAdjustmentIncludes: {
    lines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    location: {
        description: string;
        adds: string[];
        nested: any[];
    };
    adjustmentReason: {
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
 * Usage: ?filter[adjustmentNumber]=SA-000123
 */
export declare const StockAdjustmentFilters: {
    adjustmentNumber: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map