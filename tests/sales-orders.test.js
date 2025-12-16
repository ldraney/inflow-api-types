/**
 * SalesOrder schema validation tests
 *
 * Run with: npm run test:sales-orders
 */

import { apiGet, validateSchema, runTest, stripReadOnlyFields } from './api.js';
import { SalesOrderGET, SalesOrderIncludes } from '../dist/sales-orders/index.js';
import { SalesOrderPUT, SalesOrderConstraints } from '../dist/sales-orders/index.js';
import { z } from 'zod';

// Schema for array of sales orders
const SalesOrderListGET = z.array(SalesOrderGET);

async function main() {
  console.log('='.repeat(60));
  console.log('SalesOrder Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List sales orders (basic, no includes)
  const test1 = await runTest('GET /sales-orders - List orders (no includes)', async () => {
    const data = await apiGet('/sales-orders', { filter: { isActive: true } });

    console.log(`  Received ${data.length} sales orders`);

    if (data.length === 0) {
      console.log('  [WARN] No sales orders returned - create some test data');
      return;
    }

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET schema');

    const sample = data[0];
    console.log(`  Sample: ${sample.orderNumber} (${sample.salesOrderId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single sales order
  const test2 = await runTest('GET /sales-orders/{id} - Single order', async () => {
    const list = await apiGet('/sales-orders', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    const orderId = list[0].salesOrderId;
    const data = await apiGet(`/sales-orders/${orderId}`);

    validateSchema(SalesOrderGET, data, 'SalesOrderGET schema');
    console.log(`  Order: ${data.orderNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Sales order with lines include
  const test3 = await runTest('GET /sales-orders?include=lines', async () => {
    const data = await apiGet('/sales-orders', {
      include: ['lines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET with lines');

    const withLines = data.find(o => o.lines && o.lines.length > 0);
    if (withLines) {
      console.log(`  Found order with ${withLines.lines.length} lines`);
    } else {
      console.log('  [INFO] No orders have lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Sales order with pickLines include
  const test4 = await runTest('GET /sales-orders?include=pickLines', async () => {
    const data = await apiGet('/sales-orders', {
      include: ['pickLines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET with pickLines');

    const withPick = data.find(o => o.pickLines && o.pickLines.length > 0);
    if (withPick) {
      console.log(`  Found order with ${withPick.pickLines.length} pick lines`);
    } else {
      console.log('  [INFO] No orders have pick lines');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Sales order with customer include
  const test5 = await runTest('GET /sales-orders?include=customer', async () => {
    const data = await apiGet('/sales-orders', {
      include: ['customer'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET with customer');

    const withCustomer = data.find(o => o.customer);
    if (withCustomer) {
      console.log(`  Found order with customer: ${withCustomer.customer?.name}`);
    } else {
      console.log('  [INFO] No orders have customer data');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Multiple includes
  const test6 = await runTest('GET /sales-orders?include=lines,customer,currency', async () => {
    const data = await apiGet('/sales-orders', {
      include: ['lines', 'customer', 'currency'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} orders with multiple includes`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Filter by isActive
  const test7 = await runTest('GET /sales-orders?filter[isActive]=true', async () => {
    const data = await apiGet('/sales-orders', {
      filter: { isActive: true },
    });

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET filtered by isActive');
    console.log(`  Found ${data.length} active orders`);
  });
  test7 ? passed++ : failed++;

  // Test 8: Smart search
  const test8 = await runTest('GET /sales-orders?filter[smart]=SO', async () => {
    const data = await apiGet('/sales-orders', {
      filter: { smart: 'SO' },
    });

    validateSchema(SalesOrderListGET, data, 'SalesOrderListGET with smart search');
    console.log(`  Smart search returned ${data.length} orders`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Kitchen sink test
  const test9 = await runTest('GET /sales-orders - Kitchen sink (many includes)', async () => {
    const includes = [
      'lines',
      'pickLines',
      'customer',
      'location',
      'currency',
      'paymentTerms',
      'taxingScheme',
      'pricingScheme',
    ];

    const data = await apiGet('/sales-orders', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    const result = validateSchema(SalesOrderListGET, data, 'SalesOrderListGET kitchen sink');

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
  const test10 = await runTest('PUT schema - Single sales order from GET', async () => {
    const list = await apiGet('/sales-orders', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    const orderId = list[0].salesOrderId;
    const order = await apiGet(`/sales-orders/${orderId}`);

    // Strip read-only fields
    const payload = stripReadOnlyFields(order, SalesOrderConstraints.readOnly);

    const result = validateSchema(SalesOrderPUT, payload, 'SalesOrderPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test10 ? passed++ : failed++;

  // Test 11: Validate PUT schema with nested arrays (lines)
  const test11 = await runTest('PUT schema - Sales order with lines', async () => {
    const list = await apiGet('/sales-orders', {
      include: ['lines'],
      filter: { isActive: true },
    });

    if (list.length === 0) {
      console.log('  [SKIP] No sales orders available');
      return;
    }

    // Find an order with lines
    const order = list.find(o => o.lines?.length > 0) || list[0];

    // Strip read-only fields
    const payload = stripReadOnlyFields(order, SalesOrderConstraints.readOnly);

    const result = validateSchema(SalesOrderPUT, payload, 'SalesOrderPUT with lines');

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
