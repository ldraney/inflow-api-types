import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Quantity with unit of measure for PUT requests
 */
export const CountSheetQuantityPUT = z.object({
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
  countedQuantity: CountSheetQuantityPUT.optional(),
  sublocation: z.string().nullable().optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main CountSheet PUT Schema
// ============================================================================

/**
 * CountSheet PUT request schema
 * Endpoint: PUT /{companyId}/stock-counts/{stockCountId}/count-sheet
 *
 * This is an upsert operation:
 * - Generate a new GUID for countSheetId when inserting
 * - Use an existing countSheetId when updating
 *
 * Note: Count sheets are inserted/updated via the parent stock count endpoint
 *
 * Required fields:
 * - countSheetId (generate GUID for insert)
 */
export const CountSheetPUT = z.object({
  // Primary identifier - REQUIRED
  countSheetId: uuid,

  // Sheet number within the stock count
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

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for CountSheet
 *
 * Use these to understand which fields can be modified and when.
 */
export const CountSheetConstraints = {
  /**
   * Read-only fields - calculated or system-managed, cannot be set via API
   */
  readOnly: [
    'lastModifiedById',
    'lastModifiedBy',
    'status',
    'startedDate',
    'completedDate',
    'stockCountId',
    'stockCount',
  ],

  /**
   * Immutable fields - can only be set on creation, cannot be changed afterwards
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['countSheetId'],
    update: ['countSheetId'],
  },

  /**
   * Nested arrays that require their own IDs
   * When inserting nested items, generate a new GUID for the item ID
   * When updating nested items, use the existing item ID
   */
  nestedWithIds: [
    { field: 'lines', idField: 'countSheetLineId' },
  ],

  /**
   * Default values applied when fields are omitted on create
   */
  defaults: {},
};

/**
 * Helper to create a new count sheet payload with generated IDs
 */
export function createCountSheetPayload(data, generateUuid) {
  return {
    countSheetId: generateUuid(),
    ...data,
    lines: data.lines
      ? data.lines.map(line => ({
          countSheetLineId: generateUuid(),
          ...line,
        }))
      : undefined,
  };
}

/**
 * Helper to create count sheet lines with generated IDs
 */
export function createCountSheetLines(lines, generateUuid) {
  return lines.map(line => ({
    countSheetLineId: generateUuid(),
    ...line,
  }));
}
