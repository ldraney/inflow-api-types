/**
 * StockTransfer schema validation tests
 *
 * Run with: npm run test:stock-transfers
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { StockTransferGET, StockTransferIncludes } from '../dist/stock-transfers/index.js';
import { z } from 'zod';

// Schema for array of stock transfers
const StockTransferListGET = z.array(StockTransferGET);

async function main() {
  console.log('='.repeat(60));
  console.log('StockTransfer Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List stock transfers (basic, no includes)
  const test1 = await runTest('GET /stock-transfers - List stock transfers (no includes)', async () => {
    const data = await apiGet('/stock-transfers');

    console.log(`  Received ${data.length} stock transfers`);

    if (data.length === 0) {
      console.log('  [WARN] No stock transfers returned - create some test data');
      return;
    }

    validateSchema(StockTransferListGET, data, 'StockTransferListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample: ${sample.transferNumber} (${sample.stockTransferId})`);
    console.log(`  Status: ${sample.status}`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single stock transfer
  const test2 = await runTest('GET /stock-transfers/{id} - Single stock transfer', async () => {
    // First get list to find a stock transfer ID
    const list = await apiGet('/stock-transfers');
    if (list.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    const stockTransferId = list[0].stockTransferId;
    const data = await apiGet(`/stock-transfers/${stockTransferId}`);

    validateSchema(StockTransferGET, data, 'StockTransferGET schema');
    console.log(`  Transfer: ${data.transferNumber}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Stock transfer with lines include
  const test3 = await runTest('GET /stock-transfers?include=lines', async () => {
    const data = await apiGet('/stock-transfers', {
      include: ['lines'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    validateSchema(StockTransferListGET, data, 'StockTransferListGET with lines');

    // Check that lines was populated
    const withLines = data.find(t => t.lines && t.lines.length > 0);
    if (withLines) {
      console.log(`  Found transfer with ${withLines.lines.length} lines`);
    } else {
      console.log('  [INFO] No stock transfers have lines');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Stock transfer with location includes
  const test4 = await runTest('GET /stock-transfers?include=fromLocation,toLocation', async () => {
    const data = await apiGet('/stock-transfers', {
      include: ['fromLocation', 'toLocation'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    validateSchema(StockTransferListGET, data, 'StockTransferListGET with locations');

    const sample = data[0];
    if (sample.fromLocation) {
      console.log(`  From: ${sample.fromLocation.name}`);
    }
    if (sample.toLocation) {
      console.log(`  To: ${sample.toLocation.name}`);
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Stock transfer with assignedToTeamMember include
  const test5 = await runTest('GET /stock-transfers?include=assignedToTeamMember', async () => {
    const data = await apiGet('/stock-transfers', {
      include: ['assignedToTeamMember'],
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    validateSchema(StockTransferListGET, data, 'StockTransferListGET with assignee');

    const withAssignee = data.find(t => t.assignedToTeamMember);
    if (withAssignee) {
      console.log(`  Found transfer assigned to: ${withAssignee.assignedToTeamMember.name}`);
    } else {
      console.log('  [INFO] No stock transfers have an assignee');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Filter by transferNumber
  const test6 = await runTest('GET /stock-transfers?filter[transferNumber]=...', async () => {
    // First get a transfer number
    const list = await apiGet('/stock-transfers');
    if (list.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    const transferNumber = list[0].transferNumber;
    const data = await apiGet('/stock-transfers', {
      filter: { transferNumber },
    });

    validateSchema(StockTransferListGET, data, 'StockTransferListGET filtered');
    console.log(`  Filter returned ${data.length} transfers`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Kitchen sink test (many includes)
  const test7 = await runTest('GET /stock-transfers - Kitchen sink test (many includes)', async () => {
    const includes = [
      'lines',
      'fromLocation',
      'toLocation',
      'assignedToTeamMember',
    ];

    const data = await apiGet('/stock-transfers', {
      include: includes,
    });

    if (data.length === 0) {
      console.log('  [SKIP] No stock transfers available');
      return;
    }

    const result = validateSchema(StockTransferListGET, data, 'StockTransferListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First stock transfer raw data (for debugging):');
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
