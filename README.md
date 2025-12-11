# inflow-api-types

Zod schema library for the [Inflow Inventory API](https://www.inflowinventory.com/). Provides typed, validated, importable schemas for all 29 API entities.

## Installation

**No build step required.** This is pure JavaScript with Zod schemas - install and use immediately.

Install via git dependency:

```bash
# npm
npm install git+https://github.com/ldraney/inflow-api-types.git

# yarn
yarn add git+https://github.com/ldraney/inflow-api-types.git

# pnpm
pnpm add git+https://github.com/ldraney/inflow-api-types.git
```

Or add directly to `package.json`:

```json
{
  "dependencies": {
    "inflow-api-types": "github:ldraney/inflow-api-types"
  }
}
```

Pin a specific version:

```json
{
  "dependencies": {
    "inflow-api-types": "github:ldraney/inflow-api-types#v1.0.0"
  }
}
```

## Quick Start

```javascript
import { ProductGET, ProductPUT, ProductConstraints } from 'inflow-api-types/products';

// Validate API response
const response = await fetch(`${BASE_URL}/products/${id}`, { headers });
const data = await response.json();
const product = ProductGET.parse(data); // Throws if invalid

// Safe parsing (no throw)
const result = ProductGET.safeParse(data);
if (result.success) {
  console.log(result.data.name);
} else {
  console.error(result.error);
}

// Validate before PUT
const payload = ProductPUT.parse({
  productId: crypto.randomUUID(),
  name: 'New Product',
  itemType: 'stockedProduct',
});
await fetch(`${BASE_URL}/products`, {
  method: 'PUT',
  body: JSON.stringify(payload),
  headers,
});
```

## Using with AI Assistants (Claude, etc.)

When building Inflow-related projects with AI assistance, add this to your project's `CLAUDE.md` or equivalent instructions file:

```markdown
## Inflow API Integration

This project uses `inflow-api-types` for Inflow Inventory API validation.

### Key Resources
- Schemas: `node_modules/inflow-api-types/` - All Zod schemas
- API Docs: `node_modules/inflow-api-types/CLAUDE.md` - Detailed entity documentation
- Swagger: `node_modules/inflow-api-types/swagger.json` - OpenAPI spec (note: has inaccuracies)

### Schema Pattern
Each entity has:
- `{Entity}GET` - Response validation
- `{Entity}PUT` - Request validation
- `{Entity}Includes` - Available ?include= options
- `{Entity}Filters` - Available ?filter[x]= options
- `{Entity}Constraints` - Read-only/immutable fields

### Trust the Schemas
The schemas in this package have been tested against the live API.
When swagger.json conflicts with these schemas, trust the schemas.

### Common Gotchas
- Enum values are camelCase (e.g., 'stockedProduct' not 'StockedProduct')
- Decimal fields return as strings (e.g., "19.99" not 19.99)
- Many fields marked required in swagger are actually optional
- Some ?include= options don't work on certain entities
```

## Available Entities

### Core Business (GET + PUT)
| Entity | Import Path |
|--------|-------------|
| Product | `inflow-api-types/products` |
| Vendor | `inflow-api-types/vendors` |
| Customer | `inflow-api-types/customers` |
| Purchase Order | `inflow-api-types/purchase-orders` |
| Sales Order | `inflow-api-types/sales-orders` |
| Manufacturing Order | `inflow-api-types/manufacturing-orders` |

### Transactions (GET + PUT)
| Entity | Import Path |
|--------|-------------|
| Stock Transfer | `inflow-api-types/stock-transfers` |
| Stock Adjustment | `inflow-api-types/stock-adjustments` |
| Product Cost Adjustment | `inflow-api-types/product-cost-adjustments` |

### Inventory Operations (GET + PUT)
| Entity | Import Path |
|--------|-------------|
| Stock Count | `inflow-api-types/stock-counts` |
| Count Sheet | `inflow-api-types/count-sheets` |
| Stockroom Scan | `inflow-api-types/stockroom-scans` |
| Stockroom User | `inflow-api-types/stockroom-users` (GET only) |

### Configuration (GET + PUT)
| Entity | Import Path |
|--------|-------------|
| Custom Field Definition | `inflow-api-types/custom-field-definitions` |
| Custom Field Dropdown Options | `inflow-api-types/custom-field-dropdown-options` |
| Custom Fields | `inflow-api-types/custom-fields` |
| Webhook | `inflow-api-types/webhooks` |

### Reference (GET only)
| Entity | Import Path |
|--------|-------------|
| Category | `inflow-api-types/reference` |
| Location | `inflow-api-types/reference` |
| Currency | `inflow-api-types/reference` |
| Pricing Scheme | `inflow-api-types/reference` |
| Payment Terms | `inflow-api-types/reference` |
| Tax Code | `inflow-api-types/reference` |
| Taxing Scheme | `inflow-api-types/reference` |
| Operation Type | `inflow-api-types/reference` |
| Adjustment Reason | `inflow-api-types/reference` |
| Team Member | `inflow-api-types/reference` |
| Unit of Measure | `inflow-api-types/reference` |

### Reporting (GET + POST)
| Entity | Import Path |
|--------|-------------|
| Product Summary | `inflow-api-types/product-summary` |

## Common Patterns

### Working with Includes

```javascript
import { ProductGET, ProductIncludes } from 'inflow-api-types/products';

// Check available includes
console.log(ProductIncludes);
// {
//   inventoryLines: { description: '...', adds: ['inventoryLines', 'totalQuantityOnHand'] },
//   prices: { description: '...', adds: ['prices'] },
//   vendorItems: { description: '...', adds: ['vendorItems'] },
//   ...
// }

// Fetch with includes
const response = await fetch(
  `${BASE_URL}/products?include=inventoryLines,prices`,
  { headers }
);
const products = ProductGET.array().parse(await response.json());
```

### Working with Filters

```javascript
import { ProductFilters } from 'inflow-api-types/products';

// Check available filters
console.log(ProductFilters);
// {
//   name: { type: 'string', description: 'Filter by name' },
//   isActive: { type: 'boolean', description: 'Filter by active status' },
//   smart: { type: 'string', description: 'Smart search across multiple fields' },
//   ...
// }

// Fetch with filters
const response = await fetch(
  `${BASE_URL}/products?filter[isActive]=true&filter[smart]=widget`,
  { headers }
);
```

### Checking Constraints Before PUT

```javascript
import { ProductPUT, ProductConstraints } from 'inflow-api-types/products';

// See what's read-only (don't send these on PUT)
console.log(ProductConstraints.readOnly);
// ['lastModifiedDateTime', 'lastModifiedById', 'totalQuantityOnHand', 'cost', ...]

// See what's required for create vs update
console.log(ProductConstraints.required);
// { create: ['productId', 'name', 'itemType'], update: ['productId'] }

// See what can't change after creation
console.log(ProductConstraints.immutable);
// ['itemType', 'trackSerials']
```

### TypeScript Type Inference

```typescript
import { z } from 'zod';
import { ProductGET, ProductPUT } from 'inflow-api-types/products';

// Infer types from schemas
type Product = z.infer<typeof ProductGET>;
type ProductInput = z.infer<typeof ProductPUT>;

// Use in functions
function processProduct(product: Product) {
  console.log(product.name, product.sku);
}

async function createProduct(input: ProductInput) {
  const validated = ProductPUT.parse(input);
  // ... send to API
}
```

### Error Handling

```javascript
import { ProductGET } from 'inflow-api-types/products';
import { ZodError } from 'zod';

try {
  const product = ProductGET.parse(apiResponse);
} catch (error) {
  if (error instanceof ZodError) {
    // Schema validation failed
    console.error('Validation errors:', error.errors);
    // [{ path: ['name'], message: 'Required', code: 'invalid_type' }]
  } else {
    throw error;
  }
}
```

### Building an API Client

```javascript
import { z } from 'zod';
import {
  ProductGET,
  ProductPUT,
  ProductIncludes,
} from 'inflow-api-types/products';

class InflowClient {
  constructor(apiKey, companyId) {
    this.baseUrl = `https://cloudapi.inflowinventory.com/${companyId}`;
    this.headers = {
      Authorization: `Bearer ${apiKey}`,
      Accept: 'application/json;version=2025-06-24',
      'Content-Type': 'application/json',
    };
  }

  async getProduct(id, includes = []) {
    const url = new URL(`${this.baseUrl}/products/${id}`);
    if (includes.length) {
      url.searchParams.set('include', includes.join(','));
    }
    const res = await fetch(url, { headers: this.headers });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return ProductGET.parse(await res.json());
  }

  async upsertProduct(product) {
    const payload = ProductPUT.parse(product);
    const res = await fetch(`${this.baseUrl}/products`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return ProductGET.parse(await res.json());
  }
}
```

## API Reference

| Setting | Value |
|---------|-------|
| Base URL | `https://cloudapi.inflowinventory.com/{companyId}` |
| Auth | `Authorization: Bearer {API_KEY}` |
| Version | `Accept: application/json;version=2025-06-24` |
| Rate Limit | 60 requests/minute |

## Known API vs Swagger Discrepancies

The `swagger.json` included has known inaccuracies. These schemas reflect the **actual API behavior**:

| Issue | swagger.json | Actual API |
|-------|--------------|------------|
| Enum casing | `StockedProduct` | `stockedProduct` |
| Status values | `Open`, `InTransit` | `open`, `inTransit` |
| Custom field types | `Text`, `Dropdown` | `text`, `dropdown` |
| Decimal fields | `type: number` | Returns string `"19.99"` |
| Image URLs | Not nullable | Can be `null` |
| Undocumented fields | Missing | `trackLots`, `trackExpiry`, `lotId` |

## Development

```bash
# Run all tests (requires INFLOW_API_KEY and INFLOW_COMPANY_ID env vars)
npm test

# Run specific entity tests
npm run test:products
npm run test:vendors
```

## Documentation

See [CLAUDE.md](./CLAUDE.md) for:
- Complete entity roadmap
- Field-by-field schema documentation
- Lessons learned from API testing
- Development process

## License

MIT
