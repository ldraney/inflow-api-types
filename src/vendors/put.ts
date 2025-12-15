import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, int32 } from '../primitives.js';
import { AddressType } from './get.js';

// ============================================================================
// Nested Schemas for PUT requests
// ============================================================================

/**
 * Address for PUT requests
 */
export const AddressPUT = z.object({
  address1: z.string().optional(),
  address2: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  postalCode: z.string().optional(),
  country: z.string().optional(),
  remarks: z.string().optional(),
  addressType: AddressType,
});

/**
 * Vendor address for PUT - requires vendorAddressId for updates
 */
export const VendorAddressPUT = z.object({
  vendorAddressId: uuid, // Required - generate new GUID for insert
  name: z.string().optional(),
  address: AddressPUT.optional(),
  timestamp: rowversion.optional(),
});

/**
 * Vendor item for PUT - requires vendorItemId for updates
 */
export const VendorItemPUT = z.object({
  vendorItemId: uuid, // Required - generate new GUID for insert
  productId: uuid,
  vendorItemCode: z.string().optional(),
  cost: decimalNullable.optional(),
  leadTimeDays: int32.nullable().optional(),
  lineNum: int32.nullable().optional(),
  timestamp: rowversion.optional(),
});

// ============================================================================
// Main Vendor PUT Schema
// ============================================================================

/**
 * Vendor PUT request schema
 * Endpoint: PUT /{companyId}/vendors
 *
 * This is an upsert operation:
 * - Generate a new GUID for vendorId when inserting
 * - Use an existing vendorId when updating
 */
export const VendorPUT = z.object({
  // Primary identifier - REQUIRED
  vendorId: uuid,

  // Basic info
  name: z.string().optional(),
  contactName: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  fax: z.string().optional(),
  website: z.string().optional(),
  remarks: z.string().optional(),

  // Status
  isActive: z.boolean().optional(),

  // Pricing/tax settings
  isTaxInclusivePricing: z.boolean().optional(),
  discount: decimal.optional(),

  // Lead time for reordering
  leadTimeDays: int32.nullable().optional(),

  // Defaults for new orders
  defaultCarrier: z.string().optional(),
  defaultPaymentMethod: z.string().optional(),

  // References
  currencyId: uuid.optional(),
  defaultPaymentTermsId: uuid.nullable().optional(),
  defaultAddressId: uuid.nullable().optional(),
  taxingSchemeId: uuid.nullable().optional(),

  // Nested arrays - each item requires its own ID
  addresses: z.array(VendorAddressPUT).optional(),
  vendorItems: z.array(VendorItemPUT).optional(),

  // Custom fields
  customFields: z.record(z.unknown()).optional(),

  // Concurrency - include to protect against concurrent modifications
  timestamp: rowversion.optional(),
});

// ============================================================================
// Field Constraints
// ============================================================================

/**
 * Field constraints for Vendor
 *
 * Use these to understand which fields can be modified and when.
 */
export const VendorConstraints = {
  /**
   * Read-only fields - calculated or system-managed, cannot be set via API
   */
  readOnly: [
    'lastModifiedDttm',
    'lastModifiedById',
    'lastModifiedBy',
    'attachments',
    'balances',
    'credits',
    'dues',
  ],

  /**
   * Immutable fields - can only be set on creation, cannot be changed afterwards
   */
  immutable: [],

  /**
   * Required fields for create vs update operations
   */
  required: {
    create: ['vendorId', 'name'],
    update: ['vendorId'],
  },

  /**
   * Nested arrays that require their own IDs
   * When inserting nested items, generate a new GUID for the item ID
   * When updating nested items, use the existing item ID
   */
  nestedWithIds: [
    { field: 'addresses', idField: 'vendorAddressId' },
    { field: 'vendorItems', idField: 'vendorItemId' },
  ],

  /**
   * Default values applied when fields are omitted on create
   */
  defaults: {
    isActive: true,
    isTaxInclusivePricing: false,
  },
};

/**
 * Helper to create a new vendor payload with generated IDs
 */
export function createVendorPayload(data, generateUuid) {
  return {
    vendorId: generateUuid(),
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
