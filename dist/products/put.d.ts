import { z } from 'zod';
/**
 * Product price for PUT - requires productPriceId for updates
 */
export declare const ProductPricePUT: z.ZodObject<{
    productPriceId: z.ZodString;
    pricingSchemeId: z.ZodString;
    priceType: z.ZodOptional<z.ZodEnum<["fixedPrice", "fixedMarkup"]>>;
    unitPrice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fixedMarkup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fixedMarkup?: string;
    timestamp?: string;
    productPriceId?: string;
    pricingSchemeId?: string;
    priceType?: "fixedPrice" | "fixedMarkup";
    unitPrice?: string;
}, {
    fixedMarkup?: string;
    timestamp?: string;
    productPriceId?: string;
    pricingSchemeId?: string;
    priceType?: "fixedPrice" | "fixedMarkup";
    unitPrice?: string;
}>;
/**
 * Product barcode for PUT - requires productBarcodeId for updates
 */
export declare const ProductBarcodePUT: z.ZodObject<{
    productBarcodeId: z.ZodString;
    barcode: z.ZodString;
    lineNum: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    productBarcodeId?: string;
    barcode?: string;
    lineNum?: number;
}, {
    timestamp?: string;
    productBarcodeId?: string;
    barcode?: string;
    lineNum?: number;
}>;
/**
 * Vendor item for PUT - requires vendorItemId for updates
 */
export declare const VendorItemPUT: z.ZodObject<{
    vendorItemId: z.ZodString;
    vendorId: z.ZodString;
    vendorItemCode: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}, {
    timestamp?: string;
    lineNum?: number;
    vendorItemId?: string;
    vendorId?: string;
    vendorItemCode?: string;
    cost?: string;
    leadTimeDays?: number;
}>;
/**
 * Item BOM for PUT - requires itemBomId for updates
 */
export declare const ItemBomPUT: z.ZodObject<{
    itemBomId: z.ZodString;
    childProductId: z.ZodString;
    quantity: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodString;
        uomName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        quantity?: string;
        uomName?: string;
    }, {
        quantity?: string;
        uomName?: string;
    }>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    itemBomId?: string;
    childProductId?: string;
    quantity?: {
        quantity?: string;
        uomName?: string;
    };
}, {
    timestamp?: string;
    itemBomId?: string;
    childProductId?: string;
    quantity?: {
        quantity?: string;
        uomName?: string;
    };
}>;
/**
 * Product operation for PUT - requires productOperationId for updates
 */
export declare const ProductOperationPUT: z.ZodObject<{
    productOperationId: z.ZodString;
    operationTypeId: z.ZodString;
    lineNum: z.ZodOptional<z.ZodNumber>;
    instructions: z.ZodOptional<z.ZodString>;
    estimatedSeconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    estimatedMinutes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    perHourCost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    lineNum?: number;
    cost?: string;
    productOperationId?: string;
    operationTypeId?: string;
    instructions?: string;
    estimatedSeconds?: string;
    estimatedMinutes?: string;
    perHourCost?: string;
}, {
    timestamp?: string;
    lineNum?: number;
    cost?: string;
    productOperationId?: string;
    operationTypeId?: string;
    instructions?: string;
    estimatedSeconds?: string;
    estimatedMinutes?: string;
    perHourCost?: string;
}>;
/**
 * Reorder settings for PUT - requires reorderSettingsId for updates
 */
export declare const ReorderSettingsPUT: z.ZodObject<{
    reorderSettingsId: z.ZodString;
    locationId: z.ZodString;
    fromLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    vendorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enableReordering: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    reorderMethod: z.ZodOptional<z.ZodEnum<["purchaseOrder", "workOrder", "stockTransfer"]>>;
    reorderPoint: z.ZodOptional<z.ZodString>;
    reorderQuantity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultSublocation: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    reorderSettingsId?: string;
    fromLocationId?: string;
    enableReordering?: boolean;
    reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
    reorderPoint?: string;
    reorderQuantity?: string;
    defaultSublocation?: string;
}, {
    locationId?: string;
    timestamp?: string;
    vendorId?: string;
    reorderSettingsId?: string;
    fromLocationId?: string;
    enableReordering?: boolean;
    reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
    reorderPoint?: string;
    reorderQuantity?: string;
    defaultSublocation?: string;
}>;
/**
 * Product tax code for PUT - requires productTaxCodeId for updates
 */
