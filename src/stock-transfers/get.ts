import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime, int64 } from '../primitives.js';

// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================

/**
 * Attachment schema - read-only, included in attachments array
 */
export const StockTransferAttachmentSchema = z.object({
  attachmentId: uuid.optional(),
  fileName: z.string().optional(),
  fileSize: int64.optional(),
  attachmentUrl: z.string().optional(),
  lastModDttm: dateTime.optional(),
  lastModifiedById: uuid.optional(),
  lastModifiedBy: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),
});

/**
 * Quantity with unit of measure schema - used in lines
 */
export const QuantityWithUomSchema = z.object({
  quantity: decimal.optional(),
  unitOfMeasure: z.string().optional(),
  unitOfMeasureId: uuid.optional(),
});

/**
 * Stock transfer line schema - represents inventory movement
 */
export const StockTransferLineSchema = z.object({
  stockTransferLineId: uuid.optional(),
  productId: uuid.optional(),
  product: z.object({
    productId: uuid.optional(),
    name: z.string().optional(),
    sku: z.string().optional(),
  }).optional(),
  description: z.string().optional(),
  quantity: QuantityWithUomSchema.optional(),
  fromSublocation: z.string().nullable().optional(),
  toSublocation: z.string().nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Stock transfer status enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const StockTransferStatus = z.enum(['open', 'inTransit', 'completed']);

// ============================================================================
// Main StockTransfer GET Schema
// ============================================================================

/**
 * StockTransfer GET response schema
 * Endpoint: GET /{companyId}/stock-transfers/{stockTransferId}
 * Endpoint: GET /{companyId}/stock-transfers (returns array)
 */
export const StockTransferGET = z.object({
  // Primary identifier
  stockTransferId: uuid,

  // Transfer number (shown on printed documents)
  transferNumber: z.string().optional(),

  // Status
  status: StockTransferStatus.optional(),
  isCancelled: z.boolean().optional(),

  // Locations
  fromLocationId: uuid.optional(),
  fromLocation: z.object({
    locationId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),
  toLocationId: uuid.optional(),
  toLocation: z.object({
    locationId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),

  // Dates
  transferDate: dateTime.optional(),
  sentDate: dateTime.nullable().optional(),
  receivedDate: dateTime.nullable().optional(),

  // Assignment
  assignedToTeamMemberId: uuid.nullable().optional(),
  assignedToTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Notes
  remarks: z.string().optional(),

  // Lines (inventory movements)
  lines: z.array(StockTransferLineSchema).optional(),

  // Attachments (read-only)
  attachments: z.array(StockTransferAttachmentSchema).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Audit fields (read-only)
  lastModifiedById: uuid.optional(),
  lastModifiedBy: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),

  // Concurrency
  timestamp: rowversion.optional(),
});

// ============================================================================
// Includes & Filters Metadata
// ============================================================================

/**
 * Available includes for ?include= query parameter
 * Usage: ?include=lines,fromLocation,toLocation
 */
export const StockTransferIncludes = {
  lines: {
    description: 'Transfer line items with product details',
    adds: ['lines'],
    nested: ['product'],
  },
  fromLocation: {
    description: 'Source location details',
    adds: ['fromLocation'],
    nested: [],
  },
  toLocation: {
    description: 'Destination location details',
    adds: ['toLocation'],
    nested: [],
  },
  assignedToTeamMember: {
    description: 'Team member assigned to this transfer',
    adds: ['assignedToTeamMember'],
    nested: [],
  },
  attachments: {
    description: 'File attachments (read-only)',
    adds: ['attachments'],
    nested: ['lastModifiedBy'],
  },
  lastModifiedBy: {
    description: 'Team member who last modified',
    adds: ['lastModifiedBy'],
    nested: [],
  },
};

/**
 * Available filters for ?filter[x]= query parameter
 * Usage: ?filter[transferNumber]=ST-000123
 */
export const StockTransferFilters = {
  transferNumber: {
    type: 'string',
    description: 'Filter by transfer number',
  },
};
