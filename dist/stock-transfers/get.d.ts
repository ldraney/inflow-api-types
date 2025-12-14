import { z } from 'zod';
/**
 * Attachment schema - read-only, included in attachments array
 */
export declare const StockTransferAttachmentSchema: z.ZodObject<{
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
export declare const QuantityWithUomSchema: z.ZodObject<{
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
 * Stock transfer line schema - represents inventory movement
 */
export declare const StockTransferLineSchema: z.ZodObject<{
    stockTransferLineId: z.ZodOptional<z.ZodString>;
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
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
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
    product?: {
        productId?: string;
        name?: string;
        sku?: string;
    };
    stockTransferLineId?: string;
    fromSublocation?: string;
    toSublocation?: string;
}>;
/**
 * Stock transfer status enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const StockTransferStatus: z.ZodEnum<["open", "inTransit", "completed"]>;
/**
 * StockTransfer GET response schema
 * Endpoint: GET /{companyId}/stock-transfers/{stockTransferId}
 * Endpoint: GET /{companyId}/stock-transfers (returns array)
 */
export declare const StockTransferGET: z.ZodObject<{
    stockTransferId: z.ZodString;
    transferNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["open", "inTransit", "completed"]>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    fromLocationId: z.ZodOptional<z.ZodString>;
    fromLocation: z.ZodOptional<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>;
    toLocationId: z.ZodOptional<z.ZodString>;
    toLocation: z.ZodOptional<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>;
    transferDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    sentDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    receivedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMember: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    remarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        stockTransferLineId: z.ZodOptional<z.ZodString>;
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
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
        product?: {
            productId?: string;
            name?: string;
            sku?: string;
        };
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
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
    status?: "open" | "completed" | "inTransit";
    lastModifiedById?: string;
    timestamp?: string;
    fromLocationId?: string;
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
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    fromLocation?: {
        locationId?: string;
        name?: string;
    };
    isCancelled?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: {
        productId?: string;
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
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }[];
    stockTransferId?: string;
    transferNumber?: string;
    toLocationId?: string;
    toLocation?: {
        locationId?: string;
        name?: string;
    };
    transferDate?: string;
    sentDate?: string;
    receivedDate?: string;
}, {
    status?: "open" | "completed" | "inTransit";
    lastModifiedById?: string;
    timestamp?: string;
    fromLocationId?: string;
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
    lastModifiedBy?: {
        name?: string;
        teamMemberId?: string;
    };
    fromLocation?: {
        locationId?: string;
        name?: string;
    };
    isCancelled?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: {
        productId?: string;
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
        stockTransferLineId?: string;
        fromSublocation?: string;
        toSublocation?: string;
    }[];
    stockTransferId?: string;
    transferNumber?: string;
    toLocationId?: string;
    toLocation?: {
        locationId?: string;
        name?: string;
    };
    transferDate?: string;
    sentDate?: string;
    receivedDate?: string;
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=lines,fromLocation,toLocation
 */
export declare const StockTransferIncludes: {
    lines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    fromLocation: {
        description: string;
        adds: string[];
        nested: any[];
    };
    toLocation: {
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
 * Usage: ?filter[transferNumber]=ST-000123
 */
export declare const StockTransferFilters: {
    transferNumber: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map