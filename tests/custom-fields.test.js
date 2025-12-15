/**
 * Custom Fields (print settings) schema validation tests
 *
 * Run with: node tests/custom-fields.test.js
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { CustomFieldsGET } from '../dist/custom-fields/index.js';

async function main() {
  console.log('='.repeat(60));
  console.log('Custom Fields Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // ============================================================================
  // CustomFields (print settings)
  // ============================================================================
  const testCustomFields = await runTest('GET /custom-fields - Get print settings', async () => {
    const data = await apiGet('/custom-fields');
    console.log(`  Received custom fields print settings`);

    const result = validateSchema(CustomFieldsGET, data, 'CustomFieldsGET');
    if (result.success) {
      console.log(`  customFieldsId: ${data.customFieldsId}`);
      if (data.salesOrderCustomFieldPrintLabels) {
        console.log(`  Sales order print settings: custom1=${data.salesOrderCustomFieldPrintLabels.custom1Print}, custom2=${data.salesOrderCustomFieldPrintLabels.custom2Print}, custom3=${data.salesOrderCustomFieldPrintLabels.custom3Print}`);
      }
    }
  });
  testCustomFields ? passed++ : failed++;

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
