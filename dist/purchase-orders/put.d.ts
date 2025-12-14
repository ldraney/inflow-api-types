import { z } from 'zod';
/**
 * Purchase order line for PUT - requires purchaseOrderLineId for updates
 */
export declare const PurchaseOrderLinePUT: z.ZodObject<{
    purchaseOrderLineId: z.ZodString;
    productId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    vendorItemCode: z.ZodOptional<z.ZodString>;
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
    unitPrice: z.ZodOptional<z.ZodString>;
    discount: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isPercent: z.ZodOptional<z.ZodBoolean>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        isPercent?: boolean;
    }, {
        value?: string;
        isPercent?: boolean;
    }>>>;
    tax1Rate: z.ZodOptional<z.ZodString>;
    tax2Rate: z.ZodOptional<z.ZodString>;
    taxCodeId: z.ZodOptional<z.ZodString>;
    returnDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    serviceCompleted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    unitPrice?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    taxCodeId?: string;
    description?: string;
    discount?: {
        value?: string;
        isPercent?: boolean;
    };
    purchaseOrderLineId?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
}, {
    productId?: string;
    timestamp?: string;
    unitPrice?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    taxCodeId?: string;
    description?: string;
    discount?: {
        value?: string;
        isPercent?: boolean;
    };
    purchaseOrderLineId?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
}>;
/**
 * Purchase order receive line for PUT - requires purchaseOrderReceiveLineId for updates
 */
export declare const PurchaseOrderReceiveLinePUT: z.ZodObject<{
    purchaseOrderReceiveLineId: z.ZodString;
    productId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    vendorItemCode: z.ZodOptional<z.ZodString>;
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
    receiveDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    purchaseOrderReceiveLineId?: string;
    receiveDate?: string;
}, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    purchaseOrderReceiveLineId?: string;
    receiveDate?: string;
}>;
/**
 * Purchase order unstock line for PUT - requires purchaseOrderUnstockLineId for updates
 */
export declare const PurchaseOrderUnstockLinePUT: z.ZodObject<{
    purchaseOrderUnstockLineId: z.ZodString;
    productId: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    vendorItemCode: z.ZodOptional<z.ZodString>;
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
    unstockDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    purchaseOrderUnstockLineId?: string;
    unstockDate?: string;
}, {
    productId?: string;
    locationId?: string;
    sublocation?: string;
    timestamp?: string;
    vendorItemCode?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    purchaseOrderUnstockLineId?: string;
    unstockDate?: string;
}>;
/**
 * PurchaseOrder PUT request schema
 * Endpoint: PUT /{companyId}/purchase-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for purchaseOrderId when inserting
 * - Use an existing purchaseOrderId when updating
 * - vendorId is required
 */
