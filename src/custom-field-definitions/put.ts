import { z } from 'zod';
import { uuid } from '../primitives';
import { CustomFieldType, CustomFieldEntityType, CustomFieldPropertyName } from './get';

/**
 * CustomFieldDefinition PUT request schema
 * Endpoint: PUT /{companyId}/custom-field-definitions
 *
 * Note: customFieldDefinitionId is ignored on insert
 */
export const CustomFieldDefinitionPUT = z.object({
  customFieldDefinitionId: z.string().optional(), // Ignored on insert
  label: z.string(),
  propertyName: CustomFieldPropertyName, // custom1 through custom10
  customFieldType: CustomFieldType,
  entityType: CustomFieldEntityType,
  isActive: z.boolean().optional(),
  categoryId: uuid.nullable().optional(),
});

/**
 * Field constraints for CustomFieldDefinition
 */
export const CustomFieldDefinitionConstraints = {
  readOnly: [],
  immutable: ['propertyName', 'entityType'], // Cannot change which slot or entity type after creation
  required: {
    create: ['label', 'propertyName', 'customFieldType', 'entityType'],
    update: ['label', 'propertyName', 'customFieldType', 'entityType'],
  },
};
