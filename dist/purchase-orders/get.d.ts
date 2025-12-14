import { z } from 'zod';
/**
 * Purchase order inventory status
 */
export declare const POInventoryStatus: z.ZodEnum<["Quote", "Unapproved", "Unfulfilled", "Started", "Fulfilled", "quote", "unapproved", "unfulfilled", "started", "fulfilled"]>;
/**
 * Purchase order payment status
 */
export declare const POPaymentStatus: z.ZodEnum<["Quote", "Unapproved", "Unpaid", "Partial", "Paid", "Owing", "quote", "unapproved", "unpaid", "partial", "paid", "owing"]>;
/**
 * Payment type enum for payment lines
 */
export declare const PaymentType: z.ZodEnum<["Payment", "BatchPayment", "ApplyCredit", "ConvertToCredit", "Refund", "InFlowPay", "payment", "batchPayment", "applyCredit", "convertToCredit", "refund", "inFlowPay"]>;
/**
 * Percent or fixed amount - used for discounts, non-vendor costs
 */
export declare const PercentOrFixedAmount: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    isPercent: z.ZodOptional<z.ZodBoolean>;
    value: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value?: string;
    isPercent?: boolean;
}, {
    value?: string;
    isPercent?: boolean;
}>>>;
/**
 * Quantity with unit of measure
 * Note: swagger.json documents 'quantity' and 'uomName' but API returns different fields
 */
