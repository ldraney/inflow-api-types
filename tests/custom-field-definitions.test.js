/**
 * Custom Field Definition schema validation tests
 *
 * Run with: node tests/custom-field-definitions.test.js
 */

import { apiGet, validateSchema, runTest } from './api.js';
import {
  CustomFieldDefinitionGET,
  CustomFieldType,
  CustomFieldEntityType,
} from '../custom-field-definitions/index.js';
import {
  CustomFieldDropdownOptionsGET,
} from '../custom-field-dropdown-options/index.js';
import { z } from 'zod';

async function main() {
  console.log('='.repeat(60));
  console.log('Custom Field Definition Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // ============================================================================
  // CustomFieldDefinition
  // ============================================================================
  const testCustomFieldDefinitions = await runTest('GET /custom-field-definitions - List definitions', async () => {
    const data = await apiGet('/custom-field-definitions');
    console.log(`  Received ${data.length} custom field definitions`);

    const result = validateSchema(z.array(CustomFieldDefinitionGET), data, 'CustomFieldDefinitionGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].label} (${data[0].propertyName}) - ${data[0].entityType}`);
      console.log(`  Field types found: ${[...new Set(data.map(d => d.customFieldType))].join(', ')}`);
      console.log(`  Entity types found: ${[...new Set(data.map(d => d.entityType))].join(', ')}`);
    }
  });
  testCustomFieldDefinitions ? passed++ : failed++;

  // ============================================================================
  // CustomFieldDropdownOptions (for Product entity)
  // ============================================================================
  const testDropdownOptions = await runTest('GET /custom-field-dropdown-options/Product - Get dropdown options', async () => {
    try {
      const data = await apiGet('/custom-field-dropdown-options/Product');
      console.log(`  Received ${data.length} dropdown option sets`);

      // The response might be in ObjectSubset format or direct format
      if (data.length > 0) {
        console.log(`  First item keys: ${Object.keys(data[0]).join(', ')}`);
      }
    } catch (err) {
      // This endpoint might return empty if no dropdown custom fields exist
      if (err.message.includes('404') || err.message.includes('Not Found')) {
        console.log('  No dropdown options configured for Product');
        return;
      }
      throw err;
    }
  });
  testDropdownOptions ? passed++ : failed++;

  // ============================================================================
  // Summary
  // ============================================================================
  console.log('\n' + '='.repeat(60));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(60));

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
