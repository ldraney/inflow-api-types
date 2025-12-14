import { z } from 'zod';
import { uuid } from '../primitives';

/**
 * CustomFieldPrintValues - determines which custom fields to print
 */
export const CustomFieldPrintValues = z.object({
  custom1Print: z.boolean().optional(),
  custom2Print: z.boolean().optional(),
  custom3Print: z.boolean().optional(),
});

/**
 * CustomFields GET response schema
 * Endpoint: GET /{companyId}/custom-fields
 *
 * Note: customFieldsId actually refers to the companyId, not a separate ID
 * This controls which custom fields are printed on documents
 */
export const CustomFieldsGET = z.object({
  customFieldsId: uuid.optional(), // Actually the companyId
  purchaseOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  salesOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  stockAdjustmentCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  stockTransferCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  workOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
});
