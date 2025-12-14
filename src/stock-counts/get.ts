import { z } from 'zod';
import { uuid, decimal, rowversion, dateTime, int64, int32 } from '../primitives';

// ============================================================================
// Nested Schemas (for included relationships)
// ============================================================================

/**
 * Attachment schema - read-only, included in attachments array
 */
export const StockCountAttachmentSchema = z.object({
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
 * Quantity with unit of measure schema - used in count sheet lines
 */
export const CountQuantitySchema = z.object({
  quantity: decimal.optional(),
  unitOfMeasure: z.string().optional(),
  unitOfMeasureId: uuid.optional(),
});

/**
 * Count sheet line schema - represents a single item being counted
 */
export const CountSheetLineSchema = z.object({
  countSheetLineId: uuid.optional(),
  productId: uuid.optional(),
  product: z.object({
    productId: uuid.optional(),
    name: z.string().optional(),
    sku: z.string().optional(),
  }).optional(),
  description: z.string().optional(),
  countedQuantity: CountQuantitySchema.optional(),
  snapshotQuantity: CountQuantitySchema.optional(),
  sublocation: z.string().nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Count sheet status enum
 * Note: API may return camelCase values despite swagger showing PascalCase
 */
export const CountSheetStatus = z.enum(['Open', 'InProgress', 'Completed', 'open', 'inProgress', 'completed']);

/**
 * Count sheet schema (embedded in StockCount.sheets array)
 */
export const StockCountSheetSchema = z.object({
  countSheetId: uuid.optional(),
  sheetNumber: int32.optional(),
  status: CountSheetStatus.optional(),

  // Assignment
  assignedToTeamMemberId: uuid.nullable().optional(),
  assignedToTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),

  // Dates
  startedDate: dateTime.nullable().optional(),
  completedDate: dateTime.nullable().optional(),

  // Status flags
  isCancelled: z.boolean().optional(),
  isCompleted: z.boolean().optional(),

  // Lines
  lines: z.array(CountSheetLineSchema).optional(),

  // Notes
  remarks: z.string().optional(),

  // Parent reference
  stockCountId: uuid.optional(),
  stockCount: z.lazy(() => StockCountGET).optional(),

  // Audit fields (read-only)
  lastModifiedById: uuid.optional(),
  lastModifiedBy: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),

  // Concurrency
  timestamp: rowversion.optional(),
});

/**
 * Stock count status enum
 * Note: API may return camelCase values despite swagger showing PascalCase
 */
export const StockCountStatus = z.enum(['Open', 'InProgress', 'InReview', 'Completed', 'open', 'inProgress', 'inReview', 'completed']);

// ============================================================================
// Main StockCount GET Schema
// ============================================================================

/**
 * StockCount GET response schema
 * Endpoint: GET /{companyId}/stock-counts/{stockCountId}
 * Endpoint: GET /{companyId}/stock-counts (returns array)
 */
export const StockCountGET = z.object({
  // Primary identifier
  stockCountId: uuid,

  // Stock count number (shown on printed documents)
  stockCountNumber: z.string().optional(),

  // Status
  status: StockCountStatus.optional(),
  isPrepared: z.boolean().optional(),
  isStarted: z.boolean().optional(),
  isReviewed: z.boolean().optional(),
  isCompleted: z.boolean().optional(),
  isCancelled: z.boolean().optional(),

  // Location
  locationId: uuid.optional(),
  location: z.object({
    locationId: uuid.optional(),
    name: z.string().optional(),
  }).optional(),

  // Assignment
  assignedToTeamMemberId: uuid.nullable().optional(),
  assignedToTeamMember: z.object({
    teamMemberId: uuid.optional(),
    name: z.string().optional(),
  }).nullable().optional(),

  // Dates
  startedDate: dateTime.nullable().optional(),
  completedDate: dateTime.nullable().optional(),

  // Notes
  remarks: z.string().optional(),

  // Count sheets
  sheets: z.array(StockCountSheetSchema).optional(),

  // Attachments (read-only)
  attachments: z.array(StockCountAttachmentSchema).optional(),

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
 * Usage: ?include=sheets,location
 */
export const StockCountIncludes = {
  sheets: {
    description: 'Count sheets that are part of this stock count',
    adds: ['sheets'],
    nested: ['lines', 'assignedToTeamMember', 'lastModifiedBy'],
  },
  location: {
    description: 'Location where the count is being performed',
    adds: ['location'],
    nested: [],
  },
  assignedToTeamMember: {
    description: 'Team member assigned to the stock count',
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
 * Usage: ?filter[stockCountNumber]=SC-000123
 */
export const StockCountFilters = {
  stockCountNumber: {
    type: 'string',
    description: 'Filter by stock count number',
  },
};
