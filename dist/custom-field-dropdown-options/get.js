import { z } from 'zod';
import { CustomFieldEntityType } from '../custom-field-definitions/get.js';
/**
 * CustomFieldDropdownOptions GET response schema
 * Endpoint: GET /{companyId}/custom-field-dropdown-options/{entityType}
 *
 * Returns dropdown options for a specific entity type
 */
export const CustomFieldDropdownOptionsGET = z.object({
    id: z.string().optional(),
    entityType: CustomFieldEntityType.optional(),
    propertyName: z.string().optional(), // Custom1, Custom2, ... Custom10
    dropdownOptions: z.array(z.string()).optional(),
});
/**
 * The GET endpoint returns an ObjectSubset wrapper format
 * This is the actual response structure from the API
 */
export const CustomFieldDropdownOptionsResponseGET = z.object({
    attributes: z.record(z.unknown()).nullable().optional(),
    relationships: z.record(z.array(z.unknown())).nullable().optional(),
    meta: z.record(z.unknown()).nullable().optional(),
}).or(CustomFieldDropdownOptionsGET);
