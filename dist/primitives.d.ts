import { z } from 'zod';
/**
 * UUID/GUID string format
 * Used for all entity identifiers in the Inflow API
 */
export declare const uuid: z.ZodString;
/**
 * Decimal string format
 * The API returns numeric values as strings (e.g., "19.99")
 */
export declare const decimal: z.ZodString;
/**
 * Nullable decimal - common pattern in the API
 */
export declare const decimalNullable: z.ZodNullable<z.ZodString>;
/**
 * Rowversion string format
 * Used for optimistic concurrency control (e.g., "0000000000310AB6")
 */
export declare const rowversion: z.ZodString;
/**
 * DateTime string in ISO 8601 format
 */
export declare const dateTime: z.ZodUnion<[z.ZodString, z.ZodString]>;
/**
 * Int64 represented as number
 */
export declare const int64: z.ZodNumber;
/**
 * Int32 represented as number
 */
export declare const int32: z.ZodNumber;
/**
 * Item type enum - cannot be changed once set
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const ItemType: z.ZodEnum<["stockedProduct", "nonstockedProduct", "service"]>;
/**
 * Reorder method enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const ReorderMethod: z.ZodEnum<["purchaseOrder", "workOrder", "stockTransfer"]>;
/**
 * Price type enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const PriceType: z.ZodEnum<["fixedPrice", "fixedMarkup"]>;
//# sourceMappingURL=primitives.d.ts.map