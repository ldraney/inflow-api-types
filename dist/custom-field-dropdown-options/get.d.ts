import { z } from 'zod';
/**
 * CustomFieldDropdownOptions GET response schema
 * Endpoint: GET /{companyId}/custom-field-dropdown-options/{entityType}
 *
 * Returns dropdown options for a specific entity type
 */
export declare const CustomFieldDropdownOptionsGET: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    entityType: z.ZodOptional<z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>>;
    propertyName: z.ZodOptional<z.ZodString>;
    dropdownOptions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    propertyName?: string;
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
    id?: string;
    dropdownOptions?: string[];
}, {
    propertyName?: string;
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
    id?: string;
    dropdownOptions?: string[];
}>;
/**
 * The GET endpoint returns an ObjectSubset wrapper format
 * This is the actual response structure from the API
 */
export declare const CustomFieldDropdownOptionsResponseGET: z.ZodUnion<[z.ZodObject<{
    attributes: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
    relationships: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodArray<z.ZodUnknown, "many">>>>;
    meta: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    attributes?: Record<string, unknown>;
    relationships?: Record<string, unknown[]>;
    meta?: Record<string, unknown>;
}, {
    attributes?: Record<string, unknown>;
    relationships?: Record<string, unknown[]>;
    meta?: Record<string, unknown>;
}>, z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    entityType: z.ZodOptional<z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>>;
    propertyName: z.ZodOptional<z.ZodString>;
    dropdownOptions: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    propertyName?: string;
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
    id?: string;
    dropdownOptions?: string[];
}, {
    propertyName?: string;
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
    id?: string;
    dropdownOptions?: string[];
}>]>;
//# sourceMappingURL=get.d.ts.map