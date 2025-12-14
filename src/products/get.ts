import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime, int32, int64, ItemType, ReorderMethod, PriceType } from '../primitives';

// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================

/**
 * Image schema - included via ?include=images or ?include=defaultImage
 * Note: URL fields can be null for some image formats
 */
export const ImageSchema = z.object({
  imageId: uuid.optional(),
  thumbUrl: z.string().nullable().optional(),
  smallUrl: z.string().nullable().optional(),
  mediumUrl: z.string().nullable().optional(),
  mediumUncroppedUrl: z.string().nullable().optional(),
  largeUrl: z.string().nullable().optional(),
  originalUrl: z.string().nullable().optional(),
});

/**
 * Attachment schema - read-only, included via ?include=attachments
 */
export const AttachmentSchema = z.object({
  attachmentId: uuid.optional(),
  fileName: z.string().optional(),
  fileSize: int64.optional(),
  attachmentUrl: z.string().optional(),
  lastModDttm: dateTime.optional(),
  lastModifiedById: uuid.optional(),
});

/**
 * Inventory line schema - included via ?include=inventoryLines
 */
export const InventoryLineSchema = z.object({
  inventoryLineId: z.string().optional(),
  productId: uuid.optional(),
  locationId: uuid.optional(),
  quantityOnHand: decimal.optional(),
  sublocation: z.string().optional(),
  serial: z.string().optional(),
  lotId: uuid.nullable().optional(), // Not in swagger but returned by API
  timestamp: rowversion.optional(),
});

/**
 * Product price schema - included via ?include=prices
 */
