import { z } from 'zod';
/**
 * Manufacturing order status
 */
export declare const MOStatus: z.ZodEnum<["Open", "InProgress", "Completed", "open", "inProgress", "completed"]>;
/**
 * Attachment schema for manufacturing orders
 */
export declare const MOAttachmentSchema: z.ZodObject<{
    attachmentId: z.ZodOptional<z.ZodString>;
    fileName: z.ZodOptional<z.ZodString>;
    fileSize: z.ZodOptional<z.ZodNumber>;
    attachmentUrl: z.ZodOptional<z.ZodString>;
    lastModDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    attachmentId?: string;
    fileName?: string;
    fileSize?: number;
    attachmentUrl?: string;
    lastModDttm?: string;
    lastModifiedById?: string;
}, {
    attachmentId?: string;
    fileName?: string;
    fileSize?: number;
    attachmentUrl?: string;
    lastModDttm?: string;
    lastModifiedById?: string;
}>;
/**
 * Manufacturing order operation - tasks required to complete assembly
 */
export declare const ManufacturingOrderOperationSchema: z.ZodObject<{
    manufacturingOrderOperationId: z.ZodOptional<z.ZodString>;
    operationTypeId: z.ZodOptional<z.ZodString>;
    operationType: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        operationTypeId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        operationTypeId?: string;
        name?: string;
    }, {
        operationTypeId?: string;
        name?: string;
    }>>>;
    instructions: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    perHourCost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    seconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minutes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    cost?: string;
    operationTypeId?: string;
    instructions?: string;
    perHourCost?: string;
    remarks?: string;
    operationType?: {
        operationTypeId?: string;
        name?: string;
    };
    manufacturingOrderOperationId?: string;
    seconds?: string;
    minutes?: string;
}, {
    timestamp?: string;
    cost?: string;
    operationTypeId?: string;
    instructions?: string;
    perHourCost?: string;
    remarks?: string;
    operationType?: {
        operationTypeId?: string;
        name?: string;
    };
    manufacturingOrderOperationId?: string;
    seconds?: string;
    minutes?: string;
}>;
/**
 * Manufacturing order line - BOM definition (finished product + raw materials)
 */
export declare const ManufacturingOrderLineSchema: any;
/**
 * Manufacturing order pick line - raw materials picked from warehouse
 */
export declare const ManufacturingOrderPickLineSchema: z.ZodObject<{
    manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
    manufacturingOrderId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
    }, {
        productId?: string;
        name?: string;
    }>>>;
    description: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodObject<{
        standardQuantity: z.ZodOptional<z.ZodString>;
        uomQuantity: z.ZodOptional<z.ZodString>;
        uom: z.ZodOptional<z.ZodString>;
        serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    }, {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    }>>;
    locationId: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>>;
    sublocation: z.ZodOptional<z.ZodString>;
    pickDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    location?: {
        locationId?: string;
        name?: string;
    };
    product?: {
        productId?: string;
        name?: string;
    };
    pickDate?: string;
    manufacturingOrderId?: string;
    manufacturingOrderPickLineId?: string;
}, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    location?: {
        locationId?: string;
        name?: string;
    };
    product?: {
        productId?: string;
        name?: string;
    };
    pickDate?: string;
    manufacturingOrderId?: string;
    manufacturingOrderPickLineId?: string;
}>;
/**
 * Manufacturing order put-away line - finished products put into warehouse
 */
export declare const ManufacturingOrderPutLineSchema: z.ZodObject<{
    manufacturingOrderPutLineId: z.ZodOptional<z.ZodString>;
    manufacturingOrderId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
    }, {
        productId?: string;
        name?: string;
    }>>>;
    description: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodObject<{
        standardQuantity: z.ZodOptional<z.ZodString>;
        uomQuantity: z.ZodOptional<z.ZodString>;
        uom: z.ZodOptional<z.ZodString>;
        serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    }, {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    }>>;
    locationId: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>>;
    sublocation: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    location?: {
        locationId?: string;
        name?: string;
    };
    product?: {
        productId?: string;
        name?: string;
    };
    manufacturingOrderId?: string;
    manufacturingOrderPutLineId?: string;
}, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    location?: {
        locationId?: string;
        name?: string;
    };
    product?: {
        productId?: string;
        name?: string;
    };
    manufacturingOrderId?: string;
    manufacturingOrderPutLineId?: string;
}>;
/**
 * Manufacturing order pick matching - matches pick lines to order lines
 */
