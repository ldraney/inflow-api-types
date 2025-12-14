import { z } from 'zod';
/**
 * Customer address schema - included via ?include=addresses
 */
export declare const CustomerAddressSchema: z.ZodObject<{
    customerAddressId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
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
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    name?: string;
    address?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    customerAddressId?: string;
    customerId?: string;
}, {
    timestamp?: string;
    name?: string;
    address?: {
        remarks?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressType?: "Commercial" | "Residential" | "commercial" | "residential";
    };
    customerAddressId?: string;
    customerId?: string;
}>;
/**
 * Attachment schema - read-only, included via ?include=attachments
 */
export declare const CustomerAttachmentSchema: z.ZodObject<{
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
 * Customer balance schema - read-only, included via ?include=balances
 */
export declare const CustomerBalanceSchema: z.ZodObject<{
    customerBalanceId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    balance: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currencyId?: string;
    balance?: string;
    customerId?: string;
    customerBalanceId?: string;
}, {
    currencyId?: string;
    balance?: string;
    customerId?: string;
    customerBalanceId?: string;
}>;
/**
 * Customer credit schema - read-only, included via ?include=credits
 */
export declare const CustomerCreditSchema: z.ZodObject<{
    customerCreditId: z.ZodOptional<z.ZodString>;
    customerId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    credit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currencyId?: string;
    credit?: string;
    customerId?: string;
    customerCreditId?: string;
}, {
    currencyId?: string;
    credit?: string;
    customerId?: string;
    customerCreditId?: string;
}>;
/**
 * Customer due schema - read-only, shows amounts owed by aging bucket
 */
export declare const CustomerDueSchema: z.ZodObject<{
    customerDueId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodString>;
    amountCurrent: z.ZodOptional<z.ZodString>;
    amount1To30: z.ZodOptional<z.ZodString>;
    amount31To60: z.ZodOptional<z.ZodString>;
    amount61Plus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currencyId?: string;
    amountCurrent?: string;
    amount1To30?: string;
    amount31To60?: string;
    amount61Plus?: string;
    customerDueId?: string;
}, {
    currencyId?: string;
    amountCurrent?: string;
    amount1To30?: string;
    amount31To60?: string;
    amount61Plus?: string;
    customerDueId?: string;
}>;
/**
 * Customer order history schema - read-only
 */
export declare const CustomerOrderHistorySchema: z.ZodOptional<z.ZodNullable<z.ZodObject<{
    lastOrderDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
    orderCount: z.ZodOptional<z.ZodNumber>;
    totalOrdered: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastOrderDate?: string;
    orderCount?: number;
    totalOrdered?: string;
}, {
    lastOrderDate?: string;
    orderCount?: number;
    totalOrdered?: string;
}>>>;
/**
 * Customer GET response schema
 * Endpoint: GET /{companyId}/customers/{customerId}
 * Endpoint: GET /{companyId}/customers (returns array)
 */
export declare const CustomerGET: z.ZodObject<{
    customerId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    fax: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    discount: z.ZodOptional<z.ZodString>;
    pricingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taxExemptNumber: z.ZodOptional<z.ZodString>;
    taxingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultCarrier: z.ZodOptional<z.ZodString>;
    defaultPaymentMethod: z.ZodOptional<z.ZodString>;
    defaultLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultSalesRep: z.ZodOptional<z.ZodString>;
    defaultSalesRepTeamMemberId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultBillingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultShippingAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultPaymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
    defaultPaymentTerms: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        paymentTermsId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        paymentTermsId?: string;
    }, {
        name?: string;
        paymentTermsId?: string;
    }>>>;
    defaultLocation: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        locationId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        name?: string;
    }, {
        locationId?: string;
        name?: string;
    }>>>;
    defaultSalesRepTeamMember: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        teamMemberId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string;
        teamMemberId?: string;
    }, {
        name?: string;
        teamMemberId?: string;
    }>>>;
    defaultBillingAddress: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        customerAddressId: z.ZodOptional<z.ZodString>;
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodObject<{
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
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }>>>;
    defaultShippingAddress: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        customerAddressId: z.ZodOptional<z.ZodString>;
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodObject<{
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
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }>>>;
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        customerAddressId: z.ZodOptional<z.ZodString>;
        customerId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodObject<{
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
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }, {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
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
    balances: z.ZodOptional<z.ZodArray<z.ZodObject<{
        customerBalanceId: z.ZodOptional<z.ZodString>;
        customerId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        balance: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currencyId?: string;
        balance?: string;
        customerId?: string;
        customerBalanceId?: string;
    }, {
        currencyId?: string;
        balance?: string;
        customerId?: string;
        customerBalanceId?: string;
    }>, "many">>;
    credits: z.ZodOptional<z.ZodArray<z.ZodObject<{
        customerCreditId: z.ZodOptional<z.ZodString>;
        customerId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        credit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currencyId?: string;
        credit?: string;
        customerId?: string;
        customerCreditId?: string;
    }, {
        currencyId?: string;
        credit?: string;
        customerId?: string;
        customerCreditId?: string;
    }>, "many">>;
    dues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        customerDueId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodString>;
        amountCurrent: z.ZodOptional<z.ZodString>;
        amount1To30: z.ZodOptional<z.ZodString>;
        amount31To60: z.ZodOptional<z.ZodString>;
        amount61Plus: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currencyId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
        customerDueId?: string;
    }, {
        currencyId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
        customerDueId?: string;
    }>, "many">>;
    orderHistory: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        lastOrderDate: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodString]>>>;
        orderCount: z.ZodOptional<z.ZodNumber>;
        totalOrdered: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        lastOrderDate?: string;
        orderCount?: number;
        totalOrdered?: string;
    }, {
        lastOrderDate?: string;
        orderCount?: number;
        totalOrdered?: string;
    }>>>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    lastModifiedDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedById?: string;
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
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
    pricingScheme?: {
        pricingSchemeId?: string;
        name?: string;
    };
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultPaymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    addresses?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }[];
    balances?: {
        currencyId?: string;
        balance?: string;
        customerId?: string;
        customerBalanceId?: string;
    }[];
    credits?: {
        currencyId?: string;
        credit?: string;
        customerId?: string;
        customerCreditId?: string;
    }[];
    dues?: {
        currencyId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
        customerDueId?: string;
    }[];
    lastModifiedDttm?: string;
    customerId?: string;
    taxExemptNumber?: string;
    defaultLocationId?: string;
    defaultSalesRep?: string;
    defaultSalesRepTeamMemberId?: string;
    defaultBillingAddressId?: string;
    defaultShippingAddressId?: string;
    defaultLocation?: {
        locationId?: string;
        name?: string;
    };
    defaultSalesRepTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    defaultBillingAddress?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    };
    defaultShippingAddress?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    };
    orderHistory?: {
        lastOrderDate?: string;
        orderCount?: number;
        totalOrdered?: string;
    };
}, {
    lastModifiedById?: string;
    timestamp?: string;
    pricingSchemeId?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
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
    pricingScheme?: {
        pricingSchemeId?: string;
        name?: string;
    };
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultPaymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    addresses?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    }[];
    balances?: {
        currencyId?: string;
        balance?: string;
        customerId?: string;
        customerBalanceId?: string;
    }[];
    credits?: {
        currencyId?: string;
        credit?: string;
        customerId?: string;
        customerCreditId?: string;
    }[];
    dues?: {
        currencyId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
        customerDueId?: string;
    }[];
    lastModifiedDttm?: string;
    customerId?: string;
    taxExemptNumber?: string;
    defaultLocationId?: string;
    defaultSalesRep?: string;
    defaultSalesRepTeamMemberId?: string;
    defaultBillingAddressId?: string;
    defaultShippingAddressId?: string;
    defaultLocation?: {
        locationId?: string;
        name?: string;
    };
    defaultSalesRepTeamMember?: {
        name?: string;
        teamMemberId?: string;
    };
    defaultBillingAddress?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    };
    defaultShippingAddress?: {
        timestamp?: string;
        name?: string;
        address?: {
            remarks?: string;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalCode?: string;
            country?: string;
            addressType?: "Commercial" | "Residential" | "commercial" | "residential";
        };
        customerAddressId?: string;
        customerId?: string;
    };
    orderHistory?: {
        lastOrderDate?: string;
        orderCount?: number;
        totalOrdered?: string;
    };
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=addresses,balances,pricingScheme
 */