export declare const ProductTaxCodePUT: z.ZodObject<{
    productTaxCodeId: z.ZodString;
    taxingSchemeId: z.ZodString;
    taxCodeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    timestamp?: string;
    productTaxCodeId?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
}, {
    timestamp?: string;
    productTaxCodeId?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
}>;
/**
 * Product PUT request schema
 * Endpoint: PUT /{companyId}/products
 *
 * This is an upsert operation:
 * - Generate a new GUID for productId when inserting
 * - Use an existing productId when updating
 */
export declare const ProductPUT: z.ZodObject<{
    productId: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    sku: z.ZodOptional<z.ZodString>;
    itemType: z.ZodOptional<z.ZodEnum<["stockedProduct", "nonstockedProduct", "service"]>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    categoryId: z.ZodOptional<z.ZodString>;
    weight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    length: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    width: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    height: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    standardUomName: z.ZodOptional<z.ZodString>;
    trackSerials: z.ZodOptional<z.ZodBoolean>;
    autoAssemble: z.ZodOptional<z.ZodBoolean>;
    includeQuantityBuildable: z.ZodOptional<z.ZodBoolean>;
    hsTariffNumber: z.ZodOptional<z.ZodString>;
    originCountry: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    defaultImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productPriceId: z.ZodString;
        pricingSchemeId: z.ZodString;
        priceType: z.ZodOptional<z.ZodEnum<["fixedPrice", "fixedMarkup"]>>;
        unitPrice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fixedMarkup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fixedMarkup?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }, {
        fixedMarkup?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }>, "many">>;
    productBarcodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productBarcodeId: z.ZodString;
        barcode: z.ZodString;
        lineNum: z.ZodOptional<z.ZodNumber>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }, {
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }>, "many">>;
    vendorItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorItemId: z.ZodString;
        vendorId: z.ZodString;
        vendorItemCode: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        leadTimeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        lineNum: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }, {
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }>, "many">>;
    itemBoms: z.ZodOptional<z.ZodArray<z.ZodObject<{
        itemBomId: z.ZodString;
        childProductId: z.ZodString;
        quantity: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodString;
            uomName: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            quantity?: string;
            uomName?: string;
        }, {
            quantity?: string;
            uomName?: string;
        }>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }, {
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }>, "many">>;
    productOperations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productOperationId: z.ZodString;
        operationTypeId: z.ZodString;
        lineNum: z.ZodOptional<z.ZodNumber>;
        instructions: z.ZodOptional<z.ZodString>;
        estimatedSeconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        estimatedMinutes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        perHourCost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        lineNum?: number;
        cost?: string;
        productOperationId?: string;
        operationTypeId?: string;
        instructions?: string;
        estimatedSeconds?: string;
        estimatedMinutes?: string;
        perHourCost?: string;
    }, {
        timestamp?: string;
        lineNum?: number;
        cost?: string;
        productOperationId?: string;
        operationTypeId?: string;
        instructions?: string;
        estimatedSeconds?: string;
        estimatedMinutes?: string;
        perHourCost?: string;
    }>, "many">>;
    reorderSettings: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reorderSettingsId: z.ZodString;
        locationId: z.ZodString;
        fromLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        vendorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        enableReordering: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        reorderMethod: z.ZodOptional<z.ZodEnum<["purchaseOrder", "workOrder", "stockTransfer"]>>;
        reorderPoint: z.ZodOptional<z.ZodString>;
        reorderQuantity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultSublocation: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        locationId?: string;
        timestamp?: string;
        vendorId?: string;
        reorderSettingsId?: string;
        fromLocationId?: string;
        enableReordering?: boolean;
        reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
        reorderPoint?: string;
        reorderQuantity?: string;
        defaultSublocation?: string;
    }, {
        locationId?: string;
        timestamp?: string;
        vendorId?: string;
        reorderSettingsId?: string;
        fromLocationId?: string;
        enableReordering?: boolean;
        reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
        reorderPoint?: string;
        reorderQuantity?: string;
        defaultSublocation?: string;
    }>, "many">>;
    taxCodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productTaxCodeId: z.ZodString;
        taxingSchemeId: z.ZodString;
        taxCodeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }, {
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    length?: string;
    productId?: string;
    timestamp?: string;
    name?: string;
    description?: string;
    sku?: string;
    itemType?: "stockedProduct" | "nonstockedProduct" | "service";
    isActive?: boolean;
    categoryId?: string;
    weight?: string;
    width?: string;
    height?: string;
    standardUomName?: string;
    trackSerials?: boolean;
    autoAssemble?: boolean;
    includeQuantityBuildable?: boolean;
    hsTariffNumber?: string;
    originCountry?: string;
    remarks?: string;
    defaultImageId?: string;
    prices?: {
        fixedMarkup?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }[];
    productBarcodes?: {
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }[];
    vendorItems?: {
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    itemBoms?: {
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }[];
    productOperations?: {
        timestamp?: string;
        lineNum?: number;
        cost?: string;
        productOperationId?: string;
        operationTypeId?: string;
        instructions?: string;
        estimatedSeconds?: string;
        estimatedMinutes?: string;
        perHourCost?: string;
    }[];
    reorderSettings?: {
        locationId?: string;
        timestamp?: string;
        vendorId?: string;
        reorderSettingsId?: string;
        fromLocationId?: string;
        enableReordering?: boolean;
        reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
        reorderPoint?: string;
        reorderQuantity?: string;
        defaultSublocation?: string;
    }[];
    taxCodes?: {
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }[];
    customFields?: Record<string, unknown>;
}, {
    length?: string;
    productId?: string;
    timestamp?: string;
    name?: string;
    description?: string;
    sku?: string;
    itemType?: "stockedProduct" | "nonstockedProduct" | "service";
    isActive?: boolean;
    categoryId?: string;
    weight?: string;
    width?: string;
    height?: string;
    standardUomName?: string;
    trackSerials?: boolean;
    autoAssemble?: boolean;
    includeQuantityBuildable?: boolean;
    hsTariffNumber?: string;
    originCountry?: string;
    remarks?: string;
    defaultImageId?: string;
    prices?: {
        fixedMarkup?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }[];
    productBarcodes?: {
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }[];
    vendorItems?: {
        timestamp?: string;
        lineNum?: number;
        vendorItemId?: string;
        vendorId?: string;
        vendorItemCode?: string;
        cost?: string;
        leadTimeDays?: number;
    }[];
    itemBoms?: {
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }[];
    productOperations?: {
        timestamp?: string;
        lineNum?: number;
        cost?: string;
        productOperationId?: string;
        operationTypeId?: string;
        instructions?: string;
        estimatedSeconds?: string;
        estimatedMinutes?: string;
        perHourCost?: string;
    }[];
    reorderSettings?: {
        locationId?: string;
        timestamp?: string;
        vendorId?: string;
        reorderSettingsId?: string;
        fromLocationId?: string;
        enableReordering?: boolean;
        reorderMethod?: "purchaseOrder" | "workOrder" | "stockTransfer";
        reorderPoint?: string;
        reorderQuantity?: string;
        defaultSublocation?: string;
    }[];
    taxCodes?: {
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }[];
    customFields?: Record<string, unknown>;
}>;
/**
 * Field constraints for Product
 *
 * Use these to understand which fields can be modified and when.
 */
export declare const ProductConstraints: {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: string[];
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: string[];
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: string[];
        update: string[];
    };
    /**
     * Nested arrays that require their own IDs
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: {
        field: string;
        idField: string;
    }[];
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {
        itemType: string;
        isActive: boolean;
        trackSerials: boolean;
        autoAssemble: boolean;
        includeQuantityBuildable: boolean;
    };
};
/**
 * Helper to create a new product payload with generated IDs
 */
export declare function createProductPayload(data: any, generateUuid: any): any;
/**
 * Helper to prepare nested array items with generated IDs
 */
export declare function createNestedItems(items: any, idField: any, generateUuid: any): any;
//# sourceMappingURL=put.d.ts.map