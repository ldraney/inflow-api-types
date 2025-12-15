/**
 * Reference entity schema validation tests
 *
 * Run with: node tests/reference.test.js
 */

import { apiGet, validateSchema, runTest } from './api.js';
import {
  CategoryGET,
  LocationGET,
  CurrencyGET,
  PricingSchemeGET,
  PaymentTermsGET,
  TaxCodeGET,
  TaxingSchemeGET,
  OperationTypeGET,
  AdjustmentReasonGET,
  TeamMemberGET,
} from '../dist/reference/index.js';
import { z } from 'zod';

async function main() {
  console.log('='.repeat(60));
  console.log('Reference Entity Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // ============================================================================
  // Category
  // ============================================================================
  const testCategory = await runTest('GET /categories - List categories', async () => {
    const data = await apiGet('/categories');
    console.log(`  Received ${data.length} categories`);

    const result = validateSchema(z.array(CategoryGET), data, 'CategoryGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].categoryId})`);
    }
  });
  testCategory ? passed++ : failed++;

  // ============================================================================
  // Location
  // ============================================================================
  const testLocation = await runTest('GET /locations - List locations', async () => {
    const data = await apiGet('/locations');
    console.log(`  Received ${data.length} locations`);

    const result = validateSchema(z.array(LocationGET), data, 'LocationGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].locationId})`);
    }
  });
  testLocation ? passed++ : failed++;

  // ============================================================================
  // Currency
  // ============================================================================
  const testCurrency = await runTest('GET /currencies - List currencies', async () => {
    const data = await apiGet('/currencies');
    console.log(`  Received ${data.length} currencies`);

    const result = validateSchema(z.array(CurrencyGET), data, 'CurrencyGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].currencyId})`);
    }
  });
  testCurrency ? passed++ : failed++;

  // ============================================================================
  // PricingScheme
  // ============================================================================
  const testPricingScheme = await runTest('GET /pricing-schemes - List pricing schemes', async () => {
    const data = await apiGet('/pricing-schemes');
    console.log(`  Received ${data.length} pricing schemes`);

    const result = validateSchema(z.array(PricingSchemeGET), data, 'PricingSchemeGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].pricingSchemeId})`);
    }
  });
  testPricingScheme ? passed++ : failed++;

  // ============================================================================
  // PaymentTerms
  // ============================================================================
  const testPaymentTerms = await runTest('GET /payment-terms - List payment terms', async () => {
    const data = await apiGet('/payment-terms');
    console.log(`  Received ${data.length} payment terms`);

    const result = validateSchema(z.array(PaymentTermsGET), data, 'PaymentTermsGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].paymentTermsId})`);
    }
  });
  testPaymentTerms ? passed++ : failed++;

  // ============================================================================
  // TaxCode
  // ============================================================================
  const testTaxCode = await runTest('GET /tax-codes - List tax codes', async () => {
    const data = await apiGet('/tax-codes');
    console.log(`  Received ${data.length} tax codes`);

    const result = validateSchema(z.array(TaxCodeGET), data, 'TaxCodeGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].taxCodeId})`);
    }
  });
  testTaxCode ? passed++ : failed++;

  // ============================================================================
  // TaxingScheme
  // ============================================================================
  const testTaxingScheme = await runTest('GET /taxing-schemes - List taxing schemes', async () => {
    const data = await apiGet('/taxing-schemes');
    console.log(`  Received ${data.length} taxing schemes`);

    const result = validateSchema(z.array(TaxingSchemeGET), data, 'TaxingSchemeGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].taxingSchemeId})`);
    }
  });
  testTaxingScheme ? passed++ : failed++;

  // ============================================================================
  // OperationType
  // ============================================================================
  const testOperationType = await runTest('GET /operation-types - List operation types', async () => {
    const data = await apiGet('/operation-types');
    console.log(`  Received ${data.length} operation types`);

    const result = validateSchema(z.array(OperationTypeGET), data, 'OperationTypeGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].operationTypeId})`);
    }
  });
  testOperationType ? passed++ : failed++;

  // ============================================================================
  // AdjustmentReason
  // ============================================================================
  const testAdjustmentReason = await runTest('GET /adjustment-reasons - List adjustment reasons', async () => {
    const data = await apiGet('/adjustment-reasons');
    console.log(`  Received ${data.length} adjustment reasons`);

    const result = validateSchema(z.array(AdjustmentReasonGET), data, 'AdjustmentReasonGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].adjustmentReasonId})`);
    }
  });
  testAdjustmentReason ? passed++ : failed++;

  // ============================================================================
  // TeamMember
  // ============================================================================
  const testTeamMember = await runTest('GET /team-members - List team members', async () => {
    const data = await apiGet('/team-members');
    console.log(`  Received ${data.length} team members`);

    const result = validateSchema(z.array(TeamMemberGET), data, 'TeamMemberGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].name} (${data[0].teamMemberId})`);
    }
  });
  testTeamMember ? passed++ : failed++;

  // ============================================================================
  // Summary
  // ============================================================================
  console.log('\n' + '='.repeat(60));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(60));

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
