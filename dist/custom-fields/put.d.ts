import { z } from 'zod';
/**
 * CustomFields PUT request schema
 * Endpoint: PUT /{companyId}/custom-fields
 *
 * Note: customFieldsId actually refers to the companyId
 */
export declare const CustomFieldsPUT: z.ZodObject<{
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
/**
 * Field constraints for CustomFields
 */
export declare const CustomFieldsConstraints: {
    readOnly: string[];
    immutable: any[];
    required: {
        create: any[];
        update: any[];
    };
};
//# sourceMappingURL=put.d.ts.map