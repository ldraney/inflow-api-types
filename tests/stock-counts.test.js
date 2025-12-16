/**
 * StockCount schema validation tests
 *
 * Run with: npm run test:stock-counts
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest, stripReadOnlyFields } from './api.js';
import { StockCountGET, StockCountIncludes } from '../dist/stock-counts/index.js';
import { StockCountPUT, StockCountConstraints } from '../dist/stock-counts/index.js';
import { CountSheetGET, CountSheetIncludes } from '../dist/count-sheets/index.js';
import { CountSheetPUT, CountSheetConstraints } from '../dist/count-sheets/index.js';
import { z } from 'zod';

// Schema for array of stock counts
const StockCountListGET = z.array(StockCountGET);

async function main() {
  console.log('='.repeat(60));
  console.log('StockCount Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List stock counts (basic, no includes)
  const test1 = await runTest('GET /stock-counts - List stock counts (no includes)', async () => {
    const data = await apiGet('/stock-counts');

    console.log(`  Received ${data.length} stock counts`);

    if (data.length === 0) {
      console.log('  [WARN] No stock counts returned - create some test data');
      return;
    }

    validateSchema(StockCountListGET, data, 'StockCountListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample: ${sample.stockCountNumber} (${sample.stockCountId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single stock count
  const test2 = await runTest('GET /stock-counts/{id} - Single stock count', async () => {
    // First get list to find a stock count ID
    const list = await apiGet('/stock-counts');
    if (list.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    const stockCountId = list[0].stockCountId;
    const data = await apiGet(`/stock-counts/${stockCountId}`);

    validateSchema(StockCountGET, data, 'StockCountGET schema');
    console.log(`  Stock Count: ${data.stockCountNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Stock count with sheets include
  const test3 = await runTest('GET /stock-counts?include=sheets', async () => {
    const data = await apiGet('/stock-counts', {
      include: ['sheets'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    validateSchema(StockCountListGET, data, 'StockCountListGET with sheets');

    // Check that sheets was populated
    const withSheets = data.find(c => c.sheets && c.sheets.length > 0);
    if (withSheets) {
      console.log(`  Found stock count with ${withSheets.sheets.length} sheets`);
    } else {
      console.log('  [INFO] No stock counts have sheets');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Stock count with location include
  const test4 = await runTest('GET /stock-counts?include=location', async () => {
    const data = await apiGet('/stock-counts', {
      include: ['location'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    validateSchema(StockCountListGET, data, 'StockCountListGET with location');

    const sample = data[0];
    if (sample.location) {
      console.log(`  Location: ${sample.location.name}`);
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Filter by stockCountNumber
  const test5 = await runTest('GET /stock-counts?filter[stockCountNumber]=...', async () => {
    // First get a stock count number
    const list = await apiGet('/stock-counts');
    if (list.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    const stockCountNumber = list[0].stockCountNumber;
    const data = await apiGet('/stock-counts', {
      filter: { stockCountNumber },
    });

    validateSchema(StockCountListGET, data, 'StockCountListGET filtered');
    console.log(`  Filter returned ${data.length} stock counts`);
  });
  test5 ? passed++ : failed++;

  // Test 6: Get single count sheet
  const test6 = await runTest('GET /count-sheets/{id} - Single count sheet', async () => {
    // First get list of stock counts with sheets
    const list = await apiGet('/stock-counts', {
      include: ['sheets'],
    });

    const withSheets = list.find(c => c.sheets && c.sheets.length > 0);
    if (!withSheets) {
      console.log('  [SKIP] No count sheets available');
      return;
    }

    const countSheetId = withSheets.sheets[0].countSheetId;
    const data = await apiGet(`/count-sheets/${countSheetId}`);

    validateSchema(CountSheetGET, data, 'CountSheetGET schema');
    console.log(`  Count Sheet: ${data.sheetNumber}`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Kitchen sink test (many includes)
  const test7 = await runTest('GET /stock-counts - Kitchen sink test (many includes)', async () => {
    const includes = [
      'sheets',
      'location',
      'assignedToTeamMember',
    ];

    const data = await apiGet('/stock-counts', {
      include: includes,
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    const result = validateSchema(StockCountListGET, data, 'StockCountListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First stock count raw data (for debugging):');
      console.log(JSON.stringify(data[0], null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test7 ? passed++ : failed++;

  // ============================================================================
  // PUT Schema Validation Tests
  // ============================================================================
  console.log('\n' + '-'.repeat(60));
  console.log('PUT Schema Validation (from GET responses)');
  console.log('-'.repeat(60));

  // Test 8: Validate PUT schema accepts stripped GET response
  const test8 = await runTest('PUT schema - Single stock count from GET', async () => {
    const list = await apiGet('/stock-counts');
    if (list.length === 0) {
      console.log('  [SKIP] No stock counts available');
      return;
    }

    const stockCountId = list[0].stockCountId;
    const stockCount = await apiGet(`/stock-counts/${stockCountId}`);

    // Strip read-only fields
    const payload = stripReadOnlyFields(stockCount, StockCountConstraints.readOnly);

    const result = validateSchema(StockCountPUT, payload, 'StockCountPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  test8 ? passed++ : failed++;

  // Test 9: Validate CountSheet PUT schema
  const test9 = await runTest('PUT schema - Count sheet from GET', async () => {
    // First get list of stock counts with sheets
    const list = await apiGet('/stock-counts', {
      include: ['sheets'],
    });

    const withSheets = list.find(c => c.sheets && c.sheets.length > 0);
    if (!withSheets) {
      console.log('  [SKIP] No count sheets available');
      return;
    }

    const countSheetId = withSheets.sheets[0].countSheetId;
    const countSheet = await apiGet(`/count-sheets/${countSheetId}`);

    // Strip read-only fields
    const payload = stripReadOnlyFields(countSheet, CountSheetConstraints.readOnly);

    const result = validateSchema(CountSheetPUT, payload, 'CountSheetPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
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
