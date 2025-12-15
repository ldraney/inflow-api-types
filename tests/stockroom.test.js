/**
 * Stockroom schema validation tests (StockroomScan, StockroomUser)
 *
 * Run with: npm run test:stockroom
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 *
 * Note: StockroomScan and StockroomUser are related to the inFlow
 * Stockroom mobile app. These endpoints may not have data if the
 * mobile app is not being used.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { StockroomScanGET, StockroomScanFilters } from '../dist/stockroom-scans/index.js';
import { StockroomUserGET, StockroomUserFilters } from '../dist/stockroom-users/index.js';
import { z } from 'zod';

// Schema for arrays
const StockroomScanListGET = z.array(StockroomScanGET);
const StockroomUserListGET = z.array(StockroomUserGET);

async function main() {
  console.log('='.repeat(60));
  console.log('Stockroom Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // =========================================================================
  // Stockroom Scans
  // =========================================================================

  // Test 1: List stockroom scans
  const test1 = await runTest('GET /stockroom-scans - List stockroom scans', async () => {
    try {
      const data = await apiGet('/stockroom-scans');

      console.log(`  Received ${data.length} stockroom scans`);

      if (data.length === 0) {
        console.log('  [INFO] No stockroom scans found (mobile app may not be in use)');
        return;
      }

      validateSchema(StockroomScanListGET, data, 'StockroomScanListGET schema');

      // Show sample of what we got
      const sample = data[0];
      console.log(`  Sample attributes:`, Object.keys(sample.attributes || {}));
    } catch (err) {
      if (err.message.includes('403') && err.message.includes('Stockroom')) {
        console.log('  [SKIP] Account does not have Stockroom feature enabled');
        return;
      }
      throw err;
    }
  });
  test1 ? passed++ : failed++;

  // =========================================================================
  // Stockroom Users
  // =========================================================================

  // Test 2: List stockroom users
  const test2 = await runTest('GET /stockroom-users - List stockroom users', async () => {
    const data = await apiGet('/stockroom-users');

    console.log(`  Received ${data.length} stockroom users`);

    if (data.length === 0) {
      console.log('  [INFO] No stockroom users found (mobile app may not be configured)');
      return;
    }

    validateSchema(StockroomUserListGET, data, 'StockroomUserListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample attributes:`, Object.keys(sample.attributes || {}));
  });
  test2 ? passed++ : failed++;

  // Test 3: Get single stockroom user
  const test3 = await runTest('GET /stockroom-users/{id} - Single stockroom user', async () => {
    // First get list to find a user ID
    const list = await apiGet('/stockroom-users');
    if (list.length === 0) {
      console.log('  [SKIP] No stockroom users available');
      return;
    }

    // Try to find the stockroomUserId in attributes
    const sample = list[0];
    const userId = sample.attributes?.stockroomUserId;
    if (!userId) {
      console.log('  [SKIP] Could not determine stockroomUserId from attributes');
      return;
    }

    const data = await apiGet(`/stockroom-users/${userId}`);

    validateSchema(StockroomUserGET, data, 'StockroomUserGET schema');
    console.log(`  User attributes:`, Object.keys(data.attributes || {}));
  });
  test3 ? passed++ : failed++;

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
