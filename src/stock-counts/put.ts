import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Quantity with unit of measure for PUT requests
 */
export const CountQuantityPUT = z.object({
  quantity: decimal,
  unitOfMeasure: z.string().optional(),
  unitOfMeasureId: uuid.optional(),
});

/**
 * Count sheet line for PUT - requires countSheetLineId for updates
 */
export const CountSheetLinePUT = z.object({
  countSheetLineId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  description: z.string().optional(),
  countedQuantity: CountQuantityPUT.optional(),
  sublocation: z.string().nullable().optional(),
  timestamp: rowversion.optional(),
});

/**
 * Count sheet for PUT - embedded in StockCount
 */
export const StockCountSheetPUT = z.object({
  countSheetId: uuid, // Required - generate new GUID for insert
  sheetNumber: z.number().int().optional(),

  // Assignment
  assignedToTeamMemberId: uuid.nullable().optional(),

  // Status flags
  isCancelled: z.boolean().optional(),
  isCompleted: z.boolean().optional(),

  // Lines
  lines: z.array(CountSheetLinePUT).optional(),

  // Notes
  remarks: z.string().optional(),

  // Concurrency
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main StockCount PUT Schema
// ============================================================================

/**
 * StockCount PUT request schema
 * Endpoint: PUT /{companyId}/stock-counts
 *
 * This is an upsert operation:
 * - Generate a new GUID for stockCountId when inserting
 * - Use an existing stockCountId when updating
 *
 * Required fields:
 * - stockCountId (generate GUID for insert)
 */
export const StockCountPUT = z.object({
  // Primary identifier - REQUIRED
  stockCountId: uuid,

  // Stock count number (auto-generated if not provided)
  stockCountNumber: z.string().optional(),

  // Location - usually required for creation
  locationId: uuid.optional(),

  // Assignment
  assignedToTeamMemberId: uuid.nullable().optional(),

  // Status flags
  isPrepared: z.boolean().optional(),
  isStarted: z.boolean().optional(),
  isReviewed: z.boolean().optional(),
  isCompleted: z.boolean().optional(),
  isCancelled: z.boolean().optional(),

  // Notes
  remarks: z.string().optional(),

  // Count sheets
  sheets: z.array(StockCountSheetPUT).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for StockCount
 *
 * Use these to understand which fields can be modified and when.
 */
export const StockCountConstraints = {
  /**
   * Read-only fields - calculated or system-managed, cannot be set via API
   */
  readOnly: [
    'lastModifiedById',
    'lastModifiedBy',
    'attachments',
    'status',
    'startedDate',
    'completedDate',
  ],

  /**
   * Immutable fields - can only be set on creation, cannot be changed afterwards
   */
  immutable: [
    'locationId', // Location cannot change after creation
  ],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['stockCountId', 'locationId'],
    update: ['stockCountId'],
  },

  /**
   * Nested arrays that require their own IDs
   * When inserting nested items, generate a new GUID for the item ID
   * When updating nested items, use the existing item ID
   */
  nestedWithIds: [
    { field: 'sheets', idField: 'countSheetId' },
    { field: 'sheets.lines', idField: 'countSheetLineId' },
  ],

  /**
   * Default values applied when fields are omitted on create
   */
  defaults: {},
};

/**
 * Helper to create a new stock count payload with generated IDs
 */
export function createStockCountPayload(data, generateUuid) {
  return {
    stockCountId: generateUuid(),
    ...data,
  };
}

/**
 * Helper to create count sheets with generated IDs
 */
export function createCountSheets(sheets, generateUuid) {
  return sheets.map(sheet => ({
    countSheetId: generateUuid(),
    ...sheet,
    lines: sheet.lines
      ? sheet.lines.map(line => ({
          countSheetLineId: generateUuid(),
          ...line,
        }))
      : undefined,
  }));
}
