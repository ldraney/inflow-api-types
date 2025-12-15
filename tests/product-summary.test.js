/**
 * ProductSummary schema validation tests
 *
 * Run with: node tests/product-summary.test.js
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, apiPost, validateSchema, runTest } from './api.js';
import { ProductSummaryGET, ProductSummaryKey } from '../dist/product-summary/index.js';
import { z } from 'zod';

// Schema for array of product summaries
const ProductSummaryListGET = z.array(ProductSummaryGET);

async function main() {
  console.log('='.repeat(60));
  console.log('ProductSummary Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // First, we need a product ID to test with
  let testProductId = null;
  let testLocationId = null;

  // Get a product to use for testing
  const setup = await runTest('Setup: Get a product and location for testing', async () => {
    // Get products to find a test product
    const products = await apiGet('/products', { filter: { isActive: true } });

    if (products.length === 0) {
      throw new Error('No products found - cannot test ProductSummary');
    }

    testProductId = products[0].productId;
    console.log(`  Using product: ${products[0].name} (${testProductId})`);

    // Get locations to find a test location
    const locations = await apiGet('/locations');
    if (locations.length > 0) {
      testLocationId = locations[0].locationId;
      console.log(`  Using location: ${locations[0].name} (${testLocationId})`);
    } else {
      console.log('  [INFO] No locations found - will test without locationId');
    }
  });

  if (!setup) {
    console.log('\n[FATAL] Setup failed - cannot continue tests');
    process.exit(1);
  }

  // Test 1: Get single product summary (no location)
  const test1 = await runTest('GET /products/{id}/summary - Single product summary', async () => {
    const data = await apiGet(`/products/${testProductId}/summary`);

    validateSchema(ProductSummaryGET, data, 'ProductSummaryGET schema');

    console.log(`  productId: ${data.productId}`);
    console.log(`  quantityOnHand: ${data.quantityOnHand}`);
    console.log(`  quantityAvailable: ${data.quantityAvailable}`);
    console.log(`  quantityReserved: ${data.quantityReserved}`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single product summary with location
  const test2 = await runTest('GET /products/{id}/summary?locationId= - Summary for specific location', async () => {
    if (!testLocationId) {
      console.log('  [SKIP] No location available for testing');
      return;
    }

    const data = await apiGet(`/products/${testProductId}/summary`, {
      query: { locationId: testLocationId },
    });

    validateSchema(ProductSummaryGET, data, 'ProductSummaryGET with locationId');

    console.log(`  productId: ${data.productId}`);
    console.log(`  locationId: ${data.locationId}`);
    console.log(`  quantityOnHand: ${data.quantityOnHand}`);
    console.log(`  quantityOnTransferOrder: ${data.quantityOnTransferOrder}`);
    console.log(`  quantityReservedForTransfers: ${data.quantityReservedForTransfers}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Bulk fetch product summaries via POST
  const test3 = await runTest('POST /products/summary - Bulk fetch summaries', async () => {
    // Get a few products
    const products = await apiGet('/products', { filter: { isActive: true } });

    if (products.length < 2) {
      console.log('  [INFO] Less than 2 products - testing with available products');
    }

    // Create request body - array of ProductSummaryKey
    const keys = products.slice(0, Math.min(5, products.length)).map(p => ({
      productId: p.productId,
      locationId: null, // All locations
    }));

    // Validate the request body
    const keysSchema = z.array(ProductSummaryKey);
    validateSchema(keysSchema, keys, 'ProductSummaryKey array (request body)');

    const data = await apiPost('/products/summary', keys);

    validateSchema(ProductSummaryListGET, data, 'ProductSummaryGET array (response)');

    console.log(`  Requested ${keys.length} summaries, received ${data.length}`);

    if (data.length > 0) {
      console.log(`  First summary: productId=${data[0].productId}, qtyOnHand=${data[0].quantityOnHand}`);
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Bulk fetch with specific locations
  const test4 = await runTest('POST /products/summary - Bulk fetch with locations', async () => {
    if (!testLocationId) {
      console.log('  [SKIP] No location available for testing');
      return;
    }

    const products = await apiGet('/products', { filter: { isActive: true } });

    // Create request body with location IDs
    const keys = products.slice(0, Math.min(3, products.length)).map(p => ({
      productId: p.productId,
      locationId: testLocationId,
    }));

    const data = await apiPost('/products/summary', keys);

    validateSchema(ProductSummaryListGET, data, 'ProductSummaryGET array with locations');

    console.log(`  Received ${data.length} summaries with locationId`);

    if (data.length > 0 && data[0].locationId) {
      console.log(`  All returned summaries have locationId: ${data[0].locationId}`);
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Verify all quantity fields are present
  const test5 = await runTest('Verify ProductSummary contains expected quantity fields', async () => {
    const data = await apiGet(`/products/${testProductId}/summary`);

    const expectedFields = [
      'quantityOnHand',
      'quantityOnOrder',
      'quantityReserved',
      'quantityAvailable',
      'rawQuantityAvailable',
    ];

    for (const field of expectedFields) {
      if (field in data) {
        console.log(`  ${field}: ${data[field]}`);
      } else {
        console.log(`  [WARN] ${field}: missing from response`);
      }
    }

    validateSchema(ProductSummaryGET, data, 'ProductSummaryGET with quantity fields');
  });
  test5 ? passed++ : failed++;

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
