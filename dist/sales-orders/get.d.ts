import { z } from 'zod';
/**
 * Sales order inventory status
 */
export declare const SOInventoryStatus: z.ZodEnum<["Unconfirmed", "Quote", "Unfulfilled", "Started", "Fulfilled", "unconfirmed", "quote", "unfulfilled", "started", "fulfilled"]>;
/**
 * Sales order payment status
 */
export declare const SOPaymentStatus: z.ZodEnum<["Unconfirmed", "Quote", "Uninvoiced", "Invoiced", "Partial", "Paid", "Owing", "unconfirmed", "quote", "uninvoiced", "invoiced", "partial", "paid", "owing"]>;
/**
 * EasyPost shipment status
 */
export declare const EasyPostShipmentStatus: z.ZodEnum<["Manual", "Open", "Purchased", "manual", "open", "purchased"]>;
/**
 * Attachment schema for sales orders
 */
export declare const SOAttachmentSchema: z.ZodObject<{
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
 * Sales order line - products ordered
 */
export declare const SalesOrderLineSchema: z.ZodObject<{
    salesOrderLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
    isDiscarded: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    unitPrice?: string;
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
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
    salesOrderLineId?: string;
    isDiscarded?: boolean;
}, {
    productId?: string;
    timestamp?: string;
    unitPrice?: string;
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
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
    salesOrderLineId?: string;
    isDiscarded?: boolean;
}>;
/**
 * Sales order pick line - products picked from warehouse
 */
export declare const SalesOrderPickLineSchema: z.ZodObject<{
    salesOrderPickLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
    salesOrderPickLineId?: string;
    pickDate?: string;
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
    salesOrderPickLineId?: string;
    pickDate?: string;
}>;
/**
 * Sales order pack line - products packed into containers
 */
export declare const SalesOrderPackLineSchema: z.ZodObject<{
    salesOrderPackLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
    containerNumber: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    salesOrderPackLineId?: string;
    containerNumber?: string;
}, {
    productId?: string;
    timestamp?: string;
    quantity?: {
        standardQuantity?: string;
        uomQuantity?: string;
        uom?: string;
        serialNumbers?: string[];
    };
    description?: string;
    salesOrderPackLineId?: string;
    containerNumber?: string;
}>;
/**
 * Sales order ship line - shipments
 */
export declare const SalesOrderShipLineSchema: z.ZodObject<{
    salesOrderShipLineId: z.ZodOptional<z.ZodString>;
    carrier: z.ZodOptional<z.ZodString>;
    trackingNumber: z.ZodOptional<z.ZodString>;
    shippedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    containers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    easyPostShipmentId: z.ZodOptional<z.ZodString>;
    easyPostShipmentStatus: z.ZodOptional<z.ZodEnum<["Manual", "Open", "Purchased", "manual", "open", "purchased"]>>;
    easyPostConfirmationEmailAddress: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    carrier?: string;
    salesOrderShipLineId?: string;
    trackingNumber?: string;
    shippedDate?: string;
    containers?: string[];
    easyPostShipmentId?: string;
    easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
    easyPostConfirmationEmailAddress?: string;
}, {
    timestamp?: string;
    carrier?: string;
    salesOrderShipLineId?: string;
    trackingNumber?: string;
    shippedDate?: string;
    containers?: string[];
    easyPostShipmentId?: string;
    easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
    easyPostConfirmationEmailAddress?: string;
}>;
/**
 * Sales order restock line - returned products restocked
 */
export declare const SalesOrderRestockLineSchema: z.ZodObject<{
    salesOrderRestockLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
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
    restockDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
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
    salesOrderRestockLineId?: string;
    restockDate?: string;
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
    salesOrderRestockLineId?: string;
    restockDate?: string;
}>;
/**
 * Sales order payment line - payment history (read-only)
 */
export declare const SalesOrderPaymentLineSchema: z.ZodObject<{
    salesOrderPaymentHistoryLineId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodString>;
    datePaid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    paymentMethod: z.ZodOptional<z.ZodString>;
    paymentType: z.ZodOptional<z.ZodEnum<["Payment", "BatchPayment", "ApplyCredit", "ConvertToCredit", "Refund", "InFlowPay", "payment", "batchPayment", "applyCredit", "convertToCredit", "refund", "inFlowPay"]>>;
    referenceNumber: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    lineNum: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    lineNum?: number;
    remarks?: string;
    amount?: string;
    datePaid?: string;
    paymentMethod?: string;
    paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
    referenceNumber?: string;
    salesOrderPaymentHistoryLineId?: string;
}, {
    timestamp?: string;
    lineNum?: number;
    remarks?: string;
    amount?: string;
    datePaid?: string;
    paymentMethod?: string;
    paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
    referenceNumber?: string;
    salesOrderPaymentHistoryLineId?: string;
}>;
/**
 * Cost of goods sold - read-only
 */
export declare const SalesOrderCostOfGoodsSoldSchema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    salesOrderCostOfGoodsSoldId: z.ZodOptional<z.ZodString>;
    salesOrderId: z.ZodOptional<z.ZodString>;
    costOfGoodsSold: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    salesOrderCostOfGoodsSoldId?: string;
    salesOrderId?: string;
    costOfGoodsSold?: string;
}, {
    salesOrderCostOfGoodsSoldId?: string;
    salesOrderId?: string;
    costOfGoodsSold?: string;
}>>>;
/**
 * SalesOrder GET response schema
 * Endpoint: GET /{companyId}/sales-orders/{salesOrderId}
 * Endpoint: GET /{companyId}/sales-orders (returns array)
 */
