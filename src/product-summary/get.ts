import { z } from 'zod';
import { uuid, decimal, decimalNullable } from '../primitives';

// ============================================================================
// ProductSummary - Aggregated inventory data for a product
// ============================================================================

/**
 * Product Summary GET response schema
 * Endpoint: GET /{companyId}/products/{productId}/summary
 *           GET /{companyId}/products/{productId}/summary?locationId={locationId}
 *
 * Endpoint: POST /{companyId}/products/summary (bulk fetch, returns array)
 *           Request body: array of ProductSummaryKey (up to 100)
 *
 * Key summary information about a product's inventory, optionally at a specific location.
 *
 * Note: swagger.json says quantities are type: number, but API returns decimal strings like "0.00000"
 */
export const ProductSummaryGET = z.object({
  // Identifiers
  productId: uuid,
  locationId: uuid.nullable().optional(), // null = summary across all locations

  // Image
  imageSmallUrl: z.string().nullable().optional(),

  // On Hand - what's physically on your shelves
  quantityOnHand: decimalNullable.optional(),

  // On Order - ordered but not yet received
  quantityOnOrder: decimalNullable.optional(),
  quantityOnPurchaseOrder: decimalNullable.optional(),  // Breakdown: from vendors
  quantityOnWorkOrder: decimalNullable.optional(),       // Breakdown: from manufacturing
  quantityOnTransferOrder: decimalNullable.optional(),   // Breakdown: from transfers (location-specific)

  // Reserved - set aside for use
  quantityReserved: decimal.optional(),
  quantityReservedForSales: decimal.optional(),             // Breakdown: for sales orders
  quantityReservedForManufacturing: decimal.optional(),     // Breakdown: for raw materials
  quantityReservedForTransfers: decimal.optional(),         // Breakdown: for transfers (location-specific)
  quantityReservedForBuilds: decimal.optional(),            // Breakdown: for negative anticipated inventory

  // Available - what's left after fulfilling all open orders
  quantityAvailable: decimal.optional(),
  rawQuantityAvailable: decimal.optional(), // Excludes buildable and reserved for builds

  // In Transit / Picked
  quantityPicked: decimalNullable.optional(),    // Picked for sales/work orders, awaiting shipment
  quantityInTransit: decimalNullable.optional(), // Sent via transfer, not yet received

  // Buildable - for manufactured products
  quantityBuildable: decimalNullable.optional(), // How many can be built from raw materials (null = infinite)
});

/**
 * Product Summary Key - used for bulk fetch via POST
 * Request body for: POST /{companyId}/products/summary
 *
 * Up to 100 product/location combinations can be fetched at once.
 */
export const ProductSummaryKey = z.object({
  productId: uuid,
  locationId: uuid.nullable().optional(), // null = summary across all locations
});

// ============================================================================
// Query Parameters
// ============================================================================

/**
 * Query parameters for single product summary
 * GET /{companyId}/products/{productId}/summary?locationId={uuid}
 */
export const ProductSummaryQueryParams = {
  locationId: {
    type: 'uuid',
    required: false,
    description: 'Optional location ID to get inventory summary for a specific location',
  },
};

// No includes or filters - this is a simple aggregation endpoint
