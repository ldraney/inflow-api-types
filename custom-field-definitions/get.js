import { z } from 'zod';
import { uuid } from '../primitives.js';
import { CategoryGET } from '../reference/index.js';

/**
 * Custom field type enum
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const CustomFieldType = z.enum(['text', 'dropdown', 'date', 'checkbox']);

/**
 * Entity type enum - entities that support custom fields
 * Note: API returns camelCase despite swagger showing PascalCase
 */
export const CustomFieldEntityType = z.enum([
  'salesOrder',
  'purchaseOrder',
  'product',
  'vendor',
  'customer',
  'countSheet',
  'stockTransfer',
  'stockAdjustment',
  'stockCount',
  'manufacturingOrder',
]);

/**
 * Property name - custom1 through custom10
 */
export const CustomFieldPropertyName = z.enum([
  'custom1', 'custom2', 'custom3', 'custom4', 'custom5',
  'custom6', 'custom7', 'custom8', 'custom9', 'custom10',
]);

/**
 * CustomFieldDefinition GET response schema
 * Endpoint: GET /{companyId}/custom-field-definitions
 */
export const CustomFieldDefinitionGET = z.object({
  customFieldDefinitionId: z.string().optional(),
  label: z.string().optional(),
  propertyName: z.string().optional(), // API may return various formats
  customFieldType: CustomFieldType.optional(),
  entityType: CustomFieldEntityType.optional(),
  isActive: z.boolean().optional(),
  categoryId: uuid.nullable().optional(),
  category: CategoryGET.optional(),
});

/**
 * Available filters for ?filter[x]= query parameter
 */
export const CustomFieldDefinitionFilters = {
  entityType: { type: 'string', description: 'Filter by entity type (e.g., Product, SalesOrder)' },
  isActive: { type: 'boolean', description: 'Filter by active status' },
};
