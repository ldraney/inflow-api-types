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

## Roadmap

### Phase 1: Reference Entities (Read-only, simple schemas)

These are lookup tables - typically GET-only, no complex nested structures.

| Entity | Schema Lines | Endpoints | get.js | Tested | Notes |
|--------|-------------|-----------|--------|--------|-------|
| Category | 3265 | GET single, GET list | [x] | [x] | Has parentCategoryId for hierarchy |
| Location | 4524 | GET single, GET list | [x] | [x] | Has suggested-sublocations endpoints |
| Currency | 3468 | GET single, GET list | [x] | [x] | |
| PricingScheme | 5485 | GET single, GET list | [x] | [x] | Referenced by Product prices |
| PaymentTerms | 5438 | GET single, GET list | [x] | [x] | |
| TaxCode | 9567 | GET single, GET list | [x] | [x] | |
| TaxingScheme | 9614 | GET single, GET list | [x] | [x] | |
| OperationType | 5377 | GET single, GET list | [x] | [x] | For manufacturing operations |
| AdjustmentReason | 3174 | GET single, GET list | [x] | [x] | For stock adjustments |
| TeamMember | 9725 | GET list only | [x] | [x] | No single-item endpoint |
| UnitOfMeasure | 9823 | (embedded only) | [x] | [x] | No direct endpoint, embedded in other entities |

### Phase 2: Core Business Entities (Full CRUD, complex schemas)

These have GET, PUT, nested arrays, includes, and filters.

| Entity | Schema Lines | Endpoints | get.js | put.js | Tested | Notes |
|--------|-------------|-----------|--------|--------|--------|-------|
| Product | 5586-6273 | GET, PUT | [x] | [x] | [x] | Complete |
| Vendor | 9852 | GET, PUT (lines 2845-2932) | [ ] | [ ] | [ ] | vendorItems link to Products |
| Customer | 3767 | GET, PUT (lines 284-370) | [ ] | [ ] | [ ] | Similar to Vendor |
| PurchaseOrder | 6664 | GET, PUT (lines 1620-1747) | [ ] | [ ] | [ ] | Complex: lines, receiving |
| SalesOrder | 7623 | GET, PUT (lines 1748-1875) | [ ] | [ ] | [ ] | Complex: lines, picking, shipping |
| ManufacturingOrder | 4556 | GET, PUT (lines 866-1004) | [ ] | [ ] | [ ] | Complex: BOM, operations, picking, putaway |

### Phase 3: Transaction Entities

| Entity | Schema Lines | Endpoints | get.js | put.js | Tested | Notes |
|--------|-------------|-----------|--------|--------|--------|-------|
| StockTransfer | 9218 | GET, PUT (lines 2460-2587) | [ ] | [ ] | [ ] | Move inventory between locations |
| StockAdjustment | 8765 | GET, PUT (lines 1876-2003) | [ ] | [ ] | [ ] | Adjust quantities, requires AdjustmentReason |
| ProductCostAdjustment | 6330 | GET, PUT (lines 1492-1619) | [ ] | [ ] | [ ] | Adjust product costs |

### Infrastructure

| File | Status | Notes |
|------|--------|-------|
| primitives.js | [x] | uuid, decimal, rowversion, enums |
| index.js | [x] | Re-exports all modules |
| package.json | [x] | ES modules, zod dependency |
| tests/api.js | [x] | API utilities for testing |
| reference/index.js | [ ] | Will re-export all reference entities |

---

## Lessons Learned

### swagger.json vs Reality

The swagger.json documentation has inaccuracies. Always test against the live API.

| Issue | swagger.json says | API actually returns |
|-------|------------------|---------------------|
| Enum casing | `StockedProduct`, `FixedPrice` | `stockedProduct`, `fixedPrice` |
| Nullable fields | not always marked | `defaultImage`, image URLs can be `null` |
| Undocumented fields | missing | `trackLots`, `trackExpiry`, `shelfLifeDays`, `expiryNotificationDays`, `lotId` |
| AccessRights format | `SALES_SalesOrder_View` | `SalesOrderView` (PascalCase, no prefixes) |

### Pattern for Each Entity

1. Read swagger.json schema section
2. Find endpoint paths and extract includes/filters from descriptions
3. Write Zod schemas (GET response, PUT request if applicable)
4. Write test file
5. Run tests, fix schemas based on actual API responses
6. Update this roadmap
7. Commit

---

## Progress Summary

- **Phase 1 (Reference):** 11/11 complete
- **Phase 2 (Core):** 1/6 complete (Product done)
- **Phase 3 (Transactions):** 0/3 complete
- **Total:** 12/20 entities complete

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
