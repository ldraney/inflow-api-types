# inflow-api-types

Zod schema library for the Inflow Inventory API. One job: map `swagger.json` → typed, validated, importable Zod schemas.

## Purpose

Turn this:
```javascript
// Hope you read swagger.json correctly
const product = await api.get('/products/123');
```

Into this:
```javascript
import { ProductGET } from 'inflow-api-types/products';
const product = ProductGET.parse(await api.get('/products/123'));
// Autocomplete works. Validation works. Types inferred.
```

## Source of Truth

`swagger.json` - Inflow Cloud API OpenAPI 3.0.4 spec (version 2025-06-24)

## Structure

```
inflow-api-types/
├── index.js              # Re-exports everything
├── primitives.js         # uuid, decimal, rowversion, shared types
├── products/
│   ├── index.js          # Re-exports get.js, put.js
│   ├── get.js            # ProductGET schema, includes, filters
│   └── put.js            # ProductPUT schema, constraints
├── vendors/
├── purchase-orders/
├── manufacturing-orders/
├── reference/            # Category, Location, Currency, etc.
├── swagger.json          # Source (do not edit)
└── CLAUDE.md
```

## Process

For each entity:

1. **Find in swagger.json** - locate the schema under `#/components/schemas/{Entity}`
2. **Identify endpoints** - GET single, GET list, PUT (upsert)
3. **Map fields** - type, required/optional, nullable, format
4. **Identify includes** - what `?include=` options exist, what they add
5. **Identify filters** - what `?filter[x]=` options exist
6. **Document constraints** - read-only fields, immutable fields, nested array IDs
7. **Write Zod schemas** - GET (response), PUT (request), metadata objects
8. **Test** - validate against real API responses if possible

## Conventions

### File Format

```javascript
// products/get.js
import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';

/**
 * Product GET response schema
 * Endpoint: GET /{companyId}/products/{productId}
 * Endpoint: GET /{companyId}/products (returns array)
 */
export const ProductGET = z.object({
  productId: uuid,
  name: z.string(),
  // ...
});

/**
 * Available includes for ?include= query parameter
 */
export const ProductIncludes = {
  inventoryLines: {
    description: 'Inventory quantities per location',
    adds: ['inventoryLines', 'totalQuantityOnHand'],
    nested: ['location'],
  },
  // ...
};

/**
 * Available filters for ?filter[x]= query parameter
 */
export const ProductFilters = {
  name: { type: 'string', description: 'Filter by name' },
  isActive: { type: 'boolean', description: 'Filter by active status' },
  // ...
};
```

```javascript
// products/put.js
import { z } from 'zod';
import { uuid, decimal, rowversion } from '../primitives.js';

/**
 * Product PUT request schema
 * Endpoint: PUT /{companyId}/products
 */
export const ProductPUT = z.object({
  productId: uuid,  // Required - generate new for insert, existing for update
  name: z.string(),
  // ...
});

/**
 * Field constraints for Product
 */
export const ProductConstraints = {
  readOnly: ['lastModifiedDateTime', 'lastModifiedById', 'totalQuantityOnHand', 'isManufacturable', 'cost'],
  immutable: ['itemType', 'trackSerials'],
  required: {
    create: ['productId', 'name', 'itemType'],
    update: ['productId'],
  },
  nestedWithIds: ['prices', 'vendorItems', 'itemBoms', 'reorderSettings'],
};
```

### Naming

- `{Entity}GET` - response schema from GET endpoints
- `{Entity}PUT` - request schema for PUT endpoints
- `{Entity}Includes` - available ?include= options
- `{Entity}Filters` - available ?filter[x]= options
- `{Entity}Constraints` - read-only, immutable, required fields

### Types

Use primitives from `primitives.js`:
- `uuid` - GUID strings
- `decimal` - numeric strings ("19.99")
- `rowversion` - timestamp for optimistic locking

## Progress

### Core Entities

| Entity | swagger.json | get.js | put.js | Tested |
|--------|--------------|--------|--------|--------|
| Product | lines 5586-6273 | [ ] | [ ] | [ ] |
| Vendor | TBD | [ ] | [ ] | [ ] |
| PurchaseOrder | TBD | [ ] | [ ] | [ ] |
| ManufacturingOrder | TBD | [ ] | [ ] | [ ] |

### Reference Entities

| Entity | swagger.json | schema | Tested |
|--------|--------------|--------|--------|
| Category | TBD | [ ] | [ ] |
| Location | TBD | [ ] | [ ] |
| Currency | TBD | [ ] | [ ] |
| PricingScheme | TBD | [ ] | [ ] |
| PaymentTerms | TBD | [ ] | [ ] |
| TaxCode | TBD | [ ] | [ ] |
| TaxingScheme | TBD | [ ] | [ ] |
| OperationType | TBD | [ ] | [ ] |
| AdjustmentReason | TBD | [ ] | [ ] |
| UnitOfMeasure | TBD | [ ] | [ ] |
| TeamMember | TBD | [ ] | [ ] |

### Infrastructure

| File | Status |
|------|--------|
| primitives.js | [ ] |
| index.js | [ ] |

## API Reference

Base URL: `https://cloudapi.inflowinventory.com/{companyId}`

Rate limit: 60 requests/minute

Auth header: `Authorization: Bearer {API_KEY}`

Version header: `Accept: application/json;version=2025-06-24`

## Usage (downstream)

```javascript
import { ProductGET, ProductPUT, ProductConstraints } from 'inflow-api-types/products';
import { VendorGET } from 'inflow-api-types/vendors';

// Validate GET response
const product = ProductGET.parse(apiResponse);

// Validate PUT request before sending
const payload = ProductPUT.parse(userInput);

// Check what's writable
const writableFields = Object.keys(ProductPUT.shape)
  .filter(k => !ProductConstraints.readOnly.includes(k));
```

## Out of Scope

This repo does NOT:
- Make API calls
- Store data
- Implement business logic

It ONLY defines schemas. Consumers handle the rest.