export declare const ManufacturingOrderPickMatchingSchema: z.ZodObject<{
    manufacturingOrderPickMatchingId: z.ZodOptional<z.ZodString>;
    manufacturingOrderId: z.ZodOptional<z.ZodString>;
    manufacturingOrderLineId: z.ZodOptional<z.ZodString>;
    manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
    matchedQuantity: z.ZodOptional<z.ZodString>;
    serial: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodNumber>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedById?: string;
    serial?: string;
    timestamp?: string;
    manufacturingOrderLineId?: string;
    manufacturingOrderId?: string;
    manufacturingOrderPickLineId?: string;
    manufacturingOrderPickMatchingId?: string;
    matchedQuantity?: string;
    version?: number;
}, {
    lastModifiedById?: string;
    serial?: string;
    timestamp?: string;
    manufacturingOrderLineId?: string;
    manufacturingOrderId?: string;
    manufacturingOrderPickLineId?: string;
    manufacturingOrderPickMatchingId?: string;
    matchedQuantity?: string;
    version?: number;
}>;
/**
 * ManufacturingOrder GET response schema
 * Endpoint: GET /{companyId}/manufacturing-orders/{manufacturingOrderId}
 * Endpoint: GET /{companyId}/manufacturing-orders (returns array)
 */
export declare const ManufacturingOrderGET: z.ZodObject<{
    manufacturingOrderId: z.ZodString;
    manufacturingOrderNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["Open", "InProgress", "Completed", "open", "inProgress", "completed"]>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    isPrioritized: z.ZodOptional<z.ZodBoolean>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    completedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    primaryFinishedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    primaryFinishedProduct: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
    }, {
        productId?: string;
        name?: string;
    }>>>;
    locationId: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currencyId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        isoCode: z.ZodOptional<z.ZodString>;
        symbol: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    }, {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    }>>>;
    extraCosts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    pickRemarks: z.ZodOptional<z.ZodString>;
    putAwayRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<any, "many">>;
    pickLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            productId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId?: string;
            name?: string;
        }, {
            productId?: string;
            name?: string;
        }>>>;
        description: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            standardQuantity: z.ZodOptional<z.ZodString>;
            uomQuantity: z.ZodOptional<z.ZodString>;
            uom: z.ZodOptional<z.ZodString>;
            serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }>>;
        locationId: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            locationId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locationId?: string;
            name?: string;
        }, {
            locationId?: string;
            name?: string;
        }>>>;
        sublocation: z.ZodOptional<z.ZodString>;
        pickDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }>, "many">>;
    putLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPutLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            productId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId?: string;
            name?: string;
        }, {
            productId?: string;
            name?: string;
        }>>>;
        description: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            standardQuantity: z.ZodOptional<z.ZodString>;
            uomQuantity: z.ZodOptional<z.ZodString>;
            uom: z.ZodOptional<z.ZodString>;
            serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }>>;
        locationId: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            locationId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locationId?: string;
            name?: string;
        }, {
            locationId?: string;
            name?: string;
        }>>>;
        sublocation: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }>, "many">>;
    pickMatchings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickMatchingId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        manufacturingOrderLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
        matchedQuantity: z.ZodOptional<z.ZodString>;
        serial: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodNumber>;
        lastModifiedById: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }, {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }>, "many">>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        attachmentId: z.ZodOptional<z.ZodString>;
        fileName: z.ZodOptional<z.ZodString>;
        fileSize: z.ZodOptional<z.ZodNumber>;
        attachmentUrl: z.ZodOptional<z.ZodString>;
        lastModDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        lastModifiedById: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }, {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    lastModifiedBy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    splitPartNumber: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    version: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
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
    currencyId?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: any[];
    isPrioritized?: boolean;
    pickRemarks?: string;
    pickLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    version?: number;
    manufacturingOrderNumber?: string;
    completedDate?: string;
    primaryFinishedProductId?: string;
    primaryFinishedProduct?: {
        productId?: string;
        name?: string;
    };
    extraCosts?: string;
    putAwayRemarks?: string;
    putLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }[];
    splitPartNumber?: number;
}, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
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
    currencyId?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: any[];
    isPrioritized?: boolean;
    pickRemarks?: string;
    pickLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    version?: number;
    manufacturingOrderNumber?: string;
    completedDate?: string;
    primaryFinishedProductId?: string;
    primaryFinishedProduct?: {
        productId?: string;
        name?: string;
    };
    extraCosts?: string;
    putAwayRemarks?: string;
    putLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }[];
    splitPartNumber?: number;
}>;
/**
 * ManufacturingOrder list response - array wrapper
 */
