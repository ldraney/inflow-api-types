import { z } from 'zod';
export declare const CategoryGET: any;
export declare const AddressSchema: z.ZodOptional<z.ZodObject<{
    addressLine1: z.ZodOptional<z.ZodString>;
    addressLine2: z.ZodOptional<z.ZodString>;
    city: z.ZodOptional<z.ZodString>;
    country: z.ZodOptional<z.ZodString>;
    postalCode: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    addressLine1?: string;
    addressLine2?: string;
}, {
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    addressLine1?: string;
    addressLine2?: string;
}>>;
export declare const LocationGET: z.ZodObject<{
    locationId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    address: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodObject<{
        addressLine1: z.ZodOptional<z.ZodString>;
        addressLine2: z.ZodOptional<z.ZodString>;
        city: z.ZodOptional<z.ZodString>;
        country: z.ZodOptional<z.ZodString>;
        postalCode: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressLine1?: string;
        addressLine2?: string;
    }, {
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressLine1?: string;
        addressLine2?: string;
    }>>>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    name?: string;
    isActive?: boolean;
    address?: {
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressLine1?: string;
        addressLine2?: string;
    };
    isDefault?: boolean;
}, {
    locationId?: string;
    timestamp?: string;
    name?: string;
    isActive?: boolean;
    address?: {
        city?: string;
        state?: string;
        postalCode?: string;
        country?: string;
        addressLine1?: string;
        addressLine2?: string;
    };
    isDefault?: boolean;
}>;
export declare const CurrencyConversionSchema: z.ZodObject<{
    currencyConversionId: z.ZodOptional<z.ZodString>;
    currencyId: z.ZodOptional<z.ZodString>;
    exchangeRate: z.ZodOptional<z.ZodString>;
    isManual: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    currencyId?: string;
    exchangeRate?: string;
    currencyConversionId?: string;
    isManual?: boolean;
}, {
    timestamp?: string;
    currencyId?: string;
    exchangeRate?: string;
    currencyConversionId?: string;
    isManual?: boolean;
}>;
export declare const CurrencyGET: z.ZodObject<{
    currencyId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    symbol: z.ZodOptional<z.ZodString>;
    code: z.ZodOptional<z.ZodString>;
    decimalPlaces: z.ZodOptional<z.ZodNumber>;
    decimalSeparator: z.ZodOptional<z.ZodString>;
    thousandsSeparator: z.ZodOptional<z.ZodString>;
    isSymbolFirst: z.ZodOptional<z.ZodBoolean>;
    isHome: z.ZodOptional<z.ZodBoolean>;
    currencyConversions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        currencyConversionId: z.ZodOptional<z.ZodString>;
        currencyId: z.ZodOptional<z.ZodString>;
        exchangeRate: z.ZodOptional<z.ZodString>;
        isManual: z.ZodOptional<z.ZodBoolean>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        currencyId?: string;
        exchangeRate?: string;
        currencyConversionId?: string;
        isManual?: boolean;
    }, {
        timestamp?: string;
        currencyId?: string;
        exchangeRate?: string;
        currencyConversionId?: string;
        isManual?: boolean;
    }>, "many">>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol?: string;
    code?: string;
    timestamp?: string;
    name?: string;
    currencyId?: string;
    decimalPlaces?: number;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    isSymbolFirst?: boolean;
    isHome?: boolean;
    currencyConversions?: {
        timestamp?: string;
        currencyId?: string;
        exchangeRate?: string;
        currencyConversionId?: string;
        isManual?: boolean;
    }[];
}, {
    symbol?: string;
    code?: string;
    timestamp?: string;
    name?: string;
    currencyId?: string;
    decimalPlaces?: number;
    decimalSeparator?: string;
    thousandsSeparator?: string;
    isSymbolFirst?: boolean;
    isHome?: boolean;
    currencyConversions?: {
        timestamp?: string;
        currencyId?: string;
        exchangeRate?: string;
        currencyConversionId?: string;
        isManual?: boolean;
    }[];
}>;
export declare const PricingSchemeGET: z.ZodObject<{
    pricingSchemeId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    isTaxInclusive: z.ZodOptional<z.ZodBoolean>;
    currencyId: z.ZodOptional<z.ZodString>;
    currency: z.ZodOptional<z.ZodObject<{
        currencyId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        symbol: z.ZodOptional<z.ZodString>;
        code: z.ZodOptional<z.ZodString>;
        decimalPlaces: z.ZodOptional<z.ZodNumber>;
        decimalSeparator: z.ZodOptional<z.ZodString>;
        thousandsSeparator: z.ZodOptional<z.ZodString>;
        isSymbolFirst: z.ZodOptional<z.ZodBoolean>;
        isHome: z.ZodOptional<z.ZodBoolean>;
        currencyConversions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            currencyConversionId: z.ZodOptional<z.ZodString>;
            currencyId: z.ZodOptional<z.ZodString>;
            exchangeRate: z.ZodOptional<z.ZodString>;
            isManual: z.ZodOptional<z.ZodBoolean>;
            timestamp: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }, {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }>, "many">>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        symbol?: string;
        code?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        isHome?: boolean;
        currencyConversions?: {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }[];
    }, {
        symbol?: string;
        code?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        isHome?: boolean;
        currencyConversions?: {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }[];
    }>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    pricingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    currencyId?: string;
    currency?: {
        symbol?: string;
        code?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        isHome?: boolean;
        currencyConversions?: {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }[];
    };
    isTaxInclusive?: boolean;
    isDefault?: boolean;
}, {
    timestamp?: string;
    pricingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    currencyId?: string;
    currency?: {
        symbol?: string;
        code?: string;
        timestamp?: string;
        name?: string;
        currencyId?: string;
        decimalPlaces?: number;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        isSymbolFirst?: boolean;
        isHome?: boolean;
        currencyConversions?: {
            timestamp?: string;
            currencyId?: string;
            exchangeRate?: string;
            currencyConversionId?: string;
            isManual?: boolean;
        }[];
    };
    isTaxInclusive?: boolean;
    isDefault?: boolean;
}>;
export declare const PaymentTermsGET: z.ZodObject<{
    paymentTermsId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    daysDue: z.ZodOptional<z.ZodNumber>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    name?: string;
    isActive?: boolean;
    paymentTermsId?: string;
    daysDue?: number;
}, {
    timestamp?: string;
    name?: string;
    isActive?: boolean;
    paymentTermsId?: string;
    daysDue?: number;
}>;
export declare const TaxCodeGET: z.ZodObject<{
    taxCodeId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    tax1Rate: z.ZodOptional<z.ZodString>;
    tax2Rate: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    taxingSchemeId: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
    name?: string;
    isActive?: boolean;
    tax1Rate?: string;
    tax2Rate?: string;
}, {
    timestamp?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
    name?: string;
    isActive?: boolean;
    tax1Rate?: string;
    tax2Rate?: string;
}>;
export declare const TaxingSchemeGET: z.ZodObject<{
    taxingSchemeId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    tax1Name: z.ZodOptional<z.ZodString>;
    tax2Name: z.ZodOptional<z.ZodString>;
    tax1OnShipping: z.ZodOptional<z.ZodBoolean>;
    tax2OnShipping: z.ZodOptional<z.ZodBoolean>;
    calculateTax2OnTax1: z.ZodOptional<z.ZodBoolean>;
    defaultTaxCodeId: z.ZodOptional<z.ZodString>;
    defaultTaxCode: z.ZodOptional<z.ZodObject<{
        taxCodeId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        tax1Rate: z.ZodOptional<z.ZodString>;
        tax2Rate: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        taxingSchemeId: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }, {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }>>;
    taxCodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        taxCodeId: z.ZodString;
        name: z.ZodOptional<z.ZodString>;
        tax1Rate: z.ZodOptional<z.ZodString>;
        tax2Rate: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        taxingSchemeId: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }, {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }>, "many">>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    taxCodes?: {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }[];
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    isDefault?: boolean;
    defaultTaxCodeId?: string;
    defaultTaxCode?: {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    };
}, {
    timestamp?: string;
    taxingSchemeId?: string;
    name?: string;
    isActive?: boolean;
    taxCodes?: {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    }[];
    calculateTax2OnTax1?: boolean;
    tax1Name?: string;
    tax1OnShipping?: boolean;
    tax2Name?: string;
    tax2OnShipping?: boolean;
    isDefault?: boolean;
    defaultTaxCodeId?: string;
    defaultTaxCode?: {
        timestamp?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
        name?: string;
        isActive?: boolean;
        tax1Rate?: string;
        tax2Rate?: string;
    };
}>;
export declare const OperationTypeGET: z.ZodObject<{
    operationTypeId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isDefault: z.ZodOptional<z.ZodBoolean>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    operationTypeId?: string;
    name?: string;
    isActive?: boolean;
    isDefault?: boolean;
}, {
    timestamp?: string;
    operationTypeId?: string;
    name?: string;
    isActive?: boolean;
    isDefault?: boolean;
}>;
export declare const AdjustmentReasonGET: z.ZodObject<{
    adjustmentReasonId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isInternal: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    isActive?: boolean;
    adjustmentReasonId?: string;
    isInternal?: boolean;
}, {
    name?: string;
    isActive?: boolean;
    adjustmentReasonId?: string;
    isInternal?: boolean;
}>;
/**
 * AccessRight - API returns PascalCase format like 'SalesOrderView', 'ProductEdit'
 * Note: swagger.json shows SCREAMING_SNAKE_CASE but API returns PascalCase
 */