export declare const SalesOrderGET: z.ZodObject<{
    salesOrderId: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    poNumber: z.ZodOptional<z.ZodString>;
    externalId: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    customer: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        customerId?: string;
    }, {
        name?: string;
        customerId?: string;
    }>>>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    requestedShipDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    invoicedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    inventoryStatus: z.ZodOptional<z.ZodEnum<["Unconfirmed", "Quote", "Unfulfilled", "Started", "Fulfilled", "unconfirmed", "quote", "unfulfilled", "started", "fulfilled"]>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<["Unconfirmed", "Quote", "Uninvoiced", "Invoiced", "Partial", "Paid", "Owing", "unconfirmed", "quote", "uninvoiced", "invoiced", "partial", "paid", "owing"]>>;
    isQuote: z.ZodOptional<z.ZodBoolean>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isCompleted: z.ZodOptional<z.ZodBoolean>;
    isInvoiced: z.ZodOptional<z.ZodBoolean>;
    isPrioritized: z.ZodOptional<z.ZodBoolean>;
    needsConfirmation: z.ZodOptional<z.ZodBoolean>;
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
    sameBillingAndShipping: z.ZodOptional<z.ZodBoolean>;
    billingAddress: z.ZodOptional<z.ZodObject<{
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
    shippingAddress: z.ZodOptional<z.ZodObject<{
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
    showShipping: z.ZodOptional<z.ZodBoolean>;
    shipToCompanyName: z.ZodOptional<z.ZodString>;
    pricingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pricingScheme: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        pricingSchemeId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        pricingSchemeId?: string;
        name?: string;
    }, {
        pricingSchemeId?: string;
        name?: string;
    }>>>;
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
    calculateTax2OnTax1: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    tax1Name: z.ZodOptional<z.ZodString>;
    tax1Rate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tax1OnShipping: z.ZodOptional<z.ZodBoolean>;
    tax2Name: z.ZodOptional<z.ZodString>;
    tax2Rate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tax2OnShipping: z.ZodOptional<z.ZodBoolean>;
    subTotal: z.ZodOptional<z.ZodString>;
    orderFreight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nonCustomerCost: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isPercent: z.ZodOptional<z.ZodBoolean>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string;
        isPercent?: boolean;
    }, {
        value?: string;
        isPercent?: boolean;
    }>>>;
    returnFee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    returnFreight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tax1: z.ZodOptional<z.ZodString>;
    tax2: z.ZodOptional<z.ZodString>;
    total: z.ZodOptional<z.ZodString>;
    amountPaid: z.ZodOptional<z.ZodString>;
    balance: z.ZodOptional<z.ZodString>;
    costOfGoodsSold: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        salesOrderCostOfGoodsSoldId: z.ZodOptional<z.ZodString>;
        salesOrderId: z.ZodOptional<z.ZodString>;
        costOfGoodsSold: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        salesOrderCostOfGoodsSoldId?: string;
        salesOrderId?: string;
        costOfGoodsSold?: string;
    }, {
        salesOrderCostOfGoodsSoldId?: string;
        salesOrderId?: string;
        costOfGoodsSold?: string;
    }>>>;
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
    confirmerTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    confirmerTeamMember: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    salesRep: z.ZodOptional<z.ZodString>;
    salesRepTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salesRepTeamMember: z.ZodOptional<z.ZodNullable<z.ZodObject<{
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
    pickRemarks: z.ZodOptional<z.ZodString>;
    packRemarks: z.ZodOptional<z.ZodString>;
    shipRemarks: z.ZodOptional<z.ZodString>;
    returnRemarks: z.ZodOptional<z.ZodString>;
    restockRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        isDiscarded: z.ZodOptional<z.ZodBoolean>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
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
        subTotal?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }, {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
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
        subTotal?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }>, "many">>;
    pickLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderPickLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        salesOrderPickLineId?: string;
        pickDate?: string;
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
        salesOrderPickLineId?: string;
        pickDate?: string;
    }>, "many">>;
    packLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderPackLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        containerNumber: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        salesOrderPackLineId?: string;
        containerNumber?: string;
    }, {
        productId?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        salesOrderPackLineId?: string;
        containerNumber?: string;
    }>, "many">>;
    shipLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderShipLineId: z.ZodOptional<z.ZodString>;
        carrier: z.ZodOptional<z.ZodString>;
        trackingNumber: z.ZodOptional<z.ZodString>;
        shippedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
        containers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        easyPostShipmentId: z.ZodOptional<z.ZodString>;
        easyPostShipmentStatus: z.ZodOptional<z.ZodEnum<["Manual", "Open", "Purchased", "manual", "open", "purchased"]>>;
        easyPostConfirmationEmailAddress: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
        easyPostShipmentId?: string;
        easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
        easyPostConfirmationEmailAddress?: string;
    }, {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
        easyPostShipmentId?: string;
        easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
        easyPostConfirmationEmailAddress?: string;
    }>, "many">>;
    restockLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderRestockLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
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
        restockDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
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
        salesOrderRestockLineId?: string;
        restockDate?: string;
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
        salesOrderRestockLineId?: string;
        restockDate?: string;
    }>, "many">>;
    paymentLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderPaymentHistoryLineId: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodString>;
        datePaid: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
        paymentMethod: z.ZodOptional<z.ZodString>;
        paymentType: z.ZodOptional<z.ZodEnum<["Payment", "BatchPayment", "ApplyCredit", "ConvertToCredit", "Refund", "InFlowPay", "payment", "batchPayment", "applyCredit", "convertToCredit", "refund", "inFlowPay"]>>;
        referenceNumber: z.ZodOptional<z.ZodString>;
        remarks: z.ZodOptional<z.ZodString>;
        lineNum: z.ZodOptional<z.ZodNumber>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        lineNum?: number;
        remarks?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
        salesOrderPaymentHistoryLineId?: string;
    }, {
        timestamp?: string;
        lineNum?: number;
        remarks?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
        salesOrderPaymentHistoryLineId?: string;
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
    pricingSchemeId?: string;
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
    pricingScheme?: {
        pricingSchemeId?: string;
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
    customerId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    orderNumber?: string;
    orderDate?: string;
    dueDate?: string;
    inventoryStatus?: "Quote" | "Unfulfilled" | "Started" | "Fulfilled" | "quote" | "unfulfilled" | "started" | "fulfilled" | "Unconfirmed" | "unconfirmed";
    paymentStatus?: "Quote" | "quote" | "Partial" | "Paid" | "Owing" | "partial" | "paid" | "owing" | "Unconfirmed" | "unconfirmed" | "Uninvoiced" | "Invoiced" | "uninvoiced" | "invoiced";
    isQuote?: boolean;
    isCancelled?: boolean;
    isCompleted?: boolean;
    showShipping?: boolean;
    shipToCompanyName?: string;
    exchangeRate?: string;
    exchangeRateAutoPulled?: string;
    isTaxInclusive?: boolean;
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    returnFee?: string;
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
    orderRemarks?: string;
    returnRemarks?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
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
        subTotal?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }[];
    paymentLines?: {
        timestamp?: string;
        lineNum?: number;
        remarks?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
        salesOrderPaymentHistoryLineId?: string;
    }[];
    salesOrderId?: string;
    costOfGoodsSold?: {
        salesOrderCostOfGoodsSoldId?: string;
        salesOrderId?: string;
        costOfGoodsSold?: string;
    };
    poNumber?: string;
    externalId?: string;
    source?: string;
    customer?: {
        name?: string;
        customerId?: string;
    };
    requestedShipDate?: string;
    invoicedDate?: string;
    isInvoiced?: boolean;
    isPrioritized?: boolean;
    needsConfirmation?: boolean;
    sameBillingAndShipping?: boolean;
    billingAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    shippingAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    orderFreight?: string;
    nonCustomerCost?: {
        value?: string;
        isPercent?: boolean;
    };
    returnFreight?: string;
    confirmerTeamMemberId?: string;
    confirmerTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    salesRep?: string;
    salesRepTeamMemberId?: string;
    salesRepTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    pickRemarks?: string;
    packRemarks?: string;
    shipRemarks?: string;
    restockRemarks?: string;
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
        salesOrderPickLineId?: string;
        pickDate?: string;
    }[];
    packLines?: {
        productId?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        salesOrderPackLineId?: string;
        containerNumber?: string;
    }[];
    shipLines?: {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
        easyPostShipmentId?: string;
        easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
        easyPostConfirmationEmailAddress?: string;
    }[];
    restockLines?: {
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
        salesOrderRestockLineId?: string;
        restockDate?: string;
    }[];
}, {
    lastModifiedById?: string;
    locationId?: string;
    timestamp?: string;
    pricingSchemeId?: string;
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
    pricingScheme?: {
        pricingSchemeId?: string;
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
    customerId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    orderNumber?: string;
    orderDate?: string;
    dueDate?: string;
    inventoryStatus?: "Quote" | "Unfulfilled" | "Started" | "Fulfilled" | "quote" | "unfulfilled" | "started" | "fulfilled" | "Unconfirmed" | "unconfirmed";
    paymentStatus?: "Quote" | "quote" | "Partial" | "Paid" | "Owing" | "partial" | "paid" | "owing" | "Unconfirmed" | "unconfirmed" | "Uninvoiced" | "Invoiced" | "uninvoiced" | "invoiced";
    isQuote?: boolean;
    isCancelled?: boolean;
    isCompleted?: boolean;
    showShipping?: boolean;
    shipToCompanyName?: string;
    exchangeRate?: string;
    exchangeRateAutoPulled?: string;
    isTaxInclusive?: boolean;
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    returnFee?: string;
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
    orderRemarks?: string;
    returnRemarks?: string;
    lines?: {
        productId?: string;
        timestamp?: string;
        unitPrice?: string;
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
        subTotal?: string;
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }[];
    paymentLines?: {
        timestamp?: string;
        lineNum?: number;
        remarks?: string;
        amount?: string;
        datePaid?: string;
        paymentMethod?: string;
        paymentType?: "Payment" | "BatchPayment" | "ApplyCredit" | "ConvertToCredit" | "Refund" | "InFlowPay" | "payment" | "batchPayment" | "applyCredit" | "convertToCredit" | "refund" | "inFlowPay";
        referenceNumber?: string;
        salesOrderPaymentHistoryLineId?: string;
    }[];
    salesOrderId?: string;
    costOfGoodsSold?: {
        salesOrderCostOfGoodsSoldId?: string;
        salesOrderId?: string;
        costOfGoodsSold?: string;
    };
    poNumber?: string;
    externalId?: string;
    source?: string;
    customer?: {
        name?: string;
        customerId?: string;
    };
    requestedShipDate?: string;
    invoicedDate?: string;
    isInvoiced?: boolean;
    isPrioritized?: boolean;
    needsConfirmation?: boolean;
    sameBillingAndShipping?: boolean;
    billingAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    shippingAddress?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    orderFreight?: string;
    nonCustomerCost?: {
        value?: string;
        isPercent?: boolean;
    };
    returnFreight?: string;
    confirmerTeamMemberId?: string;
    confirmerTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    salesRep?: string;
    salesRepTeamMemberId?: string;
    salesRepTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    pickRemarks?: string;
    packRemarks?: string;
    shipRemarks?: string;
    restockRemarks?: string;
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
        salesOrderPickLineId?: string;
        pickDate?: string;
    }[];
    packLines?: {
        productId?: string;
        timestamp?: string;
        quantity?: {
            standardQuantity?: string;
            uomQuantity?: string;
            uom?: string;
            serialNumbers?: string[];
        };
        description?: string;
        salesOrderPackLineId?: string;
        containerNumber?: string;
    }[];
    shipLines?: {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
        easyPostShipmentId?: string;
        easyPostShipmentStatus?: "Manual" | "Open" | "Purchased" | "manual" | "open" | "purchased";
        easyPostConfirmationEmailAddress?: string;
    }[];
    restockLines?: {
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
        salesOrderRestockLineId?: string;
        restockDate?: string;
    }[];
}>;
/**
 * Available includes for ?include= query parameter
 */
export declare const SalesOrderIncludes: {
    customer: {
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
    packLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    shipLines: {
        description: string;
        adds: string[];
        nested: any[];
    };
    restockLines: {
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
    pricingScheme: {
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
    confirmerTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    salesRepTeamMember: {
        description: string;
        adds: string[];
        nested: any[];
    };
    costOfGoodsSold: {
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
export declare const SalesOrderFilters: {
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
    customerId: {
        type: string;
        description: string;
    };
    orderDate: {
        type: string;
        description: string;
        example: string;
    };
    poNumber: {
        type: string;
        description: string;
    };
    locationId: {
        type: string;
        description: string;
    };
    requestedShipDate: {
        type: string;
        description: string;
        example: string;
    };
    invoicedDate: {
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