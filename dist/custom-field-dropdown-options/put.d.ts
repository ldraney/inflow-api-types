import { z } from 'zod';
/**
 * CustomFieldDropdownOptions PUT request schema
 * Endpoint: PUT /{companyId}/custom-field-dropdown-options
 *
 * Sets the dropdown options for a specific custom field
 */
export declare const CustomFieldDropdownOptionsPUT: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    entityType: z.ZodEnum<["salesOrder", "purchaseOrder", "product", "vendor", "customer", "countSheet", "stockTransfer", "stockAdjustment", "stockCount", "manufacturingOrder"]>;
    propertyName: z.ZodString;
    dropdownOptions: z.ZodArray<z.ZodString, "many">;
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
 * Field constraints for CustomFieldDropdownOptions
 */
export declare const CustomFieldDropdownOptionsConstraints: {
    readOnly: string[];
    immutable: any[];
    required: {
        create: string[];
        update: string[];
    };
};
//# sourceMappingURL=put.d.ts.map