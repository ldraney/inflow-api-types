/**
 * Inflow API test utilities
 *
 * Uses inflow-client for HTTP with rate limiting.
 * Provides nice include/filter syntax and test helpers.
 *
 * Requires environment variables:
 *   INFLOW_API_KEY - Your API key
 *   INFLOW_COMPANY_ID - Your company UUID
 */

import { createClient } from 'inflow-client';

const BASE_URL = 'https://cloudapi.inflowinventory.com';
const API_VERSION = '2025-06-24';
const RATE_LIMIT_DELAY = 1200; // Match inflow-client's rate limiting

// Lazy-initialized client
let client = null;

export function getConfig() {
  const apiKey = process.env.INFLOW_API_KEY;
  const companyId = process.env.INFLOW_COMPANY_ID;

  if (!apiKey) {
    throw new Error('INFLOW_API_KEY environment variable is required');
  }
  if (!companyId) {
    throw new Error('INFLOW_COMPANY_ID environment variable is required');
  }

  return { apiKey, companyId };
}

function getClient() {
  if (!client) {
    client = createClient(getConfig());
  }
  return client;
}

/**
 * Transform nice include/filter/query options to flat query params
 */
function buildParams(options = {}) {
  const { include, filter, query } = options;
  const params = {};

  if (include) {
    params.include = Array.isArray(include) ? include.join(',') : include;
  }

  if (filter) {
    for (const [key, value] of Object.entries(filter)) {
      params[`filter[${key}]`] = typeof value === 'object' ? JSON.stringify(value) : value;
    }
  }

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        params[key] = value;
      }
    }
  }

  return params;
}

/**
 * Make a GET request to the Inflow API
 * Uses inflow-client with built-in rate limiting
 */
export async function apiGet(path, options = {}) {
  const params = buildParams(options);
  return getClient().get(path, params);
}

/**
 * Make a PUT request to the Inflow API
 * Uses inflow-client with built-in rate limiting
 */
export async function apiPut(path, body) {
  return getClient().put(path, body);
}

// Rate limiting for POST (inflow-client doesn't have POST)
let lastPostTime = 0;

/**
 * Make a POST request to the Inflow API
 * Implements own rate limiting since inflow-client doesn't support POST
 */
export async function apiPost(path, body) {
  const { apiKey, companyId } = getConfig();

  // Rate limiting
  const now = Date.now();
  const elapsed = now - lastPostTime;
  if (elapsed < RATE_LIMIT_DELAY) {
    await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY - elapsed));
  }
  lastPostTime = Date.now();

  const url = `${BASE_URL}/${companyId}${path}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': `application/json;version=${API_VERSION}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error ${response.status}: ${text}`);
  }

  return response.json();
}

/**
 * Test helper - validates data against a Zod schema and reports results
 */
export function validateSchema(schema, data, label) {
  const result = schema.safeParse(data);

  if (result.success) {
    console.log(`  [PASS] ${label}`);
    return { success: true, data: result.data };
  } else {
    console.log(`  [FAIL] ${label}`);
    console.log('  Errors:');
    for (const error of result.error.errors) {
      console.log(`    - ${error.path.join('.')}: ${error.message}`);
    }
    return { success: false, errors: result.error.errors };
  }
}

/**
 * Test helper - run a test and catch errors
 */
export async function runTest(name, fn) {
  console.log(`\nTest: ${name}`);
  try {
    await fn();
  } catch (error) {
    console.log(`  [ERROR] ${error.message}`);
    return false;
  }
  return true;
}

/**
 * Strip read-only fields from an object for PUT validation testing
 *
 * Takes a GET response and removes fields that cannot be sent in a PUT request.
 * This allows testing that PUT schemas accept payloads derived from real GET responses.
 *
 * @param {object} obj - The object to strip fields from
 * @param {string[]} readOnlyFields - Array of field names to remove
 * @returns {object} - New object with read-only fields removed
 */
export function stripReadOnlyFields(obj, readOnlyFields) {
  if (!obj || typeof obj !== 'object') return obj;

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (readOnlyFields.includes(key)) continue;
    result[key] = value;
  }
  return result;
}
