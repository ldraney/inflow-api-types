import { z } from 'zod';
/**
 * Custom field type enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const CustomFieldType: z.ZodEnum<["text", "dropdown", "date", "checkbox"]>;
/**
 * Entity type enum - entities that support custom fields
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export declare const CustomFieldEntityType: z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>;
/**
 * Property name - custom1 through custom10
 */
export declare const CustomFieldPropertyName: z.ZodEnum<["custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9", "custom10"]>;
/**
 * CustomFieldDefinition GET response schema
 * Endpoint: GET /{companyId}/custom-field-definitions
 */
export declare const CustomFieldDefinitionGET: z.ZodObject<{
    customFieldDefinitionId: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodString>;
    propertyName: z.ZodOptional<z.ZodString>;
    customFieldType: z.ZodOptional<z.ZodEnum<["text", "dropdown", "date", "checkbox"]>>;
    entityType: z.ZodOptional<z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: any;
}, "strip", z.ZodTypeAny, {
    isActive?: boolean;
    categoryId?: string;
    category?: any;
    customFieldDefinitionId?: string;
    label?: string;
    propertyName?: string;
    customFieldType?: "date" | "text" | "dropdown" | "checkbox";
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
}, {
    isActive?: boolean;
    categoryId?: string;
    category?: any;
    customFieldDefinitionId?: string;
    label?: string;
    propertyName?: string;
    customFieldType?: "date" | "text" | "dropdown" | "checkbox";
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
}>;
/**
 * Available filters for ?filter[x]= query parameter
 */
export declare const CustomFieldDefinitionFilters: {
    entityType: {
        type: string;
        description: string;
    };
    isActive: {
        type: string;
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map