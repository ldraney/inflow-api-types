import { z } from 'zod';
/**
 * Address type enum
 * Note: API may return camelCase despite swagger showing PascalCase
 */
export declare const AddressType: z.ZodOptional<z.ZodNullable<z.ZodEnum<["Commercial", "Residential", "commercial", "residential"]>>>;
/**
 * Address schema - embedded in VendorAddress
 */
export declare const AddressSchema: z.ZodObject<{
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
}>;
/**
 * Vendor address schema - included via ?include=addresses
 */
export declare const VendorAddressSchema: z.ZodObject<{
    vendorAddressId: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
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
    vendorId?: string;
    name?: string;
    vendorAddressId?: string;
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
}, {
    timestamp?: string;
    vendorId?: string;
    name?: string;
    vendorAddressId?: string;
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
}>;
/**
 * Attachment schema - read-only, included via ?include=attachments
 */
export declare const AttachmentSchema: z.ZodObject<{
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
 * Vendor balance schema - read-only, included via ?include=balances
 */
export declare const VendorBalanceSchema: z.ZodObject<{
    vendorBalanceId: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    balance: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vendorId?: string;
    vendorBalanceId?: string;
    currencyId?: string;
    balance?: string;
}, {
    vendorId?: string;
    vendorBalanceId?: string;
    currencyId?: string;
    balance?: string;
}>;
/**
 * Vendor credit schema - read-only, included via ?include=credits
 */
export declare const VendorCreditSchema: z.ZodObject<{
    vendorCreditId: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    credit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vendorId?: string;
    currencyId?: string;
    vendorCreditId?: string;
    credit?: string;
}, {
    vendorId?: string;
    currencyId?: string;
    vendorCreditId?: string;
    credit?: string;
}>;
/**
 * Vendor due schema - read-only, shows amounts owed by aging bucket
 */
export declare const VendorDueSchema: z.ZodObject<{
    vendorDueId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodString>;
    amountCurrent: z.ZodOptional<z.ZodString>;
    amount1To30: z.ZodOptional<z.ZodString>;
    amount31To60: z.ZodOptional<z.ZodString>;
    amount61Plus: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    currencyId?: string;
    vendorDueId?: string;
    amountCurrent?: string;
    amount1To30?: string;
    amount31To60?: string;
    amount61Plus?: string;
}, {
    currencyId?: string;
    vendorDueId?: string;
    amountCurrent?: string;
    amount1To30?: string;
    amount31To60?: string;
    amount61Plus?: string;
}>;
/**
 * Vendor item schema - products this vendor sells to you
 */
export declare const VendorItemSchema: z.ZodObject<{
    vendorItemId: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    vendorItemCode: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}, {
    productId?: string;
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}>;
/**
 * Vendor GET response schema
 * Endpoint: GET /{companyId}/vendors/{vendorId}
 * Endpoint: GET /{companyId}/vendors (returns array)
 */
export declare const VendorGET: z.ZodObject<{
    vendorId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    contactName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    fax: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isTaxInclusivePricing: z.ZodOptional<z.ZodBoolean>;
    discount: z.ZodOptional<z.ZodString>;
    leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultCarrier: z.ZodOptional<z.ZodString>;
    defaultPaymentMethod: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodString>;
    defaultPaymentTermsId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultAddressId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    taxingSchemeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    currency: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currencyId: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        isoCode: z.ZodOptional<z.ZodString>;
        symbol: z.ZodOptional<z.ZodString>;
        decimalPlaces: z.ZodOptional<z.ZodNumber>;
        decimalSeparator: z.ZodOptional<z.ZodString>;
        thousandsSeparator: z.ZodOptional<z.ZodString>;
        isSymbolFirst: z.ZodOptional<z.ZodBoolean>;
        negativeType: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        negativeType?: string;
    }, {
        symbol?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        negativeType?: string;
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
    defaultAddress: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        vendorAddressId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
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
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    }, {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorAddressId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
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
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    }, {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
        vendorBalanceId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        balance: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        vendorId?: string;
        vendorBalanceId?: string;
        currencyId?: string;
        balance?: string;
    }, {
        vendorId?: string;
        vendorBalanceId?: string;
        currencyId?: string;
        balance?: string;
    }>, "many">>;
    credits: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorCreditId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        credit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        vendorId?: string;
        currencyId?: string;
        vendorCreditId?: string;
        credit?: string;
    }, {
        vendorId?: string;
        currencyId?: string;
        vendorCreditId?: string;
        credit?: string;
    }>, "many">>;
    dues: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorDueId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodString>;
        amountCurrent: z.ZodOptional<z.ZodString>;
        amount1To30: z.ZodOptional<z.ZodString>;
        amount31To60: z.ZodOptional<z.ZodString>;
        amount61Plus: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        currencyId?: string;
        vendorDueId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
    }, {
        currencyId?: string;
        vendorDueId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
    }>, "many">>;
    vendorItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorItemId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        vendorItemCode: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }, {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    lastModifiedDttm: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    lastModifiedById?: string;
    timestamp?: string;
    vendorId?: string;
    leadTimeDays?: number;
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
    vendorItems?: {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    customFields?: Record<string, unknown>;
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    isTaxInclusivePricing?: boolean;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultAddressId?: string;
    currency?: {
        symbol?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        negativeType?: string;
    };
    defaultPaymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    defaultAddress?: {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    };
    addresses?: {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    }[];
    balances?: {
        vendorId?: string;
        vendorBalanceId?: string;
        currencyId?: string;
        balance?: string;
    }[];
    credits?: {
        vendorId?: string;
        currencyId?: string;
        vendorCreditId?: string;
        credit?: string;
    }[];
    dues?: {
        currencyId?: string;
        vendorDueId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
    }[];
    lastModifiedDttm?: string;
}, {
    lastModifiedById?: string;
    timestamp?: string;
    vendorId?: string;
    leadTimeDays?: number;
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
    vendorItems?: {
        productId?: string;
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    customFields?: Record<string, unknown>;
    taxingScheme?: {
        taxingSchemeId?: string;
        name?: string;
    };
    currencyId?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    fax?: string;
    website?: string;
    isTaxInclusivePricing?: boolean;
    discount?: string;
    defaultCarrier?: string;
    defaultPaymentMethod?: string;
    defaultPaymentTermsId?: string;
    defaultAddressId?: string;
    currency?: {
        symbol?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        isoCode?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        negativeType?: string;
    };
    defaultPaymentTerms?: {
        name?: string;
        paymentTermsId?: string;
    };
    defaultAddress?: {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    };
    addresses?: {
        timestamp?: string;
        vendorId?: string;
        name?: string;
        vendorAddressId?: string;
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
    }[];
    balances?: {
        vendorId?: string;
        vendorBalanceId?: string;
        currencyId?: string;
        balance?: string;
    }[];
    credits?: {
        vendorId?: string;
        currencyId?: string;
        vendorCreditId?: string;
        credit?: string;
    }[];
    dues?: {
        currencyId?: string;
        vendorDueId?: string;
        amountCurrent?: string;
        amount1To30?: string;
        amount31To60?: string;
        amount61Plus?: string;
    }[];
    lastModifiedDttm?: string;
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=addresses,vendorItems,balances
 */
export declare const VendorIncludes: {
    addresses: {
        description: string;
        adds: string[];
        nested: string[];
    };
    defaultAddress: {
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
    vendorItems: {
        description: string;
        adds: string[];
        nested: string[];
    };
    currency: {
        description: string;
        adds: string[];
        nested: any[];
    };
    defaultPaymentTerms: {
        description: string;
        adds: string[];
        nested: any[];
    };
    taxingScheme: {
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
export declare const VendorFilters: {
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