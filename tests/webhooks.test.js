/**
 * Webhook schema validation tests
 *
 * Run with: node tests/webhooks.test.js
 */

import { apiGet, validateSchema, runTest, stripReadOnlyFields } from './api.js';
import { WebhookGET } from '../dist/webhooks/index.js';
import { WebhookPUT, WebhookConstraints } from '../dist/webhooks/index.js';
import { z } from 'zod';

async function main() {
  console.log('='.repeat(60));
  console.log('Webhook Schema Validation Tests');
  console.log('='.repeat(60));

  let passed = 0;
  let failed = 0;

  // ============================================================================
  // Webhooks
  // ============================================================================
  const testWebhooks = await runTest('GET /webhooks - List webhook subscriptions', async () => {
    const data = await apiGet('/webhooks');
    console.log(`  Received ${data.length} webhook subscriptions`);

    const result = validateSchema(z.array(WebhookGET), data, 'WebhookGET[]');
    if (result.success && data.length > 0) {
      console.log(`  Sample: ${data[0].url}`);
      console.log(`  Events: ${data[0].events?.join(', ')}`);
    } else if (data.length === 0) {
      console.log('  No webhooks configured (this is fine)');
    }
  });
  testWebhooks ? passed++ : failed++;

  // ============================================================================
  // PUT Schema Validation Tests
  // ============================================================================
  console.log('\n' + '-'.repeat(60));
  console.log('PUT Schema Validation (from GET responses)');
  console.log('-'.repeat(60));

  const testPUT = await runTest('PUT schema - Webhook from GET', async () => {
    const data = await apiGet('/webhooks');
    if (data.length === 0) {
      console.log('  [SKIP] No webhooks configured');
      return;
    }

    // Strip read-only fields from first webhook
    const payload = stripReadOnlyFields(data[0], WebhookConstraints.readOnly);

    const result = validateSchema(WebhookPUT, payload, 'WebhookPUT from GET response');

    if (!result.success) {
      console.log('\n  Stripped payload (for debugging):');
      console.log(JSON.stringify(payload, null, 2).split('\n').map(l => '    ' + l).join('\n'));
    }
  });
  testPUT ? passed++ : failed++;

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