export declare const ManufacturingOrderListGET: z.ZodArray<z.ZodObject<{
    manufacturingOrderId: z.ZodString;
    manufacturingOrderNumber: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["Open", "InProgress", "Completed", "open", "inProgress", "completed"]>>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    isPrioritized: z.ZodOptional<z.ZodBoolean>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    completedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    primaryFinishedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    primaryFinishedProduct: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        productId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        name?: string;
    }, {
        productId?: string;
        name?: string;
    }>>>;
    locationId: z.ZodOptional<z.ZodString>;
    location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currencyId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        isoCode: z.ZodOptional<z.ZodString>;
        symbol: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    }, {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    }>>>;
    extraCosts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    pickRemarks: z.ZodOptional<z.ZodString>;
    putAwayRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<any, "many">>;
    pickLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            productId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId?: string;
            name?: string;
        }, {
            productId?: string;
            name?: string;
        }>>>;
        description: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            standardQuantity: z.ZodOptional<z.ZodString>;
            uomQuantity: z.ZodOptional<z.ZodString>;
            uom: z.ZodOptional<z.ZodString>;
            serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }>>;
        locationId: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            locationId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locationId?: string;
            name?: string;
        }, {
            locationId?: string;
            name?: string;
        }>>>;
        sublocation: z.ZodOptional<z.ZodString>;
        pickDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }>, "many">>;
    putLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPutLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        product: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            productId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            productId?: string;
            name?: string;
        }, {
            productId?: string;
            name?: string;
        }>>>;
        description: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            standardQuantity: z.ZodOptional<z.ZodString>;
            uomQuantity: z.ZodOptional<z.ZodString>;
            uom: z.ZodOptional<z.ZodString>;
            serialNumbers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }, {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        }>>;
        locationId: z.ZodOptional<z.ZodString>;
        location: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            locationId: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            locationId?: string;
            name?: string;
        }, {
            locationId?: string;
            name?: string;
        }>>>;
        sublocation: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }>, "many">>;
    pickMatchings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickMatchingId: z.ZodOptional<z.ZodString>;
        manufacturingOrderId: z.ZodOptional<z.ZodString>;
        manufacturingOrderLineId: z.ZodOptional<z.ZodString>;
        manufacturingOrderPickLineId: z.ZodOptional<z.ZodString>;
        matchedQuantity: z.ZodOptional<z.ZodString>;
        serial: z.ZodOptional<z.ZodString>;
        version: z.ZodOptional<z.ZodNumber>;
        lastModifiedById: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }, {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }>, "many">>;
    attachments: z.ZodOptional<z.ZodArray<z.ZodObject<{
        attachmentId: z.ZodOptional<z.ZodString>;
        fileName: z.ZodOptional<z.ZodString>;
        fileSize: z.ZodOptional<z.ZodNumber>;
        attachmentUrl: z.ZodOptional<z.ZodString>;
        lastModDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        lastModifiedById: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }, {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    lastModifiedBy: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    splitPartNumber: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    version: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
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
    currencyId?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: any[];
    isPrioritized?: boolean;
    pickRemarks?: string;
    pickLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    version?: number;
    manufacturingOrderNumber?: string;
    completedDate?: string;
    primaryFinishedProductId?: string;
    primaryFinishedProduct?: {
        productId?: string;
        name?: string;
    };
    extraCosts?: string;
    putAwayRemarks?: string;
    putLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }[];
    splitPartNumber?: number;
}, {
    status?: "Open" | "open" | "InProgress" | "Completed" | "inProgress" | "completed";
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
    currencyId?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    lines?: any[];
    isPrioritized?: boolean;
    pickRemarks?: string;
    pickLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        pickDate?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    version?: number;
    manufacturingOrderNumber?: string;
    completedDate?: string;
    primaryFinishedProductId?: string;
    primaryFinishedProduct?: {
        productId?: string;
        name?: string;
    };
    extraCosts?: string;
    putAwayRemarks?: string;
    putLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        location?: {
            locationId?: string;
            name?: string;
        };
        product?: {
            productId?: string;
            name?: string;
        };
        manufacturingOrderId?: string;
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        lastModifiedById?: string;
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
        version?: number;
    }[];
    splitPartNumber?: number;
}>, "many">;
/**
 * Available includes for ?include= query parameter
 */
export declare const ManufacturingOrderIncludes: {
    primaryFinishedProduct: {
        description: string;
        adds: string[];
        nested: any[];
    };
    lines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    pickLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    putLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    pickMatchings: {
        description: string;
        adds: string[];
        nested: any[];
    };
    attachments: {
        description: string;
        adds: string[];
        nested: string[];
    };
    location: {
        description: string;
        adds: string[];
        nested: any[];
    };
    currency: {
        description: string;
        adds: string[];
        nested: any[];
    };
    assignedToTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    customFields: {
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
 * Available filters for ?filter[x]= query parameter
 */
export declare const ManufacturingOrderFilters: {
    manufacturingOrderNumber: {
        type: string;
        description: string;
    };
    status: {
        type: string;
        description: string;
    };
    isPrioritized: {
        type: string;
        description: string;
    };
    orderDate: {
        type: string;
        description: string;
        example: string;
    };
    dueDate: {
        type: string;
        description: string;
        example: string;
    };
    locationId: {
        type: string;
        description: string;
    };
    assignedTo: {
        type: string;
        description: string;
    };
    isActive: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map