export declare const QuantityWithUom: z.ZodOptional<z.ZodObject<{
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
/**
 * Attachment schema for purchase orders
 */
export declare const POAttachmentSchema: z.ZodObject<{
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
 * Purchase order line - products ordered
 */
export declare const PurchaseOrderLineSchema: z.ZodObject<{
    purchaseOrderLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
    subTotal: z.ZodOptional<z.ZodString>;
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
    subTotal?: string;
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
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
}>;
/**
 * Purchase order receive line - products received into warehouse
 */
export declare const PurchaseOrderReceiveLineSchema: z.ZodObject<{
    purchaseOrderReceiveLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
 * Purchase order unstock line - returned products unstocked
 */
export declare const PurchaseOrderUnstockLineSchema: z.ZodObject<{
    purchaseOrderUnstockLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
 * Purchase order payment line - payment history (read-only)
 */
export declare const PurchaseOrderPaymentLineSchema: z.ZodObject<{
    purchaseOrderPaymentHistoryLineId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodString>;
    datePaid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    paymentMethod: z.ZodOptional<z.ZodString>;
    paymentType: z.ZodOptional<z.ZodEnum<["Payment", "BatchPayment", "ApplyCredit", "ConvertToCredit", "Refund", "InFlowPay", "payment", "batchPayment", "applyCredit", "convertToCredit", "refund", "inFlowPay"]>>;
    referenceNumber: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    remarks?: string;
    purchaseOrderPaymentHistoryLineId?: string;
    amount?: string;
    datePaid?: string;
    paymentMethod?: string;
    paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
    referenceNumber?: string;
}, {
    timestamp?: string;
    remarks?: string;
    purchaseOrderPaymentHistoryLineId?: string;
    amount?: string;
    datePaid?: string;
    paymentMethod?: string;
    paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
    referenceNumber?: string;
}>;
/**
 * PurchaseOrder GET response schema
 * Endpoint: GET /{companyId}/purchase-orders/{purchaseOrderId}
 * Endpoint: GET /{companyId}/purchase-orders (returns array)
 */
export declare const PurchaseOrderGET: z.ZodObject<{
    purchaseOrderId: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    vendorOrderNumber: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    vendor: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        vendorId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        vendorId?: string;
        name?: string;
    }, {
        vendorId?: string;
        name?: string;
    }>>>;
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
    inventoryStatus: z.ZodOptional<z.ZodEnum<["Quote", "Unapproved", "Unfulfilled", "Started", "Fulfilled", "quote", "unapproved", "unfulfilled", "started", "fulfilled"]>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<["Quote", "Unapproved", "Unpaid", "Partial", "Paid", "Owing", "quote", "unapproved", "unpaid", "partial", "paid", "owing"]>>;
    isQuote: z.ZodOptional<z.ZodBoolean>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    exchangeRate: z.ZodOptional<z.ZodString>;
    exchangeRateAutoPulled: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    taxingSchemeId: z.ZodOptional<z.ZodString>;
    taxingScheme: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        taxingSchemeId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        taxingSchemeId?: string;
        name?: string;
    }, {
        taxingSchemeId?: string;
        name?: string;
    }>>>;
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
    amountPaid: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodString>;
    paymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    paymentTerms: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        paymentTermsId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        paymentTermsId?: string;
    }, {
        name?: string;
        paymentTermsId?: string;
    }>>>;
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
    approverTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    approverTeamMember: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    orderRemarks: z.ZodOptional<z.ZodString>;
    receiveRemarks: z.ZodOptional<z.ZodString>;
    returnRemarks: z.ZodOptional<z.ZodString>;
    unstockRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        subTotal: z.ZodOptional<z.ZodString>;
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
        subTotal?: string;
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
        subTotal?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
    }>, "many">>;
    receiveLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderReceiveLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        purchaseOrderUnstockLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
    paymentLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        purchaseOrderPaymentHistoryLineId: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodString>;
        datePaid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        paymentMethod: z.ZodOptional<z.ZodString>;
        paymentType: z.ZodOptional<z.ZodEnum<["Payment", "BatchPayment", "ApplyCredit", "ConvertToCredit", "Refund", "InFlowPay", "payment", "batchPayment", "applyCredit", "convertToCredit", "refund", "inFlowPay"]>>;
        referenceNumber: z.ZodOptional<z.ZodString>;
        remarks: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        remarks?: string;
        purchaseOrderPaymentHistoryLineId?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
    }, {
        timestamp?: string;
        remarks?: string;
        purchaseOrderPaymentHistoryLineId?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
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
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedById?: string;
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    taxingSchemeId?: string;
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
    vendor?: {
        vendorId?: string;
        name?: string;
    };
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    currencyId?: string;
    balance?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
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
    inventoryStatus?: "Quote" | "Unapproved" | "Unfulfilled" | "Started" | "Fulfilled" | "quote" | "unapproved" | "unfulfilled" | "started" | "fulfilled";
    paymentStatus?: "Quote" | "Unapproved" | "quote" | "unapproved" | "Unpaid" | "Partial" | "Paid" | "Owing" | "unpaid" | "partial" | "paid" | "owing";
    isQuote?: boolean;
    isCancelled?: boolean;
    isCompleted?: boolean;
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
    exchangeRateAutoPulled?: string;
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
    amountPaid?: string;
    paymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    approverTeamMemberId?: string;
    approverTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
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
        subTotal?: string;
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
    paymentLines?: {
        timestamp?: string;
        remarks?: string;
        purchaseOrderPaymentHistoryLineId?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
    }[];
}, {
    lastModifiedById?: string;
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    taxingSchemeId?: string;
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
    vendor?: {
        vendorId?: string;
        name?: string;
    };
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    currencyId?: string;
    balance?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    currency?: {
        symbol?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
    };
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
    inventoryStatus?: "Quote" | "Unapproved" | "Unfulfilled" | "Started" | "Fulfilled" | "quote" | "unapproved" | "unfulfilled" | "started" | "fulfilled";
    paymentStatus?: "Quote" | "Unapproved" | "quote" | "unapproved" | "Unpaid" | "Partial" | "Paid" | "Owing" | "unpaid" | "partial" | "paid" | "owing";
    isQuote?: boolean;
    isCancelled?: boolean;
    isCompleted?: boolean;
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
    exchangeRateAutoPulled?: string;
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
    amountPaid?: string;
    paymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    assignedToTeamMemberId?: string;
    assignedToTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    approverTeamMemberId?: string;
    approverTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
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
        subTotal?: string;
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
    paymentLines?: {
        timestamp?: string;
        remarks?: string;
        purchaseOrderPaymentHistoryLineId?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
    }[];
}>;
/**
 * Available includes for ?include= query parameter
 */
export declare const PurchaseOrderIncludes: {
    vendor: {
        description: string;
        adds: string[];
        nested: any[];
    };
    lines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    receiveLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    unstockLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    paymentLines: {
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
    paymentTerms: {
        description: string;
        adds: string[];
        nested: any[];
    };
    taxingScheme: {
        description: string;
        adds: string[];
        nested: any[];
    };
    assignedToTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    approverTeamMember: {
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
export declare const PurchaseOrderFilters: {
    orderNumber: {
        type: string;
        description: string;
    };
    inventoryStatus: {
        type: string;
        description: string;
    };
    paymentStatus: {
        type: string;
        description: string;
    };
    vendorId: {
        type: string;
        description: string;
    };
    orderDate: {
        type: string;
        description: string;
        example: string;
    };
    vendorOrderNumber: {
        type: string;
        description: string;
    };
    locationId: {
        type: string;
        description: string;
    };
    requestShipDate: {
        type: string;
        description: string;
        example: string;
    };
    total: {
        type: string;
        description: string;
        example: string;
    };
    balance: {
        type: string;
        description: string;
        example: string;
    };
    isActive: {
        type: string;
        description: string;
    };
    smart: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map