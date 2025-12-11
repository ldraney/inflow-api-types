/**
 * Inflow API test utilities
 *
 * Requires environment variables:
 *   INFLOW_API_KEY - Your API key
 *   INFLOW_COMPANY_ID - Your company UUID
 */

const BASE_URL = 'https://cloudapi.inflowinventory.com';
const API_VERSION = '2025-06-24';

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

/**
 * Make a GET request to the Inflow API
 */
export async function apiGet(path, options = {}) {
  const { apiKey, companyId } = getConfig();
  const { include, filter, query } = options;

  let url = `${BASE_URL}/${companyId}${path}`;
  const params = new URLSearchParams();

  if (include) {
    params.set('include', Array.isArray(include) ? include.join(',') : include);
  }

  if (filter) {
    for (const [key, value] of Object.entries(filter)) {
      params.set(`filter[${key}]`, typeof value === 'object' ? JSON.stringify(value) : value);
    }
  }

  // Support arbitrary query params (like locationId for product summary)
  if (query) {
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null) {
        params.set(key, value);
      }
    }
  }

  const queryString = params.toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': `application/json;version=${API_VERSION}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`API error ${response.status}: ${text}`);
  }

  return response.json();
}

/**
 * Make a PUT request to the Inflow API
 */
export async function apiPut(path, body) {
  const { apiKey, companyId } = getConfig();

  const url = `${BASE_URL}/${companyId}${path}`;

  const response = await fetch(url, {
    method: 'PUT',
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
 * Make a POST request to the Inflow API
 */
export async function apiPost(path, body) {
  const { apiKey, companyId } = getConfig();

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
