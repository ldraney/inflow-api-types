/**
 * Product schema validation tests
 *
 * Run with: node tests/products.test.js
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest, stripReadOnlyFields } from './api.js';
import { ProductGET, ProductIncludes } from '../dist/products/index.js';
import { ProductPUT, ProductConstraints } from '../dist/products/index.js';
import { z } from 'zod';

// Schema for array of products
const ProductListGET = z.array(ProductGET);

async function main() {
  console.log('='.repeat(60));
  console.log('Product Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List products (basic, no includes)
  const test1 = await runTest('GET /products - List products (no includes)', async () => {
    const data = await apiGet('/products', { filter: { isActive: true } });

    console.log(`  Received ${data.length} products`);

    if (data.length === 0) {
      console.log('  [WARN] No products returned - create some test data');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample product: ${sample.name} (${sample.productId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single product
  const test2 = await runTest('GET /products/{id} - Single product', async () => {
    // First get list to find a product ID
    const list = await apiGet('/products', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    const productId = list[0].productId;
    const data = await apiGet(`/products/${productId}`);

    validateSchema(ProductGET, data, 'ProductGET schema');
    console.log(`  Product: ${data.name}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Product with inventoryLines include
  const test3 = await runTest('GET /products?include=inventoryLines', async () => {
    const data = await apiGet('/products', {
      include: ['inventoryLines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET with inventoryLines');

    // Check that inventoryLines was populated
    const withInventory = data.find(p => p.inventoryLines && p.inventoryLines.length > 0);
    if (withInventory) {
      console.log(`  Found product with ${withInventory.inventoryLines.length} inventory lines`);
      console.log(`  totalQuantityOnHand: ${withInventory.totalQuantityOnHand}`);
    } else {
      console.log('  [INFO] No products have inventory lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Product with prices include
  const test4 = await runTest('GET /products?include=prices', async () => {
    const data = await apiGet('/products', {
      include: ['prices'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET with prices');

    const withPrices = data.find(p => p.prices && p.prices.length > 0);
    if (withPrices) {
      console.log(`  Found product with ${withPrices.prices.length} prices`);
    } else {
      console.log('  [INFO] No products have prices defined');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Product with vendorItems include
  const test5 = await runTest('GET /products?include=vendorItems', async () => {
    const data = await apiGet('/products', {
      include: ['vendorItems'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET with vendorItems');

    const withVendors = data.find(p => p.vendorItems && p.vendorItems.length > 0);
    if (withVendors) {
      console.log(`  Found product with ${withVendors.vendorItems.length} vendor items`);
    } else {
      console.log('  [INFO] No products have vendor items');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Product with multiple includes
  const test6 = await runTest('GET /products?include=inventoryLines,prices,vendorItems,productBarcodes', async () => {
    const data = await apiGet('/products', {
      include: ['inventoryLines', 'prices', 'vendorItems', 'productBarcodes'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} products with multiple includes`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Filter by isActive (itemType filter seems broken in API)
  const test7 = await runTest('GET /products?filter[isActive]=true', async () => {
    const data = await apiGet('/products', {
      filter: { isActive: true },
    });

    validateSchema(ProductListGET, data, 'ProductListGET filtered by isActive');
    console.log(`  Found ${data.length} active products`);

    // Verify filter worked
    const inactive = data.find(p => p.isActive === false);
    if (inactive) {
      console.log('  [WARN] Found inactive product in results - filter may not be working');
    }
  });
  test7 ? passed++ : failed++;

  // Test 8: Smart search filter
  const test8 = await runTest('GET /products?filter[smart]=test', async () => {
    const data = await apiGet('/products', {
      filter: { smart: 'test' },
    });

    validateSchema(ProductListGET, data, 'ProductListGET with smart search');
    console.log(`  Smart search returned ${data.length} products`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Product with category include
  const test9 = await runTest('GET /products?include=category', async () => {
    const data = await apiGet('/products', {
      include: ['category'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    validateSchema(ProductListGET, data, 'ProductListGET with category');

    const withCategory = data.find(p => p.category);
    if (withCategory) {
      console.log(`  Found product with category: ${JSON.stringify(withCategory.category)}`);
    } else {
      console.log('  [INFO] No products have categories');
    }
  });
  test9 ? passed++ : failed++;

  // Test 10: Product with all common includes
  const test10 = await runTest('GET /products - Kitchen sink test (many includes)', async () => {
    const includes = [
      'inventoryLines',
      'prices',
      'vendorItems',
      'productBarcodes',
      'category',
      'defaultImage',
      'images',
      'reorderSettings',
      'cost',
    ];

    const data = await apiGet('/products', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    const result = validateSchema(ProductListGET, data, 'ProductListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First product raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test10 ? passed++ : failed++;

  // ============================================================================
  // PUT Schema Validation Tests
  // ============================================================================
  console.log('\n' + '-'.repeat(60));
  console.log('PUT Schema Validation (from GET responses)');
  console.log('-'.repeat(60));

  // Test 11: Validate PUT schema accepts stripped GET response
  const test11 = await runTest('PUT schema - Single product from GET', async () => {
    const list = await apiGet('/products', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    const productId = list[0].productId;
    const product = await apiGet(`/products/${productId}`);

    // Strip read-only fields
    const payload = stripReadOnlyFields(product, ProductConstraints.readOnly);

    const result = validateSchema(ProductPUT, payload, 'ProductPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test11 ? passed++ : failed++;

  // Test 12: Validate PUT schema with nested arrays (prices, vendorItems)
  const test12 = await runTest('PUT schema - Product with nested arrays', async () => {
    const list = await apiGet('/products', {
      include: ['prices', 'vendorItems', 'productBarcodes', 'reorderSettings'],
      filter: { isActive: true },
    });

    if (list.length === 0) {
      console.log('  [SKIP] No products available');
      return;
    }

    // Find a product with some nested data
    const product = list.find(p =>
      (p.prices?.length > 0) ||
      (p.vendorItems?.length > 0) ||
      (p.productBarcodes?.length > 0)
    ) || list[0];

    // Strip read-only fields
    const payload = stripReadOnlyFields(product, ProductConstraints.readOnly);

    const result = validateSchema(ProductPUT, payload, 'ProductPUT with nested arrays');

    if (result.success) {
      const nested = [];
      if (payload.prices?.length) nested.push(`${payload.prices.length} prices`);
      if (payload.vendorItems?.length) nested.push(`${payload.vendorItems.length} vendorItems`);
      if (payload.productBarcodes?.length) nested.push(`${payload.productBarcodes.length} barcodes`);
      if (nested.length > 0) {
        console.log(`  Validated with: ${nested.join(', ')}`);
      }
    } else {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test12 ? passed++ : failed++;

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
