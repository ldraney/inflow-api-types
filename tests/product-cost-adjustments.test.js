/**
 * ProductCostAdjustment schema validation tests
 *
 * Run with: npm run test:product-cost-adjustments
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { ProductCostAdjustmentGET, ProductCostAdjustmentIncludes } from '../product-cost-adjustments/index.js';
import { z } from 'zod';

// Schema for array of product cost adjustments
const ProductCostAdjustmentListGET = z.array(ProductCostAdjustmentGET);

async function main() {
  console.log('='.repeat(60));
  console.log('ProductCostAdjustment Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List product cost adjustments (basic, no includes)
  const test1 = await runTest('GET /product-cost-adjustments - List adjustments (no includes)', async () => {
    const data = await apiGet('/product-cost-adjustments');

    console.log(`  Received ${data.length} product cost adjustments`);

    if (data.length === 0) {
      console.log('  [WARN] No product cost adjustments returned - create some test data');
      return;
    }

    validateSchema(ProductCostAdjustmentListGET, data, 'ProductCostAdjustmentListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample: ${sample.productCostAdjustmentId}`);
    console.log(`  Unit Cost: ${sample.unitCost}`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single product cost adjustment
  const test2 = await runTest('GET /product-cost-adjustments/{id} - Single adjustment', async () => {
    // First get list to find an adjustment ID
    const list = await apiGet('/product-cost-adjustments');
    if (list.length === 0) {
      console.log('  [SKIP] No product cost adjustments available');
      return;
    }

    const productCostAdjustmentId = list[0].productCostAdjustmentId;
    const data = await apiGet(`/product-cost-adjustments/${productCostAdjustmentId}`);

    validateSchema(ProductCostAdjustmentGET, data, 'ProductCostAdjustmentGET schema');
    console.log(`  Adjustment ID: ${data.productCostAdjustmentId}`);
    console.log(`  Unit Cost: ${data.unitCost}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Product cost adjustment with product include
  const test3 = await runTest('GET /product-cost-adjustments?include=product', async () => {
    const data = await apiGet('/product-cost-adjustments', {
      include: ['product'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No product cost adjustments available');
      return;
    }

    validateSchema(ProductCostAdjustmentListGET, data, 'ProductCostAdjustmentListGET with product');

    // Check that product was populated
    const withProduct = data.find(a => a.product);
    if (withProduct) {
      console.log(`  Found adjustment for product: ${withProduct.product.name}`);
    } else {
      console.log('  [INFO] No adjustments have product data');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Kitchen sink test (all includes)
  const test4 = await runTest('GET /product-cost-adjustments - Kitchen sink test', async () => {
    const includes = [
      'product',
      'lastModifiedBy',
    ];

    const data = await apiGet('/product-cost-adjustments', {
      include: includes,
    });

    if (data.length === 0) {
      console.log('  [SKIP] No product cost adjustments available');
      return;
    }

    const result = validateSchema(ProductCostAdjustmentListGET, data, 'ProductCostAdjustmentListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First adjustment raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test4 ? passed++ : failed++;

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(60));

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
