import { z } from 'zod';

/**
 * UUID/GUID string format
 * Used for all entity identifiers in the Inflow API
 */
export const uuid = z.string().uuid();

/**
 * Decimal string format
 * The API returns numeric values as strings (e.g., "19.99")
 */
export const decimal = z.string().regex(/^-?\d+(\.\d+)?$/, 'Invalid decimal format');

/**
 * Nullable decimal - common pattern in the API
 */
export const decimalNullable = decimal.nullable();

/**
 * Rowversion string format
 * Used for optimistic concurrency control (e.g., "0000000000310AB6")
 */
export const rowversion = z.string().regex(/^[0-9A-Fa-f]{16}$/, 'Invalid rowversion format');

/**
 * DateTime string in ISO 8601 format
 */
export const dateTime = z.string().datetime({ offset: true }).or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/));

/**
 * Int64 represented as number
 */
export const int64 = z.number().int();

/**
 * Int32 represented as number
 */
export const int32 = z.number().int();

/**
 * Item type enum - cannot be changed once set
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const ItemType = z.enum(['stockedProduct', 'nonstockedProduct', 'service']);

/**
 * Reorder method enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const ReorderMethod = z.enum(['purchaseOrder', 'workOrder', 'stockTransfer']);

/**
 * Price type enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const PriceType = z.enum(['fixedPrice', 'fixedMarkup']);