export declare const PurchaseOrderPUT: z.ZodObject<{
    purchaseOrderId: z.ZodString;
    vendorId: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    vendorOrderNumber: z.ZodOptional<z.ZodString>;
    vendorAddress: z.ZodOptional<z.ZodObject<{
        address1: z.ZodOptional<z.ZodString>;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        remarks: z.ZodOptional<z.ZodString>;
        addressType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Commercial", "Residential", "commercial", "residential"]>>>;
    }, "strip", z.ZodTypeAny, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }>>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    requestShipDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    isQuote: z.ZodOptional<z.ZodBoolean>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    carrier: z.ZodOptional<z.ZodString>;
    showShipping: z.ZodOptional<z.ZodBoolean>;
    shipToCompanyName: z.ZodOptional<z.ZodString>;
    shipToAddress: z.ZodOptional<z.ZodObject<{
        address1: z.ZodOptional<z.ZodString>;
        address2: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        remarks: z.ZodOptional<z.ZodString>;
        addressType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Commercial", "Residential", "commercial", "residential"]>>>;
    }, "strip", z.ZodTypeAny, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }, {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    }>>;
    currencyId: z.ZodOptional<z.ZodString>;
    exchangeRate: z.ZodOptional<z.ZodString>;
    taxingSchemeId: z.ZodOptional<z.ZodString>;
    isTaxInclusive: z.ZodOptional<z.ZodBoolean>;
    calculateTax2OnTax1: z.ZodOptional<z.ZodBoolean>;
    tax1Name: z.ZodOptional<z.ZodString>;
    tax1Rate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tax1OnShipping: z.ZodOptional<z.ZodBoolean>;
    tax2Name: z.ZodOptional<z.ZodString>;
    tax2Rate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tax2OnShipping: z.ZodOptional<z.ZodBoolean>;
    subTotal: z.ZodOptional<z.ZodString>;
    freight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nonVendorCosts: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isPercent: z.ZodOptional<z.ZodBoolean>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        isPercent?: boolean;
    }, {
        value?: string;
        isPercent?: boolean;
    }>>>;
    returnFee: z.ZodOptional<z.ZodString>;
    returnExtra: z.ZodOptional<z.ZodString>;
    tax1: z.ZodOptional<z.ZodString>;
    tax2: z.ZodOptional<z.ZodString>;
    total: z.ZodOptional<z.ZodString>;
    paymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    approverTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    orderRemarks: z.ZodOptional<z.ZodString>;
    receiveRemarks: z.ZodOptional<z.ZodString>;
    returnRemarks: z.ZodOptional<z.ZodString>;
    unstockRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderLineId: z.ZodString;
        productId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        vendorItemCode: z.ZodOptional<z.ZodString>;
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
        unitPrice: z.ZodOptional<z.ZodString>;
        discount: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            isPercent: z.ZodOptional<z.ZodBoolean>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: string;
            isPercent?: boolean;
        }, {
            value?: string;
            isPercent?: boolean;
        }>>>;
        tax1Rate: z.ZodOptional<z.ZodString>;
        tax2Rate: z.ZodOptional<z.ZodString>;
        taxCodeId: z.ZodOptional<z.ZodString>;
        returnDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
        serviceCompleted: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        taxCodeId?: string;
        description?: string;
        discount?: {
            value?: string;
            isPercent?: boolean;
        };
        purchaseOrderLineId?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
    }, {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        taxCodeId?: string;
        description?: string;
        discount?: {
            value?: string;
            isPercent?: boolean;
        };
        purchaseOrderLineId?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
    }>, "many">>;
    receiveLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderReceiveLineId: z.ZodString;
        productId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        vendorItemCode: z.ZodOptional<z.ZodString>;
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
        receiveDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderReceiveLineId?: string;
        receiveDate?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderReceiveLineId?: string;
        receiveDate?: string;
    }>, "many">>;
    unstockLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderUnstockLineId: z.ZodString;
        productId: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        vendorItemCode: z.ZodOptional<z.ZodString>;
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
        unstockDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderUnstockLineId?: string;
        unstockDate?: string;
    }, {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderUnstockLineId?: string;
        unstockDate?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    taxingSchemeId?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    paymentTermsId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    purchaseOrderId?: string;
    orderNumber?: string;
    vendorOrderNumber?: string;
    vendorAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    orderDate?: string;
    requestShipDate?: string;
    dueDate?: string;
    isQuote?: boolean;
    isCancelled?: boolean;
    carrier?: string;
    showShipping?: boolean;
    shipToCompanyName?: string;
    shipToAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    exchangeRate?: string;
    isTaxInclusive?: boolean;
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    freight?: string;
    nonVendorCosts?: {
        value?: string;
        isPercent?: boolean;
    };
    returnFee?: string;
    returnExtra?: string;
    tax1?: string;
    tax2?: string;
    total?: string;
    assignedToTeamMemberId?: string;
    approverTeamMemberId?: string;
    orderRemarks?: string;
    receiveRemarks?: string;
    returnRemarks?: string;
    unstockRemarks?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        taxCodeId?: string;
        description?: string;
        discount?: {
            value?: string;
            isPercent?: boolean;
        };
        purchaseOrderLineId?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
    }[];
    receiveLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderReceiveLineId?: string;
        receiveDate?: string;
    }[];
    unstockLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderUnstockLineId?: string;
        unstockDate?: string;
    }[];
}, {
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    taxingSchemeId?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    paymentTermsId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    purchaseOrderId?: string;
    orderNumber?: string;
    vendorOrderNumber?: string;
    vendorAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    orderDate?: string;
    requestShipDate?: string;
    dueDate?: string;
    isQuote?: boolean;
    isCancelled?: boolean;
    carrier?: string;
    showShipping?: boolean;
    shipToCompanyName?: string;
    shipToAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    exchangeRate?: string;
    isTaxInclusive?: boolean;
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    freight?: string;
    nonVendorCosts?: {
        value?: string;
        isPercent?: boolean;
    };
    returnFee?: string;
    returnExtra?: string;
    tax1?: string;
    tax2?: string;
    total?: string;
    assignedToTeamMemberId?: string;
    approverTeamMemberId?: string;
    orderRemarks?: string;
    receiveRemarks?: string;
    returnRemarks?: string;
    unstockRemarks?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        taxCodeId?: string;
        description?: string;
        discount?: {
            value?: string;
            isPercent?: boolean;
        };
        purchaseOrderLineId?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
    }[];
    receiveLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderReceiveLineId?: string;
        receiveDate?: string;
    }[];
    unstockLines?: {
        productId?: string;
        locationId?: string;
        sublocation?: string;
        timestamp?: string;
        vendorItemCode?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        purchaseOrderUnstockLineId?: string;
        unstockDate?: string;
    }[];
}>;
/**
 * Field constraints for PurchaseOrder
 */
export declare const PurchaseOrderConstraints: {
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
        isQuote: boolean;
        isCancelled: boolean;
        showShipping: boolean;
        isTaxInclusive: boolean;
        calculateTax2OnTax1: boolean;
        tax1OnShipping: boolean;
        tax2OnShipping: boolean;
    };
};
/**
 * Helper to create a new purchase order payload
 */
export declare function createPurchaseOrderPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare order lines with generated IDs
 */
export declare function createOrderLines(lines: any, generateUuid: any): any;
/**
 * Helper to prepare receive lines with generated IDs
 */
export declare function createReceiveLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map