import { z } from 'zod';
/**
 * Sales order line for PUT - requires salesOrderLineId for updates
 */
export declare const SalesOrderLinePUT: z.ZodObject<{
    salesOrderLineId: z.ZodString;
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
    tax1Rate?: string;
    tax2Rate?: string;
    returnDate?: string;
    serviceCompleted?: boolean;
    salesOrderLineId?: string;
    isDiscarded?: boolean;
}>;
/**
 * Sales order pick line for PUT - requires salesOrderPickLineId for updates
 */
export declare const SalesOrderPickLinePUT: z.ZodObject<{
    salesOrderPickLineId: z.ZodString;
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
 * Sales order pack line for PUT - requires salesOrderPackLineId for updates
 */
export declare const SalesOrderPackLinePUT: z.ZodObject<{
    salesOrderPackLineId: z.ZodString;
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
 * Sales order ship line for PUT - requires salesOrderShipLineId for updates
 */
export declare const SalesOrderShipLinePUT: z.ZodObject<{
    salesOrderShipLineId: z.ZodString;
    carrier: z.ZodOptional<z.ZodString>;
    trackingNumber: z.ZodOptional<z.ZodString>;
    shippedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    containers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    carrier?: string;
    salesOrderShipLineId?: string;
    trackingNumber?: string;
    shippedDate?: string;
    containers?: string[];
}, {
    timestamp?: string;
    carrier?: string;
    salesOrderShipLineId?: string;
    trackingNumber?: string;
    shippedDate?: string;
    containers?: string[];
}>;
/**
 * Sales order restock line for PUT - requires salesOrderRestockLineId for updates
 */
export declare const SalesOrderRestockLinePUT: z.ZodObject<{
    salesOrderRestockLineId: z.ZodString;
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
 * SalesOrder PUT request schema
 * Endpoint: PUT /{companyId}/sales-orders
 *
 * This is an upsert operation:
 * - Generate a new GUID for salesOrderId when inserting
 * - Use an existing salesOrderId when updating
 * - customerId is required
 */
export declare const SalesOrderPUT: z.ZodObject<{
    salesOrderId: z.ZodString;
    customerId: z.ZodString;
    orderNumber: z.ZodOptional<z.ZodString>;
    poNumber: z.ZodOptional<z.ZodString>;
    externalId: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    orderDate: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    requestedShipDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    dueDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    invoicedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    isQuote: z.ZodOptional<z.ZodBoolean>;
    isCancelled: z.ZodOptional<z.ZodBoolean>;
    isInvoiced: z.ZodOptional<z.ZodBoolean>;
    needsConfirmation: z.ZodOptional<z.ZodBoolean>;
    locationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    currencyId: z.ZodOptional<z.ZodString>;
    exchangeRate: z.ZodOptional<z.ZodString>;
    taxingSchemeId: z.ZodOptional<z.ZodString>;
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
    paymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    assignedToTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    confirmerTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    salesRep: z.ZodOptional<z.ZodString>;
    salesRepTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    orderRemarks: z.ZodOptional<z.ZodString>;
    pickRemarks: z.ZodOptional<z.ZodString>;
    packRemarks: z.ZodOptional<z.ZodString>;
    shipRemarks: z.ZodOptional<z.ZodString>;
    returnRemarks: z.ZodOptional<z.ZodString>;
    restockRemarks: z.ZodOptional<z.ZodString>;
    lines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderLineId: z.ZodString;
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
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }>, "many">>;
    pickLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderPickLineId: z.ZodString;
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
        salesOrderPackLineId: z.ZodString;
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
        salesOrderShipLineId: z.ZodString;
        carrier: z.ZodOptional<z.ZodString>;
        trackingNumber: z.ZodOptional<z.ZodString>;
        shippedDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
        containers: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
    }, {
        timestamp?: string;
        carrier?: string;
        salesOrderShipLineId?: string;
        trackingNumber?: string;
        shippedDate?: string;
        containers?: string[];
    }>, "many">>;
    restockLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        salesOrderRestockLineId: z.ZodString;
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
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    paymentTermsId?: string;
    customerId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    orderNumber?: string;
    orderDate?: string;
    dueDate?: string;
    isQuote?: boolean;
    isCancelled?: boolean;
    showShipping?: boolean;
    shipToCompanyName?: string;
    exchangeRate?: string;
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
    assignedToTeamMemberId?: string;
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
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }[];
    salesOrderId?: string;
    poNumber?: string;
    externalId?: string;
    source?: string;
    requestedShipDate?: string;
    invoicedDate?: string;
    isInvoiced?: boolean;
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
    salesRep?: string;
    salesRepTeamMemberId?: string;
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
    locationId?: string;
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    customFields?: Record<string, unknown>;
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    paymentTermsId?: string;
    customerId?: string;
    subTotal?: string;
    tax1Rate?: string;
    tax2Rate?: string;
    orderNumber?: string;
    orderDate?: string;
    dueDate?: string;
    isQuote?: boolean;
    isCancelled?: boolean;
    showShipping?: boolean;
    shipToCompanyName?: string;
    exchangeRate?: string;
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
    assignedToTeamMemberId?: string;
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
        tax1Rate?: string;
        tax2Rate?: string;
        returnDate?: string;
        serviceCompleted?: boolean;
        salesOrderLineId?: string;
        isDiscarded?: boolean;
    }[];
    salesOrderId?: string;
    poNumber?: string;
    externalId?: string;
    source?: string;
    requestedShipDate?: string;
    invoicedDate?: string;
    isInvoiced?: boolean;
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
    salesRep?: string;
    salesRepTeamMemberId?: string;
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
 * Field constraints for SalesOrder
 */
export declare const SalesOrderConstraints: {
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
        isInvoiced: boolean;
        showShipping: boolean;
        sameBillingAndShipping: boolean;
        isTaxInclusive: boolean;
        needsConfirmation: boolean;
        tax1OnShipping: boolean;
        tax2OnShipping: boolean;
    };
};
/**
 * Helper to create a new sales order payload
 */
export declare function createSalesOrderPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare order lines with generated IDs
 */
export declare function createOrderLines(lines: any, generateUuid: any): any;
/**
 * Helper to prepare pick lines with generated IDs
 */
export declare function createPickLines(lines: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map