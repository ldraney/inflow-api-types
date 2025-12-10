/**
 * Vendor schema validation tests
 *
 * Run with: npm run test:vendors
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { VendorGET, VendorIncludes } from '../vendors/index.js';
import { z } from 'zod';

// Schema for array of vendors
const VendorListGET = z.array(VendorGET);

async function main() {
  console.log('='.repeat(60));
  console.log('Vendor Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List vendors (basic, no includes)
  const test1 = await runTest('GET /vendors - List vendors (no includes)', async () => {
    const data = await apiGet('/vendors', { filter: { isActive: true } });

    console.log(`  Received ${data.length} vendors`);

    if (data.length === 0) {
      console.log('  [WARN] No vendors returned - create some test data');
      return;
    }

    validateSchema(VendorListGET, data, 'VendorListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample vendor: ${sample.name} (${sample.vendorId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single vendor
  const test2 = await runTest('GET /vendors/{id} - Single vendor', async () => {
    // First get list to find a vendor ID
    const list = await apiGet('/vendors', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    const vendorId = list[0].vendorId;
    const data = await apiGet(`/vendors/${vendorId}`);

    validateSchema(VendorGET, data, 'VendorGET schema');
    console.log(`  Vendor: ${data.name}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Vendor with addresses include
  const test3 = await runTest('GET /vendors?include=addresses', async () => {
    const data = await apiGet('/vendors', {
      include: ['addresses'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    validateSchema(VendorListGET, data, 'VendorListGET with addresses');

    // Check that addresses was populated
    const withAddresses = data.find(v => v.addresses && v.addresses.length > 0);
    if (withAddresses) {
      console.log(`  Found vendor with ${withAddresses.addresses.length} addresses`);
    } else {
      console.log('  [INFO] No vendors have addresses');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Vendor with vendorItems include
  const test4 = await runTest('GET /vendors?include=vendorItems', async () => {
    const data = await apiGet('/vendors', {
      include: ['vendorItems'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    validateSchema(VendorListGET, data, 'VendorListGET with vendorItems');

    const withItems = data.find(v => v.vendorItems && v.vendorItems.length > 0);
    if (withItems) {
      console.log(`  Found vendor with ${withItems.vendorItems.length} vendor items`);
    } else {
      console.log('  [INFO] No vendors have vendor items');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Vendor with balances include
  const test5 = await runTest('GET /vendors?include=balances', async () => {
    const data = await apiGet('/vendors', {
      include: ['balances'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    validateSchema(VendorListGET, data, 'VendorListGET with balances');

    const withBalances = data.find(v => v.balances && v.balances.length > 0);
    if (withBalances) {
      console.log(`  Found vendor with ${withBalances.balances.length} balance entries`);
    } else {
      console.log('  [INFO] No vendors have balances');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Vendor with multiple includes
  const test6 = await runTest('GET /vendors?include=addresses,vendorItems,currency', async () => {
    const data = await apiGet('/vendors', {
      include: ['addresses', 'vendorItems', 'currency'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    validateSchema(VendorListGET, data, 'VendorListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} vendors with multiple includes`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Filter by isActive
  const test7 = await runTest('GET /vendors?filter[isActive]=true', async () => {
    const data = await apiGet('/vendors', {
      filter: { isActive: true },
    });

    validateSchema(VendorListGET, data, 'VendorListGET filtered by isActive');
    console.log(`  Found ${data.length} active vendors`);

    // Verify filter worked
    const inactive = data.find(v => v.isActive === false);
    if (inactive) {
      console.log('  [WARN] Found inactive vendor in results - filter may not be working');
    }
  });
  test7 ? passed++ : failed++;

  // Test 8: Smart search filter
  const test8 = await runTest('GET /vendors?filter[smart]=test', async () => {
    const data = await apiGet('/vendors', {
      filter: { smart: 'test' },
    });

    validateSchema(VendorListGET, data, 'VendorListGET with smart search');
    console.log(`  Smart search returned ${data.length} vendors`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Kitchen sink test
  const test9 = await runTest('GET /vendors - Kitchen sink test (many includes)', async () => {
    const includes = [
      'addresses',
      'vendorItems',
      'balances',
      'credits',
      'currency',
      'defaultPaymentTerms',
      'taxingScheme',
    ];

    const data = await apiGet('/vendors', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No vendors available');
      return;
    }

    const result = validateSchema(VendorListGET, data, 'VendorListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First vendor raw data (for debugging):');
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
