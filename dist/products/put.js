import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, int32, ItemType, ReorderMethod, PriceType } from '../primitives.js';
// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================
/**
 * Product price for PUT - requires productPriceId for updates
 */
export const ProductPricePUT = z.object({
    productPriceId: uuid, // Required - generate new GUID for insert
    pricingSchemeId: uuid,
    priceType: PriceType.optional(),
    unitPrice: decimalNullable.optional(), // For FixedPrice
    fixedMarkup: decimalNullable.optional(), // For FixedMarkup
    timestamp: rowversion.optional(),
});
/**
 * Product barcode for PUT - requires productBarcodeId for updates
 */
export const ProductBarcodePUT = z.object({
    productBarcodeId: uuid, // Required - generate new GUID for insert
    barcode: z.string(),
    lineNum: int32.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Vendor item for PUT - requires vendorItemId for updates
 */
export const VendorItemPUT = z.object({
    vendorItemId: uuid, // Required - generate new GUID for insert
    vendorId: uuid,
    vendorItemCode: z.string().optional(),
    cost: decimalNullable.optional(),
    leadTimeDays: int32.nullable().optional(),
    lineNum: int32.nullable().optional(),
    timestamp: rowversion.optional(),
});
/**
 * Item BOM for PUT - requires itemBomId for updates
 */
export const ItemBomPUT = z.object({
    itemBomId: uuid, // Required - generate new GUID for insert
    childProductId: uuid,
    quantity: z.object({
        quantity: decimal,
        uomName: z.string().optional(),
    }).optional(),
    timestamp: rowversion.optional(),
});
/**
 * Product operation for PUT - requires productOperationId for updates
 */
export const ProductOperationPUT = z.object({
    productOperationId: uuid, // Required - generate new GUID for insert
    operationTypeId: uuid,
    lineNum: int32.optional(),
    instructions: z.string().optional(),
    estimatedSeconds: decimalNullable.optional(),
    estimatedMinutes: decimalNullable.optional(),
    cost: decimalNullable.optional(),
    perHourCost: decimalNullable.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Reorder settings for PUT - requires reorderSettingsId for updates
 */
export const ReorderSettingsPUT = z.object({
    reorderSettingsId: uuid, // Required - generate new GUID for insert
    locationId: uuid,
    fromLocationId: uuid.nullable().optional(),
    vendorId: uuid.nullable().optional(),
    enableReordering: z.boolean().nullable().optional(),
    reorderMethod: ReorderMethod.optional(),
    reorderPoint: decimal.optional(),
    reorderQuantity: decimalNullable.optional(),
    defaultSublocation: z.string().optional(),
    timestamp: rowversion.optional(),
});
/**
 * Product tax code for PUT - requires productTaxCodeId for updates
 */
export const ProductTaxCodePUT = z.object({
    productTaxCodeId: uuid, // Required - generate new GUID for insert
    taxingSchemeId: uuid,
    taxCodeId: uuid.nullable().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main Product PUT Schema
// ============================================================================
/**
 * Product PUT request schema
 * Endpoint: PUT /{companyId}/products
 *
 * This is an upsert operation:
 * - Generate a new GUID for productId when inserting
 * - Use an existing productId when updating
 */
export const ProductPUT = z.object({
    // Primary identifier - REQUIRED
    productId: uuid,
    // Basic info
    name: z.string().optional(),
    description: z.string().optional(),
    sku: z.string().optional(),
    itemType: ItemType.optional(), // IMMUTABLE - cannot change after creation
    isActive: z.boolean().optional(),
    // Categorization
    categoryId: uuid.optional(),
    // Dimensions
    weight: decimalNullable.optional(),
    length: decimalNullable.optional(),
    width: decimalNullable.optional(),
    height: decimalNullable.optional(),
    // Unit of measure
    standardUomName: z.string().optional(),
    // Serial tracking - IMMUTABLE
    trackSerials: z.boolean().optional(), // Cannot change after creation
    // Manufacturing
    autoAssemble: z.boolean().optional(),
    includeQuantityBuildable: z.boolean().optional(),
    // Customs / shipping
    hsTariffNumber: z.string().optional(),
    originCountry: z.string().optional(),
    // Notes
    remarks: z.string().optional(),
    // Image
    defaultImageId: uuid.nullable().optional(),
    // Nested arrays - each item requires its own ID
    prices: z.array(ProductPricePUT).optional(),
    productBarcodes: z.array(ProductBarcodePUT).optional(),
    vendorItems: z.array(VendorItemPUT).optional(),
    itemBoms: z.array(ItemBomPUT).optional(),
    productOperations: z.array(ProductOperationPUT).optional(),
    reorderSettings: z.array(ReorderSettingsPUT).optional(),
    taxCodes: z.array(ProductTaxCodePUT).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
    // Concurrency - include to protect against concurrent modifications
    timestamp: rowversion.optional(),
});
// ============================================================================
// Field Constraints
// ============================================================================
/**
 * Field constraints for Product
 *
 * Use these to understand which fields can be modified and when.
 */
export const ProductConstraints = {
    /**
     * Read-only fields - calculated or system-managed, cannot be set via API
     */
    readOnly: [
        'lastModifiedDateTime',
        'lastModifiedById',
        'lastModifiedBy',
        'totalQuantityOnHand',
        'isManufacturable',
        'cost',
        'attachments',
        'inventoryLines',
        'defaultPrice',
        'lastVendor',
        'purchasingUom',
        'salesUom',
        'images', // Managed via separate image upload API
    ],
    /**
     * Immutable fields - can only be set on creation, cannot be changed afterwards
     */
    immutable: [
        'itemType',
        'trackSerials',
    ],
    /**
     * Required fields for create vs update operations
     */
    required: {
        create: ['productId', 'name', 'itemType'],
        update: ['productId'],
    },
    /**
     * Nested arrays that require their own IDs
     * When inserting nested items, generate a new GUID for the item ID
     * When updating nested items, use the existing item ID
     */
    nestedWithIds: [
        { field: 'prices', idField: 'productPriceId' },
        { field: 'productBarcodes', idField: 'productBarcodeId' },
        { field: 'vendorItems', idField: 'vendorItemId' },
        { field: 'itemBoms', idField: 'itemBomId' },
        { field: 'productOperations', idField: 'productOperationId' },
        { field: 'reorderSettings', idField: 'reorderSettingsId' },
        { field: 'taxCodes', idField: 'productTaxCodeId' },
    ],
    /**
     * Default values applied when fields are omitted on create
     */
    defaults: {
        itemType: 'StockedProduct',
        isActive: true,
        trackSerials: false,
        autoAssemble: false,
        includeQuantityBuildable: false,
    },
};
/**
 * Helper to create a new product payload with generated IDs
 */
export function createProductPayload(data, generateUuid) {
    return {
        productId: generateUuid(),
        itemType: 'StockedProduct',
        ...data,
    };
}
/**
 * Helper to prepare nested array items with generated IDs
 */
export function createNestedItems(items, idField, generateUuid) {
    return items.map(item => ({
        [idField]: generateUuid(),
        ...item,
    }));
}
