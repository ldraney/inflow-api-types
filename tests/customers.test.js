/**
 * Customer schema validation tests
 *
 * Run with: npm run test:customers
 *
 * These tests validate that our Zod schemas correctly parse
 * real API responses from the Inflow API.
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { CustomerGET, CustomerIncludes } from '../customers/index.js';
import { z } from 'zod';

// Schema for array of customers
const CustomerListGET = z.array(CustomerGET);

async function main() {
  console.log('='.repeat(60));
  console.log('Customer Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // Test 1: List customers (basic, no includes)
  const test1 = await runTest('GET /customers - List customers (no includes)', async () => {
    const data = await apiGet('/customers', { filter: { isActive: true } });

    console.log(`  Received ${data.length} customers`);

    if (data.length === 0) {
      console.log('  [WARN] No customers returned - create some test data');
      return;
    }

    validateSchema(CustomerListGET, data, 'CustomerListGET schema');

    // Show sample of what we got
    const sample = data[0];
    console.log(`  Sample customer: ${sample.name} (${sample.customerId})`);
  });
  test1 ? passed++ : failed++;

  // Test 2: Get single customer
  const test2 = await runTest('GET /customers/{id} - Single customer', async () => {
    // First get list to find a customer ID
    const list = await apiGet('/customers', { filter: { isActive: true } });
    if (list.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    const customerId = list[0].customerId;
    const data = await apiGet(`/customers/${customerId}`);

    validateSchema(CustomerGET, data, 'CustomerGET schema');
    console.log(`  Customer: ${data.name}`);
  });
  test2 ? passed++ : failed++;

  // Test 3: Customer with addresses include
  const test3 = await runTest('GET /customers?include=addresses', async () => {
    const data = await apiGet('/customers', {
      include: ['addresses'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    validateSchema(CustomerListGET, data, 'CustomerListGET with addresses');

    // Check that addresses was populated
    const withAddresses = data.find(c => c.addresses && c.addresses.length > 0);
    if (withAddresses) {
      console.log(`  Found customer with ${withAddresses.addresses.length} addresses`);
    } else {
      console.log('  [INFO] No customers have addresses');
    }
  });
  test3 ? passed++ : failed++;

  // Test 4: Customer with balances include
  const test4 = await runTest('GET /customers?include=balances', async () => {
    const data = await apiGet('/customers', {
      include: ['balances'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    validateSchema(CustomerListGET, data, 'CustomerListGET with balances');

    const withBalances = data.find(c => c.balances && c.balances.length > 0);
    if (withBalances) {
      console.log(`  Found customer with ${withBalances.balances.length} balance entries`);
    } else {
      console.log('  [INFO] No customers have balances');
    }
  });
  test4 ? passed++ : failed++;

  // Test 5: Customer with pricingScheme include
  const test5 = await runTest('GET /customers?include=pricingScheme', async () => {
    const data = await apiGet('/customers', {
      include: ['pricingScheme'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    validateSchema(CustomerListGET, data, 'CustomerListGET with pricingScheme');

    const withScheme = data.find(c => c.pricingScheme);
    if (withScheme) {
      console.log(`  Found customer with pricing scheme: ${withScheme.pricingScheme?.name}`);
    } else {
      console.log('  [INFO] No customers have pricing schemes');
    }
  });
  test5 ? passed++ : failed++;

  // Test 6: Customer with multiple includes
  const test6 = await runTest('GET /customers?include=addresses,balances,pricingScheme', async () => {
    const data = await apiGet('/customers', {
      include: ['addresses', 'balances', 'pricingScheme'],
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    validateSchema(CustomerListGET, data, 'CustomerListGET with multiple includes');
    console.log(`  Successfully parsed ${data.length} customers with multiple includes`);
  });
  test6 ? passed++ : failed++;

  // Test 7: Filter by isActive
  const test7 = await runTest('GET /customers?filter[isActive]=true', async () => {
    const data = await apiGet('/customers', {
      filter: { isActive: true },
    });

    validateSchema(CustomerListGET, data, 'CustomerListGET filtered by isActive');
    console.log(`  Found ${data.length} active customers`);

    // Verify filter worked
    const inactive = data.find(c => c.isActive === false);
    if (inactive) {
      console.log('  [WARN] Found inactive customer in results - filter may not be working');
    }
  });
  test7 ? passed++ : failed++;

  // Test 8: Smart search filter
  const test8 = await runTest('GET /customers?filter[smart]=test', async () => {
    const data = await apiGet('/customers', {
      filter: { smart: 'test' },
    });

    validateSchema(CustomerListGET, data, 'CustomerListGET with smart search');
    console.log(`  Smart search returned ${data.length} customers`);
  });
  test8 ? passed++ : failed++;

  // Test 9: Kitchen sink test
  const test9 = await runTest('GET /customers - Kitchen sink test (many includes)', async () => {
    const includes = [
      'addresses',
      'balances',
      'credits',
      'pricingScheme',
      'taxingScheme',
      'defaultPaymentTerms',
      'defaultLocation',
    ];

    const data = await apiGet('/customers', {
      include: includes,
      filter: { isActive: true },
    });

    if (data.length === 0) {
      console.log('  [SKIP] No customers available');
      return;
    }

    const result = validateSchema(CustomerListGET, data, 'CustomerListGET kitchen sink');

    if (!result.success) {
      // Log the raw data for debugging
      console.log('\n  First customer raw data (for debugging):');
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
