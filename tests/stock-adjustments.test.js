/**
 * StockAdjustment schema validation tests
 *
 * Run with: npm run test:stock-adjustments
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { StockAdjustmentGET, StockAdjustmentIncludes } from '../stock-adjustments/index.js';
import { z } from 'zod';

// Schema for array of stock adjustments
const StockAdjustmentListGET = z.array(StockAdjustmentGET);

async function main() {
  console.log('='.repeat(60));
  console.log('StockAdjustment Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List stock adjustments (basic, no includes)
  const test1 = await runTest('GET /stock-adjustments - List stock adjustments (no includes)', async () => {
    const data = await apiGet('/stock-adjustments');

    console.log(`  Received ${data.length} stock adjustments`);

    if (data.length === 0) {
      console.log('  [WARN] No stock adjustments returned - create some test data');
      return;
    }

    validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample: ${sample.adjustmentNumber} (${sample.stockAdjustmentId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single stock adjustment
  const test2 = await runTest('GET /stock-adjustments/{id} - Single stock adjustment', async () => {
    // First get list to find a stock adjustment ID
    const list = await apiGet('/stock-adjustments');
    if (list.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    const stockAdjustmentId = list[0].stockAdjustmentId;
    const data = await apiGet(`/stock-adjustments/${stockAdjustmentId}`);

    validateSchema(StockAdjustmentGET, data, 'StockAdjustmentGET schema');
    console.log(`  Adjustment: ${data.adjustmentNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Stock adjustment with lines include
  const test3 = await runTest('GET /stock-adjustments?include=lines', async () => {
    const data = await apiGet('/stock-adjustments', {
      include: ['lines'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET with lines');

    // Check that lines was populated
    const withLines = data.find(a => a.lines && a.lines.length > 0);
    if (withLines) {
      console.log(`  Found adjustment with ${withLines.lines.length} lines`);
    } else {
      console.log('  [INFO] No stock adjustments have lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Stock adjustment with location include
  const test4 = await runTest('GET /stock-adjustments?include=location', async () => {
    const data = await apiGet('/stock-adjustments', {
      include: ['location'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET with location');

    const sample = data[0];
    if (sample.location) {
      console.log(`  Location: ${sample.location.name}`);
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Stock adjustment with adjustmentReason include
  const test5 = await runTest('GET /stock-adjustments?include=adjustmentReason', async () => {
    const data = await apiGet('/stock-adjustments', {
      include: ['adjustmentReason'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET with adjustmentReason');

    const withReason = data.find(a => a.adjustmentReason);
    if (withReason) {
      console.log(`  Found adjustment with reason: ${withReason.adjustmentReason.name}`);
    } else {
      console.log('  [INFO] No stock adjustments have an adjustment reason');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Filter by adjustmentNumber
  const test6 = await runTest('GET /stock-adjustments?filter[adjustmentNumber]=...', async () => {
    // First get an adjustment number
    const list = await apiGet('/stock-adjustments');
    if (list.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    const adjustmentNumber = list[0].adjustmentNumber;
    const data = await apiGet('/stock-adjustments', {
      filter: { adjustmentNumber },
    });

    validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET filtered');
    console.log(`  Filter returned ${data.length} adjustments`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Kitchen sink test (many includes)
  const test7 = await runTest('GET /stock-adjustments - Kitchen sink test (many includes)', async () => {
    const includes = [
      'lines',
      'location',
      'adjustmentReason',
    ];

    const data = await apiGet('/stock-adjustments', {
      include: includes,
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock adjustments available');
      return;
    }

    const result = validateSchema(StockAdjustmentListGET, data, 'StockAdjustmentListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First stock adjustment raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test7 ? passed++ : failed++;

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
