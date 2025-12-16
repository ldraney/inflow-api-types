/**
 * PurchaseOrder schema validation tests
 *
 * Run with: npm run test:purchase-orders
 */

import { apiGet, validateSchema, runTest, stripReadOnlyFields } from './api.js';
import { PurchaseOrderGET, PurchaseOrderIncludes } from '../dist/purchase-orders/index.js';
import { PurchaseOrderPUT, PurchaseOrderConstraints } from '../dist/purchase-orders/index.js';
import { z } from 'zod';

// Schema for array of purchase orders
const PurchaseOrderListGET = z.array(PurchaseOrderGET);

async function main() {
  console.log('='.repeat(60));
  console.log('PurchaseOrder Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List purchase orders (basic, no includes)
  const test1 = await runTest('GET /purchase-orders - List orders (no includes)', async () => {
    const data = await apiGet('/purchase-orders', { filter: { isActive: true } });

    console.log(`  Received ${data.length} purchase orders`);

    if (data.length === 0) {
      console.log('  [WARN] No purchase orders returned - create some test data');
      return;
    }

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET schema');

    const sample = data[0];
    console.log(`  Sample: ${sample.orderNumber} (${sample.purchaseOrderId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single purchase order
  const test2 = await runTest('GET /purchase-orders/{id} - Single order', async () => {
    const list = await apiGet('/purchase-orders', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    const orderId = list[0].purchaseOrderId;
    const data = await apiGet(`/purchase-orders/${orderId}`);

    validateSchema(PurchaseOrderGET, data, 'PurchaseOrderGET schema');
    console.log(`  Order: ${data.orderNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Purchase order with lines include
  const test3 = await runTest('GET /purchase-orders?include=lines', async () => {
    const data = await apiGet('/purchase-orders', {
      include: ['lines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET with lines');

    const withLines = data.find(o => o.lines && o.lines.length > 0);
    if (withLines) {
      console.log(`  Found order with ${withLines.lines.length} lines`);
    } else {
      console.log('  [INFO] No orders have lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Purchase order with receiveLines include
  const test4 = await runTest('GET /purchase-orders?include=receiveLines', async () => {
    const data = await apiGet('/purchase-orders', {
      include: ['receiveLines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET with receiveLines');

    const withReceive = data.find(o => o.receiveLines && o.receiveLines.length > 0);
    if (withReceive) {
      console.log(`  Found order with ${withReceive.receiveLines.length} receive lines`);
    } else {
      console.log('  [INFO] No orders have receive lines');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Purchase order with vendor include
  const test5 = await runTest('GET /purchase-orders?include=vendor', async () => {
    const data = await apiGet('/purchase-orders', {
      include: ['vendor'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET with vendor');

    const withVendor = data.find(o => o.vendor);
    if (withVendor) {
      console.log(`  Found order with vendor: ${withVendor.vendor?.name}`);
    } else {
      console.log('  [INFO] No orders have vendor data');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Multiple includes
  const test6 = await runTest('GET /purchase-orders?include=lines,vendor,currency', async () => {
    const data = await apiGet('/purchase-orders', {
      include: ['lines', 'vendor', 'currency'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} orders with multiple includes`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Filter by isActive
  const test7 = await runTest('GET /purchase-orders?filter[isActive]=true', async () => {
    const data = await apiGet('/purchase-orders', {
      filter: { isActive: true },
    });

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET filtered by isActive');
    console.log(`  Found ${data.length} active orders`);
  });
  test7 ? passed++ : failed++;

  // Test 8: Smart search
  const test8 = await runTest('GET /purchase-orders?filter[smart]=PO', async () => {
    const data = await apiGet('/purchase-orders', {
      filter: { smart: 'PO' },
    });

    validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET with smart search');
    console.log(`  Smart search returned ${data.length} orders`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Kitchen sink test
  const test9 = await runTest('GET /purchase-orders - Kitchen sink (many includes)', async () => {
    const includes = [
      'lines',
      'receiveLines',
      'vendor',
      'location',
      'currency',
      'paymentTerms',
      'taxingScheme',
    ];

    const data = await apiGet('/purchase-orders', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    const result = validateSchema(PurchaseOrderListGET, data, 'PurchaseOrderListGET kitchen sink');

    if (!result.success) {
      console.log('\n  First order raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test9 ? passed++ : failed++;

  // ============================================================================
  // PUT Schema Validation Tests
  // ============================================================================
  console.log('\n' + '-'.repeat(60));
  console.log('PUT Schema Validation (from GET responses)');
  console.log('-'.repeat(60));

  // Test 10: Validate PUT schema accepts stripped GET response
  const test10 = await runTest('PUT schema - Single purchase order from GET', async () => {
    const list = await apiGet('/purchase-orders', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    const orderId = list[0].purchaseOrderId;
    const order = await apiGet(`/purchase-orders/${orderId}`);

    // Strip read-only fields
    const payload = stripReadOnlyFields(order, PurchaseOrderConstraints.readOnly);

    const result = validateSchema(PurchaseOrderPUT, payload, 'PurchaseOrderPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test10 ? passed++ : failed++;

  // Test 11: Validate PUT schema with nested arrays (lines)
  const test11 = await runTest('PUT schema - Purchase order with lines', async () => {
    const list = await apiGet('/purchase-orders', {
      include: ['lines'],
      filter: { isActive: true },
    });

    if (list.length === 0) {
      console.log('  [SKIP] No purchase orders available');
      return;
    }

    // Find an order with lines
    const order = list.find(o => o.lines?.length > 0) || list[0];

    // Strip read-only fields
    const payload = stripReadOnlyFields(order, PurchaseOrderConstraints.readOnly);

    const result = validateSchema(PurchaseOrderPUT, payload, 'PurchaseOrderPUT with lines');

    if (result.success && payload.lines?.length) {
      console.log(`  Validated with: ${payload.lines.length} lines`);
    } else if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test11 ? passed++ : failed++;

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
