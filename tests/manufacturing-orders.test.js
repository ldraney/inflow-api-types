/**
 * ManufacturingOrder schema validation tests
 *
 * Run with: npm run test:manufacturing-orders
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { ManufacturingOrderGET, ManufacturingOrderListGET, ManufacturingOrderIncludes } from '../manufacturing-orders/index.js';

async function main() {
  console.log('='.repeat(60));
  console.log('ManufacturingOrder Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List manufacturing orders (basic, no includes)
  const test1 = await runTest('GET /manufacturing-orders - List orders (no includes)', async () => {
    const data = await apiGet('/manufacturing-orders', { filter: { isActive: true } });

    console.log(`  Received ${data.length} manufacturing orders`);

    if (data.length === 0) {
      console.log('  [WARN] No manufacturing orders returned - create some test data');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET schema');

    const sample = data[0];
    console.log(`  Sample: ${sample.manufacturingOrderNumber} (${sample.manufacturingOrderId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single manufacturing order
  const test2 = await runTest('GET /manufacturing-orders/{id} - Single order', async () => {
    const list = await apiGet('/manufacturing-orders', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    const orderId = list[0].manufacturingOrderId;
    const data = await apiGet(`/manufacturing-orders/${orderId}`);

    validateSchema(ManufacturingOrderGET, data, 'ManufacturingOrderGET schema');
    console.log(`  Order: ${data.manufacturingOrderNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Manufacturing order with lines include
  const test3 = await runTest('GET /manufacturing-orders?include=lines', async () => {
    const data = await apiGet('/manufacturing-orders', {
      include: ['lines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET with lines');

    const withLines = data.find(o => o.lines && o.lines.length > 0);
    if (withLines) {
      console.log(`  Found order with ${withLines.lines.length} lines`);
    } else {
      console.log('  [INFO] No orders have lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Manufacturing order with pickLines include
  const test4 = await runTest('GET /manufacturing-orders?include=pickLines', async () => {
    const data = await apiGet('/manufacturing-orders', {
      include: ['pickLines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET with pickLines');

    const withPick = data.find(o => o.pickLines && o.pickLines.length > 0);
    if (withPick) {
      console.log(`  Found order with ${withPick.pickLines.length} pick lines`);
    } else {
      console.log('  [INFO] No orders have pick lines');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Manufacturing order with putLines include
  const test5 = await runTest('GET /manufacturing-orders?include=putLines', async () => {
    const data = await apiGet('/manufacturing-orders', {
      include: ['putLines'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET with putLines');

    const withPut = data.find(o => o.putLines && o.putLines.length > 0);
    if (withPut) {
      console.log(`  Found order with ${withPut.putLines.length} put-away lines`);
    } else {
      console.log('  [INFO] No orders have put-away lines');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Manufacturing order with location include
  const test6 = await runTest('GET /manufacturing-orders?include=location', async () => {
    const data = await apiGet('/manufacturing-orders', {
      include: ['location'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET with location');

    const withLocation = data.find(o => o.location);
    if (withLocation) {
      console.log(`  Found order with location: ${withLocation.location?.name}`);
    } else {
      console.log('  [INFO] No orders have location data');
    }
  });
  test6 ? passed++ : failed++;

  // Test 7: Multiple includes
  const test7 = await runTest('GET /manufacturing-orders?include=lines,location,currency', async () => {
    const data = await apiGet('/manufacturing-orders', {
      include: ['lines', 'location', 'currency'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} orders with multiple includes`);
  });
  test7 ? passed++ : failed++;

  // Test 8: Filter by isActive
  const test8 = await runTest('GET /manufacturing-orders?filter[isActive]=true', async () => {
    const data = await apiGet('/manufacturing-orders', {
      filter: { isActive: true },
    });

    validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET filtered by isActive');
    console.log(`  Found ${data.length} active orders`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Kitchen sink test
  const test9 = await runTest('GET /manufacturing-orders - Kitchen sink (many includes)', async () => {
    const includes = [
      'lines',
      'pickLines',
      'putLines',
      'location',
      'currency',
      'assignedToTeamMember',
    ];

    const data = await apiGet('/manufacturing-orders', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No manufacturing orders available');
      return;
    }

    const result = validateSchema(ManufacturingOrderListGET, data, 'ManufacturingOrderListGET kitchen sink');

    if (!result.success) {
      console.log('\n  First order raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test9 ? passed++ : failed++;

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
