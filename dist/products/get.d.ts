import { z } from 'zod';
/**
 * Image schema - included via ?include=images or ?include=defaultImage
 * Note: URL fields can be null for some image formats
 */
export declare const ImageSchema: z.ZodObject<{
    imageId: z.ZodOptional<z.ZodString>;
    thumbUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    smallUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mediumUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    mediumUncroppedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    largeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    originalUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    imageId?: string;
    thumbUrl?: string;
    smallUrl?: string;
    mediumUrl?: string;
    mediumUncroppedUrl?: string;
    largeUrl?: string;
    originalUrl?: string;
}, {
    imageId?: string;
    thumbUrl?: string;
    smallUrl?: string;
    mediumUrl?: string;
    mediumUncroppedUrl?: string;
    largeUrl?: string;
    originalUrl?: string;
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
 * Inventory line schema - included via ?include=inventoryLines
 */
export declare const InventoryLineSchema: z.ZodObject<{
    inventoryLineId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodString>;
    quantityOnHand: z.ZodOptional<z.ZodString>;
    sublocation: z.ZodOptional<z.ZodString>;
    serial: z.ZodOptional<z.ZodString>;
    lotId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    inventoryLineId?: string;
    productId?: string;
    locationId?: string;
    quantityOnHand?: string;
    sublocation?: string;
    serial?: string;
    lotId?: string;
    timestamp?: string;
}, {
    inventoryLineId?: string;
    productId?: string;
    locationId?: string;
    quantityOnHand?: string;
    sublocation?: string;
    serial?: string;
    lotId?: string;
    timestamp?: string;
}>;
/**
 * Product price schema - included via ?include=prices
 */
export declare const ProductPriceSchema: z.ZodObject<{
    productPriceId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    pricingSchemeId: z.ZodOptional<z.ZodString>;
    priceType: z.ZodOptional<z.ZodEnum<["fixedPrice", "fixedMarkup"]>>;
    unitPrice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    fixedMarkup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    fixedMarkup?: string;
    productId?: string;
    timestamp?: string;
    productPriceId?: string;
    pricingSchemeId?: string;
    priceType?: "fixedPrice" | "fixedMarkup";
    unitPrice?: string;
}, {
    fixedMarkup?: string;
    productId?: string;
    timestamp?: string;
    productPriceId?: string;
    pricingSchemeId?: string;
    priceType?: "fixedPrice" | "fixedMarkup";
    unitPrice?: string;
}>;
/**
 * Product barcode schema - included via ?include=productBarcodes
 */
export declare const ProductBarcodeSchema: z.ZodObject<{
    productBarcodeId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    barcode: z.ZodOptional<z.ZodString>;
    lineNum: z.ZodOptional<z.ZodNumber>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    productBarcodeId?: string;
    barcode?: string;
    lineNum?: number;
}, {
    productId?: string;
    timestamp?: string;
    productBarcodeId?: string;
    barcode?: string;
    lineNum?: number;
}>;
/**
 * Vendor item schema - included via ?include=vendorItems
 */
export declare const VendorItemSchema: z.ZodObject<{
    vendorItemId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    vendorId: z.ZodOptional<z.ZodString>;
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
 * Item BOM (Bill of Materials) schema - included via ?include=itemBoms
 */
export declare const ItemBomSchema: z.ZodObject<{
    itemBomId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    childProductId: z.ZodOptional<z.ZodString>;
    quantity: z.ZodOptional<z.ZodObject<{
        quantity: z.ZodOptional<z.ZodString>;
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
    productId?: string;
    timestamp?: string;
    itemBomId?: string;
    childProductId?: string;
    quantity?: {
        quantity?: string;
        uomName?: string;
    };
}, {
    productId?: string;
    timestamp?: string;
    itemBomId?: string;
    childProductId?: string;
    quantity?: {
        quantity?: string;
        uomName?: string;
    };
}>;
/**
 * Product operation schema - included via ?include=productOperations
 */
export declare const ProductOperationSchema: z.ZodObject<{
    productOperationId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    operationTypeId: z.ZodOptional<z.ZodString>;
    lineNum: z.ZodOptional<z.ZodNumber>;
    instructions: z.ZodOptional<z.ZodString>;
    estimatedSeconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    estimatedMinutes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    perHourCost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
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
    productId?: string;
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
 * Reorder settings schema - included via ?include=reorderSettings
 */
export declare const ReorderSettingsSchema: z.ZodObject<{
    reorderSettingsId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    locationId: z.ZodOptional<z.ZodString>;
    fromLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    vendorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    enableReordering: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    reorderMethod: z.ZodOptional<z.ZodEnum<["purchaseOrder", "workOrder", "stockTransfer"]>>;
    reorderPoint: z.ZodOptional<z.ZodString>;
    reorderQuantity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultSublocation: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
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
    productId?: string;
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
 * Product tax code schema - included via ?include=taxCodes
 */
export declare const ProductTaxCodeSchema: z.ZodObject<{
    productTaxCodeId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    taxingSchemeId: z.ZodOptional<z.ZodString>;
    taxCodeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    timestamp?: string;
    productTaxCodeId?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
}, {
    productId?: string;
    timestamp?: string;
    productTaxCodeId?: string;
    taxingSchemeId?: string;
    taxCodeId?: string;
}>;
/**
 * Product cost schema - read-only
 */
export declare const ProductCostSchema: z.ZodObject<{
    productCostId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    productId?: string;
    cost?: string;
    productCostId?: string;
}, {
    productId?: string;
    cost?: string;
    productCostId?: string;
}>;
/**
 * Product GET response schema
 * Endpoint: GET /{companyId}/products/{productId}
 * Endpoint: GET /{companyId}/products (returns array)
 */
export declare const ProductGET: z.ZodObject<{
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
    trackLots: z.ZodOptional<z.ZodBoolean>;
    trackExpiry: z.ZodOptional<z.ZodBoolean>;
    shelfLifeDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    expiryNotificationDays: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    autoAssemble: z.ZodOptional<z.ZodBoolean>;
    includeQuantityBuildable: z.ZodOptional<z.ZodBoolean>;
    isManufacturable: z.ZodOptional<z.ZodBoolean>;
    hsTariffNumber: z.ZodOptional<z.ZodString>;
    originCountry: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    defaultImageId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    defaultImage: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        imageId: z.ZodOptional<z.ZodString>;
        thumbUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        smallUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mediumUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mediumUncroppedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        largeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        originalUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    }, {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    }>>>;
    images: z.ZodOptional<z.ZodArray<z.ZodObject<{
        imageId: z.ZodOptional<z.ZodString>;
        thumbUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        smallUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mediumUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        mediumUncroppedUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        largeUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        originalUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    }, {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
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
    inventoryLines: z.ZodOptional<z.ZodArray<z.ZodObject<{
        inventoryLineId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        locationId: z.ZodOptional<z.ZodString>;
        quantityOnHand: z.ZodOptional<z.ZodString>;
        sublocation: z.ZodOptional<z.ZodString>;
        serial: z.ZodOptional<z.ZodString>;
        lotId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        inventoryLineId?: string;
        productId?: string;
        locationId?: string;
        quantityOnHand?: string;
        sublocation?: string;
        serial?: string;
        lotId?: string;
        timestamp?: string;
    }, {
        inventoryLineId?: string;
        productId?: string;
        locationId?: string;
        quantityOnHand?: string;
        sublocation?: string;
        serial?: string;
        lotId?: string;
        timestamp?: string;
    }>, "many">>;
    totalQuantityOnHand: z.ZodOptional<z.ZodString>;
    defaultPrice: z.ZodOptional<z.ZodObject<{
        productPriceId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        pricingSchemeId: z.ZodOptional<z.ZodString>;
        priceType: z.ZodOptional<z.ZodEnum<["fixedPrice", "fixedMarkup"]>>;
        unitPrice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fixedMarkup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }, {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }>>;
    prices: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productPriceId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        pricingSchemeId: z.ZodOptional<z.ZodString>;
        priceType: z.ZodOptional<z.ZodEnum<["fixedPrice", "fixedMarkup"]>>;
        unitPrice: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fixedMarkup: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }, {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }>, "many">>;
    productBarcodes: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productBarcodeId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        barcode: z.ZodOptional<z.ZodString>;
        lineNum: z.ZodOptional<z.ZodNumber>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }, {
        productId?: string;
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
    }>, "many">>;
    vendorItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        vendorItemId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        vendorId: z.ZodOptional<z.ZodString>;
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
    lastVendorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    itemBoms: z.ZodOptional<z.ZodArray<z.ZodObject<{
        itemBomId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        childProductId: z.ZodOptional<z.ZodString>;
        quantity: z.ZodOptional<z.ZodObject<{
            quantity: z.ZodOptional<z.ZodString>;
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
        productId?: string;
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }, {
        productId?: string;
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }>, "many">>;
    productOperations: z.ZodOptional<z.ZodArray<z.ZodObject<{
        productOperationId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        operationTypeId: z.ZodOptional<z.ZodString>;
        lineNum: z.ZodOptional<z.ZodNumber>;
        instructions: z.ZodOptional<z.ZodString>;
        estimatedSeconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        estimatedMinutes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        perHourCost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
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
        productId?: string;
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
        reorderSettingsId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        locationId: z.ZodOptional<z.ZodString>;
        fromLocationId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        vendorId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        enableReordering: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        reorderMethod: z.ZodOptional<z.ZodEnum<["purchaseOrder", "workOrder", "stockTransfer"]>>;
        reorderPoint: z.ZodOptional<z.ZodString>;
        reorderQuantity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        defaultSublocation: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
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
        productId?: string;
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
        productTaxCodeId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        taxingSchemeId: z.ZodOptional<z.ZodString>;
        taxCodeId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        timestamp: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }, {
        productId?: string;
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }>, "many">>;
    cost: z.ZodOptional<z.ZodObject<{
        productCostId: z.ZodOptional<z.ZodString>;
        productId: z.ZodOptional<z.ZodString>;
        cost: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        productId?: string;
        cost?: string;
        productCostId?: string;
    }, {
        productId?: string;
        cost?: string;
        productCostId?: string;
    }>>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    lastModifiedDateTime: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodString]>>;
    lastModifiedById: z.ZodOptional<z.ZodString>;
    timestamp: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    length?: string;
    lastModifiedById?: string;
    productId?: string;
    timestamp?: string;
    cost?: {
        productId?: string;
        cost?: string;
        productCostId?: string;
    };
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
    trackLots?: boolean;
    trackExpiry?: boolean;
    shelfLifeDays?: number;
    expiryNotificationDays?: number;
    autoAssemble?: boolean;
    includeQuantityBuildable?: boolean;
    isManufacturable?: boolean;
    hsTariffNumber?: string;
    originCountry?: string;
    remarks?: string;
    defaultImageId?: string;
    defaultImage?: {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    };
    images?: {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    }[];
    attachments?: {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }[];
    inventoryLines?: {
        inventoryLineId?: string;
        productId?: string;
        locationId?: string;
        quantityOnHand?: string;
        sublocation?: string;
        serial?: string;
        lotId?: string;
        timestamp?: string;
    }[];
    totalQuantityOnHand?: string;
    defaultPrice?: {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    };
    prices?: {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }[];
    productBarcodes?: {
        productId?: string;
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
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
    lastVendorId?: string;
    itemBoms?: {
        productId?: string;
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }[];
    productOperations?: {
        productId?: string;
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
        productId?: string;
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
        productId?: string;
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }[];
    customFields?: Record<string, unknown>;
    lastModifiedDateTime?: string;
}, {
    length?: string;
    lastModifiedById?: string;
    productId?: string;
    timestamp?: string;
    cost?: {
        productId?: string;
        cost?: string;
        productCostId?: string;
    };
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
    trackLots?: boolean;
    trackExpiry?: boolean;
    shelfLifeDays?: number;
    expiryNotificationDays?: number;
    autoAssemble?: boolean;
    includeQuantityBuildable?: boolean;
    isManufacturable?: boolean;
    hsTariffNumber?: string;
    originCountry?: string;
    remarks?: string;
    defaultImageId?: string;
    defaultImage?: {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    };
    images?: {
        imageId?: string;
        thumbUrl?: string;
        smallUrl?: string;
        mediumUrl?: string;
        mediumUncroppedUrl?: string;
        largeUrl?: string;
        originalUrl?: string;
    }[];
    attachments?: {
        attachmentId?: string;
        fileName?: string;
        fileSize?: number;
        attachmentUrl?: string;
        lastModDttm?: string;
        lastModifiedById?: string;
    }[];
    inventoryLines?: {
        inventoryLineId?: string;
        productId?: string;
        locationId?: string;
        quantityOnHand?: string;
        sublocation?: string;
        serial?: string;
        lotId?: string;
        timestamp?: string;
    }[];
    totalQuantityOnHand?: string;
    defaultPrice?: {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    };
    prices?: {
        fixedMarkup?: string;
        productId?: string;
        timestamp?: string;
        productPriceId?: string;
        pricingSchemeId?: string;
        priceType?: "fixedPrice" | "fixedMarkup";
        unitPrice?: string;
    }[];
    productBarcodes?: {
        productId?: string;
        timestamp?: string;
        productBarcodeId?: string;
        barcode?: string;
        lineNum?: number;
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
    lastVendorId?: string;
    itemBoms?: {
        productId?: string;
        timestamp?: string;
        itemBomId?: string;
        childProductId?: string;
        quantity?: {
            quantity?: string;
            uomName?: string;
        };
    }[];
    productOperations?: {
        productId?: string;
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
        productId?: string;
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
        productId?: string;
        timestamp?: string;
        productTaxCodeId?: string;
        taxingSchemeId?: string;
        taxCodeId?: string;
    }[];
    customFields?: Record<string, unknown>;
    lastModifiedDateTime?: string;
}>;
/**
 * Available includes for ?include= query parameter
 * Usage: ?include=inventoryLines.location,defaultImage,prices.pricingScheme
 */
export declare const ProductIncludes: {
    inventoryLines: {
        description: string;
        adds: string[];
        nested: string[];
    };
    prices: {
        description: string;
        adds: string[];
        nested: string[];
    };
    defaultPrice: {
        description: string;
        adds: string[];
        nested: string[];
    };
    defaultImage: {
        description: string;
        adds: string[];
        nested: any[];
    };
    images: {
        description: string;
        adds: string[];
        nested: any[];
    };
    attachments: {
        description: string;
        adds: string[];
        nested: string[];
    };
    productBarcodes: {
        description: string;
        adds: string[];
        nested: string[];
    };
    vendorItems: {
        description: string;
        adds: string[];
        nested: string[];
    };
    itemBoms: {
        description: string;
        adds: string[];
        nested: string[];
    };
    productOperations: {
        description: string;
        adds: string[];
        nested: string[];
    };
    reorderSettings: {
        description: string;
        adds: string[];
        nested: string[];
    };
    taxCodes: {
        description: string;
        adds: string[];
        nested: string[];
    };
    category: {
        description: string;
        adds: string[];
        nested: string[];
    };
    cost: {
        description: string;
        adds: string[];
        nested: string[];
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
    lastVendor: {
        description: string;
        adds: string[];
        nested: any[];
    };
    purchasingUom: {
        description: string;
        adds: string[];
        nested: any[];
    };
    salesUom: {
        description: string;
        adds: string[];
        nested: any[];
    };
};
/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[name]=widget&filter[isActive]=true
 */
export declare const ProductFilters: {
    name: {
        type: string;
        description: string;
    };
    description: {
        type: string;
        description: string;
    };
    isActive: {
        type: string;
        description: string;
    };
    barcode: {
        type: string;
        description: string;
    };
    itemType: {
        type: string;
        values: string[];
        description: string;
    };
    categoryId: {
        type: string;
        description: string;
    };
    lastModifiedDateTime: {
        type: string;
        description: string;
        example: string;
    };
    smart: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map