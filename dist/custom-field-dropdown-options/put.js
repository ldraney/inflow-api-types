import { z } from 'zod';
import { CustomFieldEntityType } from '../custom-field-definitions/get.js';
/**
 * CustomFieldDropdownOptions PUT request schema
 * Endpoint: PUT /{companyId}/custom-field-dropdown-options
 *
 * Sets the dropdown options for a specific custom field
 */
export const CustomFieldDropdownOptionsPUT = z.object({
    id: z.string().optional(), // Ignored
    entityType: CustomFieldEntityType,
    propertyName: z.string(), // Custom1, Custom2, ... Custom10
    dropdownOptions: z.array(z.string()),
});
/**
 * Field constraints for CustomFieldDropdownOptions
 */
export const CustomFieldDropdownOptionsConstraints = {
    readOnly: ['id'],
    immutable: [],
    required: {
        create: ['entityType', 'propertyName', 'dropdownOptions'],
        update: ['entityType', 'propertyName', 'dropdownOptions'],
    },
};