export declare const AccessRight: z.ZodString;
export declare const TeamMemberGET: z.ZodObject<{
    teamMemberId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    isInternal: z.ZodOptional<z.ZodBoolean>;
    canBeSalesRep: z.ZodOptional<z.ZodBoolean>;
    accessAllLocations: z.ZodOptional<z.ZodBoolean>;
    accessLocationIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    accessRights: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    isActive?: boolean;
    email?: string;
    teamMemberId?: string;
    isInternal?: boolean;
    canBeSalesRep?: boolean;
    accessAllLocations?: boolean;
    accessLocationIds?: string[];
    accessRights?: string[];
}, {
    name?: string;
    isActive?: boolean;
    email?: string;
    teamMemberId?: string;
    isInternal?: boolean;
    canBeSalesRep?: boolean;
    accessAllLocations?: boolean;
    accessLocationIds?: string[];
    accessRights?: string[];
}>;
export declare const UnitOfMeasureSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    conversionRatio: z.ZodOptional<z.ZodObject<{
        numerator: z.ZodOptional<z.ZodString>;
        denominator: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        numerator?: string;
        denominator?: string;
    }, {
        numerator?: string;
        denominator?: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    conversionRatio?: {
        numerator?: string;
        denominator?: string;
    };
}, {
    name?: string;
    conversionRatio?: {
        numerator?: string;
        denominator?: string;
    };
}>;
//# sourceMappingURL=index.d.ts.map