export declare const CustomerIncludes: {
    addresses: {
        description: string;
        adds: string[];
        nested: string[];
    };
    defaultBillingAddress: {
        description: string;
        adds: string[];
        nested: string[];
    };
    defaultShippingAddress: {
        description: string;
        adds: string[];
        nested: string[];
    };
    attachments: {
        description: string;
        adds: string[];
        nested: string[];
    };
    balances: {
        description: string;
        adds: string[];
        nested: string[];
    };
    credits: {
        description: string;
        adds: string[];
        nested: string[];
    };
    dues: {
        description: string;
        adds: string[];
        nested: string[];
    };
    orderHistory: {
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
    defaultPaymentTerms: {
        description: string;
        adds: string[];
        nested: any[];
    };
    defaultLocation: {
        description: string;
        adds: string[];
        nested: any[];
    };
    defaultSalesRepTeamMember: {
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
 * Usage: ?filter[name]=acme&filter[isActive]=true
 */
export declare const CustomerFilters: {
    name: {
        type: string;
        description: string;
    };
    contactName: {
        type: string;
        description: string;
    };
    phone: {
        type: string;
        description: string;
    };
    email: {
        type: string;
        description: string;
    };
    website: {
        type: string;
        description: string;
    };
    address: {
        type: string;
        description: string;
    };
    city: {
        type: string;
        description: string;
    };
    state: {
        type: string;
        description: string;
    };
    postalCode: {
        type: string;
        description: string;
    };
    country: {
        type: string;
        description: string;
    };
    pricingSchemeId: {
        type: string;
        description: string;
    };
    defaultLocationId: {
        type: string;
        description: string;
    };
    isActive: {
        type: string;
        description: string;
    };
    smart: {
        type: string;
        description: string;
    };
    lastOrder: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map