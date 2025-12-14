import { z } from 'zod';
/**
 * Manufacturing order operation for PUT
 */
export declare const ManufacturingOrderOperationPUT: z.ZodObject<{
    manufacturingOrderOperationId: z.ZodString;
    operationTypeId: z.ZodString;
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
    manufacturingOrderOperationId?: string;
    seconds?: string;
    minutes?: string;
}>;
/**
 * Manufacturing order line for PUT - BOM definition
 */
export declare const ManufacturingOrderLinePUT: any;
/**
 * Manufacturing order pick line for PUT - raw materials picked
 */
export declare const ManufacturingOrderPickLinePUT: z.ZodObject<{
    manufacturingOrderPickLineId: z.ZodString;
    productId: z.ZodString;
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
    pickDate?: string;
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
    pickDate?: string;
    manufacturingOrderPickLineId?: string;
}>;
/**
 * Manufacturing order put-away line for PUT - finished products
 */
export declare const ManufacturingOrderPutLinePUT: z.ZodObject<{
    manufacturingOrderPutLineId: z.ZodString;
    productId: z.ZodString;
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
    manufacturingOrderPutLineId?: string;
}>;
/**
 * Manufacturing order pick matching for PUT
 */
export declare const ManufacturingOrderPickMatchingPUT: z.ZodObject<{
    manufacturingOrderPickMatchingId: z.ZodString;
    manufacturingOrderLineId: z.ZodString;
    manufacturingOrderPickLineId: z.ZodString;
    matchedQuantity: z.ZodString;
    serial: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    serial?: string;
    timestamp?: string;
    manufacturingOrderLineId?: string;
    manufacturingOrderPickLineId?: string;
    manufacturingOrderPickMatchingId?: string;
    matchedQuantity?: string;
}, {
    serial?: string;
    timestamp?: string;
    manufacturingOrderLineId?: string;
    manufacturingOrderPickLineId?: string;
    manufacturingOrderPickMatchingId?: string;
    matchedQuantity?: string;
}>;
/**
 * ManufacturingOrder PUT request schema
 * Endpoint: PUT /{companyId}/manufacturing-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for manufacturingOrderId when inserting
 * - Use an existing manufacturingOrderId when updating
 *
 * Query parameter: ?fillDefaultBom=true to auto-fill BOM from product definition
 */
export declare const ManufacturingOrderPUT: z.ZodObject<{
    manufacturingOrderId: z.ZodString;
    manufacturingOrderNumber: z.ZodOptional<z.ZodString>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    primaryFinishedProductId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    locationId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    extraCosts: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    remarks: z.ZodOptional<z.ZodString>;
    pickRemarks: z.ZodOptional<z.ZodString>;
    putAwayRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<any, "many">>;
    pickLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickLineId: z.ZodString;
        productId: z.ZodString;
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
        pickDate?: string;
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
        pickDate?: string;
        manufacturingOrderPickLineId?: string;
    }>, "many">>;
    putLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPutLineId: z.ZodString;
        productId: z.ZodString;
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
        manufacturingOrderPutLineId?: string;
    }>, "many">>;
    pickMatchings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        manufacturingOrderPickMatchingId: z.ZodString;
        manufacturingOrderLineId: z.ZodString;
        manufacturingOrderPickLineId: z.ZodString;
        matchedQuantity: z.ZodString;
        serial: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
    }, {
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    lines?: any[];
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
        pickDate?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    manufacturingOrderNumber?: string;
    primaryFinishedProductId?: string;
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
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
    }[];
}, {
    locationId?: string;
    timestamp?: string;
    remarks?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    orderDate?: string;
    dueDate?: string;
    isCancelled?: boolean;
    isCompleted?: boolean;
    assignedToTeamMemberId?: string;
    lines?: any[];
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
        pickDate?: string;
        manufacturingOrderPickLineId?: string;
    }[];
    manufacturingOrderId?: string;
    manufacturingOrderNumber?: string;
    primaryFinishedProductId?: string;
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
        manufacturingOrderPutLineId?: string;
    }[];
    pickMatchings?: {
        serial?: string;
        timestamp?: string;
        manufacturingOrderLineId?: string;
        manufacturingOrderPickLineId?: string;
        manufacturingOrderPickMatchingId?: string;
        matchedQuantity?: string;
    }[];
}>;
/**
 * Field constraints for ManufacturingOrder
 */
export declare const ManufacturingOrderConstraints: {
    /**
     * Read-only fields - calculated or system-managed
     */
    readOnly: string[];
    /**
     * Immutable fields - can only be set on creation
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
     */
    nestedWithIds: {
        field: string;
        idField: string;
    }[];
    /**
     * Auto-calculated fields if not provided
     */
    autoCalculated: string[];
    /**
     * Default values
     */
    defaults: {
        isCancelled: boolean;
        isCompleted: boolean;
    };
    /**
     * Query parameters for PUT endpoint
     */
    queryParams: {
        fillDefaultBom: {
            type: string;
            default: boolean;
            description: string;
        };
    };
};
/**
 * Helper to create a new manufacturing order payload
 */
export declare function createManufacturingOrderPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare BOM lines with generated IDs
 */
export declare function createOrderLines(lines: any, generateUuid: any): any;
/**
 * Helper to prepare pick lines with generated IDs
 */
export declare function createPickLines(lines: any, generateUuid: any): any;
/**
 * Helper to prepare put-away lines with generated IDs
 */
export declare function createPutLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map