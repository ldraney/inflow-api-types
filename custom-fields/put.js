import { z } from 'zod';
import { uuid } from '../primitives.js';
import { CustomFieldPrintValues } from './get.js';

/**
 * CustomFields PUT request schema
 * Endpoint: PUT /{companyId}/custom-fields
 *
 * Note: customFieldsId actually refers to the companyId
 */
export const CustomFieldsPUT = z.object({
  customFieldsId: uuid.optional(),
  purchaseOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  salesOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  stockAdjustmentCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  stockTransferCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
  workOrderCustomFieldPrintLabels: CustomFieldPrintValues.optional(),
});

/**
 * Field constraints for CustomFields
 */
export const CustomFieldsConstraints = {
  readOnly: ['customFieldsId'], // This is the companyId, read-only
  immutable: [],
  required: {
    create: [],
    update: [],
  },
};