export const ProductPriceSchema = z.object({
  productPriceId: uuid.optional(),
  productId: uuid.optional(),
  pricingSchemeId: uuid.optional(),
  priceType: PriceType.optional(),
  unitPrice: decimalNullable.optional(),
  fixedMarkup: decimalNullable.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Product barcode schema - included via ?include=productBarcodes
 */
export const ProductBarcodeSchema = z.object({
  productBarcodeId: uuid.optional(),
  productId: uuid.optional(),
  barcode: z.string().optional(),
  lineNum: int32.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Vendor item schema - included via ?include=vendorItems
 */
export const VendorItemSchema = z.object({
  vendorItemId: uuid.optional(),
  productId: uuid.optional(),
  vendorId: uuid.optional(),
  vendorItemCode: z.string().optional(),
  cost: decimalNullable.optional(),
  leadTimeDays: int32.nullable().optional(),
  lineNum: int32.nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Item BOM (Bill of Materials) schema - included via ?include=itemBoms
 */
export const ItemBomSchema = z.object({
  itemBomId: uuid.optional(),
  productId: uuid.optional(),
  childProductId: uuid.optional(),
  quantity: z.object({
    quantity: decimal.optional(),
    uomName: z.string().optional(),
  }).optional(),
  timestamp: rowversion.optional(),
});

/**
 * Product operation schema - included via ?include=productOperations
 */
export const ProductOperationSchema = z.object({
  productOperationId: uuid.optional(),
  productId: uuid.optional(),
  operationTypeId: uuid.optional(),
  lineNum: int32.optional(),
  instructions: z.string().optional(),
  estimatedSeconds: decimalNullable.optional(),
  estimatedMinutes: decimalNullable.optional(),
  cost: decimalNullable.optional(),
  perHourCost: decimalNullable.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Reorder settings schema - included via ?include=reorderSettings
 */
export const ReorderSettingsSchema = z.object({
  reorderSettingsId: uuid.optional(),
  productId: uuid.optional(),
  locationId: uuid.optional(),
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
 * Product tax code schema - included via ?include=taxCodes
 */
export const ProductTaxCodeSchema = z.object({
  productTaxCodeId: uuid.optional(),
  productId: uuid.optional(),
  taxingSchemeId: uuid.optional(),
  taxCodeId: uuid.nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Product cost schema - read-only
 */
export const ProductCostSchema = z.object({
  productCostId: z.string().optional(),
  productId: uuid.optional(),
  cost: decimalNullable.optional(),
});

// ============================================================================
// Main Product GET Schema
// ============================================================================

/**
 * Product GET response schema
 * Endpoint: GET /{companyId}/products/{productId}
 * Endpoint: GET /{companyId}/products (returns array)
 */
export const ProductGET = z.object({
  // Primary identifier
  productId: uuid,

  // Basic info
  name: z.string().optional(),
  description: z.string().optional(),
  sku: z.string().optional(),
  itemType: ItemType.optional(),
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

  // Serial/Lot/Expiry tracking
  trackSerials: z.boolean().optional(),
  trackLots: z.boolean().optional(),        // Not in swagger but returned by API
  trackExpiry: z.boolean().optional(),      // Not in swagger but returned by API
  shelfLifeDays: int32.nullable().optional(),         // Not in swagger
  expiryNotificationDays: int32.nullable().optional(), // Not in swagger

  // Manufacturing
  autoAssemble: z.boolean().optional(),
  includeQuantityBuildable: z.boolean().optional(),
  isManufacturable: z.boolean().optional(), // Read-only, calculated

  // Customs / shipping
  hsTariffNumber: z.string().optional(),
  originCountry: z.string().optional(),

  // Notes
  remarks: z.string().optional(),

  // Images
  defaultImageId: uuid.nullable().optional(),
  defaultImage: ImageSchema.nullable().optional(),
  images: z.array(ImageSchema).optional(),

  // Attachments (read-only)
  attachments: z.array(AttachmentSchema).optional(),

  // Inventory
  inventoryLines: z.array(InventoryLineSchema).optional(),
  totalQuantityOnHand: decimal.optional(), // Requires ?include=inventoryLines

  // Pricing
  defaultPrice: ProductPriceSchema.optional(),
  prices: z.array(ProductPriceSchema).optional(),

  // Barcodes
  productBarcodes: z.array(ProductBarcodeSchema).optional(),

  // Vendors
  vendorItems: z.array(VendorItemSchema).optional(),
  lastVendorId: uuid.nullable().optional(),

  // Bill of Materials
  itemBoms: z.array(ItemBomSchema).optional(),

  // Operations (manufacturing)
  productOperations: z.array(ProductOperationSchema).optional(),

  // Reorder settings
  reorderSettings: z.array(ReorderSettingsSchema).optional(),

  // Tax codes
  taxCodes: z.array(ProductTaxCodeSchema).optional(),

  // Cost (read-only)
  cost: ProductCostSchema.optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Audit fields (read-only)
  lastModifiedDateTime: dateTime.optional(),
  lastModifiedById: uuid.optional(),

  // Concurrency
  timestamp: rowversion.optional(),
});

// ============================================================================
// Includes & Filters Metadata
// ============================================================================

/**
 * Available includes for ?include= query parameter
 * Usage: ?include=inventoryLines.location,defaultImage,prices.pricingScheme
 */
export const ProductIncludes = {
  inventoryLines: {
    description: 'Inventory quantities per location/sublocation',
    adds: ['inventoryLines', 'totalQuantityOnHand'],
    nested: ['location', 'product'],
  },
  prices: {
    description: 'Product prices per pricing scheme',
    adds: ['prices'],
    nested: ['pricingScheme', 'product'],
  },
  defaultPrice: {
    description: 'Default price for this product',
    adds: ['defaultPrice'],
    nested: ['pricingScheme'],
  },
  defaultImage: {
    description: 'Default product image',
    adds: ['defaultImage'],
    nested: [],
  },
  images: {
    description: 'All product images',
    adds: ['images'],
    nested: [],
  },
  attachments: {
    description: 'File attachments (read-only)',
    adds: ['attachments'],
    nested: ['lastModifiedBy'],
  },
  productBarcodes: {
    description: 'Product barcodes',
    adds: ['productBarcodes'],
    nested: ['product'],
  },
  vendorItems: {
    description: 'Vendor item codes and costs',
    adds: ['vendorItems'],
    nested: ['vendor', 'product'],
  },
  itemBoms: {
    description: 'Bill of materials (raw materials)',
    adds: ['itemBoms'],
    nested: ['childProduct', 'product'],
  },
  productOperations: {
    description: 'Manufacturing operations',
    adds: ['productOperations'],
    nested: ['operationType', 'product'],
  },
  reorderSettings: {
    description: 'Reorder settings per location',
    adds: ['reorderSettings'],
    nested: ['location', 'fromLocation', 'vendor', 'product'],
  },
  taxCodes: {
    description: 'Tax codes per taxing scheme',
    adds: ['taxCodes'],
    nested: ['taxCode', 'taxingScheme', 'product'],
  },
  category: {
    description: 'Product category',
    adds: ['category'],
    nested: ['parentCategory'],
  },
  cost: {
    description: 'Product cost (read-only)',
    adds: ['cost'],
    nested: ['product'],
  },
  customFields: {
    description: 'Custom field values',
    adds: ['customFields'],
    nested: [],
  },
  lastModifiedBy: {
    description: 'Team member who last modified',
    adds: ['lastModifiedBy'],
    nested: [],
  },
  lastVendor: {
    description: 'Last vendor used for this product',
    adds: ['lastVendor'],
    nested: [],
  },
  purchasingUom: {
    description: 'Purchasing unit of measure',
    adds: ['purchasingUom'],
    nested: [],
  },
  salesUom: {
    description: 'Sales unit of measure',
    adds: ['salesUom'],
    nested: [],
  },
};

/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[name]=widget&filter[isActive]=true
 */
export const ProductFilters = {
  name: {
    type: 'string',
    description: 'Filter by product name',
  },
  description: {
    type: 'string',
    description: 'Filter by product description',
  },
  isActive: {
    type: 'boolean',
    description: 'Filter by active status (true/false)',
  },
  barcode: {
    type: 'string',
    description: 'Filter by barcode value',
  },
  itemType: {
    type: 'enum',
    values: ['StockedProduct', 'NonstockedProduct', 'Service'],
    description: 'Filter by item type',
  },
  categoryId: {
    type: 'uuid',
    description: 'Filter by category ID',
  },
  lastModifiedDateTime: {
    type: 'dateRange',
    description: 'Filter by last modified date range',
    example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
  },
  smart: {
    type: 'string',
    description: 'Full-text search on name, description, category, barcode, and SKU',
  },
};
