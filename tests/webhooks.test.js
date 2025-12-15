/**
 * Webhook schema validation tests
 *
 * Run with: node tests/webhooks.test.js
 */

import { apiGet, validateSchema, runTest } from './api.js';
import { WebhookGET } from '../dist/webhooks/index.js';
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
