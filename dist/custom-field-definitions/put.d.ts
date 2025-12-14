import { z } from 'zod';
/**
 * CustomFieldDefinition PUT request schema
 * Endpoint: PUT /{companyId}/custom-field-definitions
 *
 * Note: customFieldDefinitionId is ignored on insert
 */
export declare const CustomFieldDefinitionPUT: z.ZodObject<{
    customFieldDefinitionId: z.ZodOptional<z.ZodString>;
    label: z.ZodString;
    propertyName: z.ZodEnum<["custom1", "custom2", "custom3", "custom4", "custom5", "custom6", "custom7", "custom8", "custom9", "custom10"]>;
    customFieldType: z.ZodEnum<["text", "dropdown", "date", "checkbox"]>;
    entityType: z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    categoryId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    isActive?: boolean;
    categoryId?: string;
    customFieldDefinitionId?: string;
    label?: string;
    propertyName?: "custom1" | "custom2" | "custom3" | "custom4" | "custom5" | "custom6" | "custom7" | "custom8" | "custom9" | "custom10";
    customFieldType?: "date" | "text" | "dropdown" | "checkbox";
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
}, {
    isActive?: boolean;
    categoryId?: string;
    customFieldDefinitionId?: string;
    label?: string;
    propertyName?: "custom1" | "custom2" | "custom3" | "custom4" | "custom5" | "custom6" | "custom7" | "custom8" | "custom9" | "custom10";
    customFieldType?: "date" | "text" | "dropdown" | "checkbox";
    entityType?: "purchaseOrder" | "stockTransfer" | "product" | "vendor" | "customer" | "salesOrder" | "countSheet" | "stockAdjustment" | "stockCount" | "manufacturingOrder";
}>;
/**
 * Field constraints for CustomFieldDefinition
 */
export declare const CustomFieldDefinitionConstraints: {
    readOnly: any[];
    immutable: string[];
    required: {
        create: string[];
        update: string[];
    };
};
//# sourceMappingURL=put.d.ts.map