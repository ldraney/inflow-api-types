import { z } from 'zod';
/**
 * CustomFieldPrintValues - determines which custom fields to print
 */
export declare const CustomFieldPrintValues: z.ZodObject<{
    custom1Print: z.ZodOptional<z.ZodBoolean>;
    custom2Print: z.ZodOptional<z.ZodBoolean>;
    custom3Print: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    custom1Print?: boolean;
    custom2Print?: boolean;
    custom3Print?: boolean;
}, {
    custom1Print?: boolean;
    custom2Print?: boolean;
    custom3Print?: boolean;
}>;
/**
 * CustomFields GET response schema
 * Endpoint: GET /{companyId}/custom-fields
 *
 * Note: customFieldsId actually refers to the companyId, not a separate ID
 * This controls which custom fields are printed on documents
 */
export declare const CustomFieldsGET: z.ZodObject<{
    customFieldsId: z.ZodOptional<z.ZodString>;
    purchaseOrderCustomFieldPrintLabels: z.ZodOptional<z.ZodObject<{
        custom1Print: z.ZodOptional<z.ZodBoolean>;
        custom2Print: z.ZodOptional<z.ZodBoolean>;
        custom3Print: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }>>;
    salesOrderCustomFieldPrintLabels: z.ZodOptional<z.ZodObject<{
        custom1Print: z.ZodOptional<z.ZodBoolean>;
        custom2Print: z.ZodOptional<z.ZodBoolean>;
        custom3Print: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }>>;
    stockAdjustmentCustomFieldPrintLabels: z.ZodOptional<z.ZodObject<{
        custom1Print: z.ZodOptional<z.ZodBoolean>;
        custom2Print: z.ZodOptional<z.ZodBoolean>;
        custom3Print: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }>>;
    stockTransferCustomFieldPrintLabels: z.ZodOptional<z.ZodObject<{
        custom1Print: z.ZodOptional<z.ZodBoolean>;
        custom2Print: z.ZodOptional<z.ZodBoolean>;
        custom3Print: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }>>;
    workOrderCustomFieldPrintLabels: z.ZodOptional<z.ZodObject<{
        custom1Print: z.ZodOptional<z.ZodBoolean>;
        custom2Print: z.ZodOptional<z.ZodBoolean>;
        custom3Print: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }, {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    }>>;
}, "strip", z.ZodTypeAny, {
    customFieldsId?: string;
    purchaseOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    salesOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    stockAdjustmentCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    stockTransferCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    workOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
}, {
    customFieldsId?: string;
    purchaseOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    salesOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    stockAdjustmentCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    stockTransferCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
    workOrderCustomFieldPrintLabels?: {
        custom1Print?: boolean;
        custom2Print?: boolean;
        custom3Print?: boolean;
    };
}>;
//# sourceMappingURL=get.d.ts.map