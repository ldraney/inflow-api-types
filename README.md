# inflow-api-types

Zod schema library for the [Inflow Inventory API](https://www.inflowinventory.com/). Provides typed, validated, importable schemas for all API entities.

## Installation

This is a private package. Install via git dependency:

```bash
# npm (HTTPS)
npm install git+https://github.com/ldraney/inflow-api-types.git

# npm (SSH)
npm install git+ssh://git@github.com:youruser/inflow-api-types.git

# yarn
yarn add git+https://github.com/ldraney/inflow-api-types.git
```

Or add directly to `package.json`:

```json
{
  "dependencies": {
    "inflow-api-types": "github:ldraney/inflow-api-types"
  }
}
```

To pin a specific version/commit:

```json
{
  "dependencies": {
    "inflow-api-types": "github:ldraney/inflow-api-types#v0.1.0"
  }
}
```

## Usage

```javascript
import { ProductGET, ProductPUT, ProductConstraints } from 'inflow-api-types/products';
import { VendorGET } from 'inflow-api-types/vendors';
import { CategoryGET } from 'inflow-api-types/reference';

// Validate GET response
const product = ProductGET.parse(apiResponse);

// Validate PUT request before sending
const payload = ProductPUT.parse(userInput);

// Check what's writable
const writableFields = Object.keys(ProductPUT.shape)
  .filter(k => !ProductConstraints.readOnly.includes(k));
```

## Available Imports

```javascript
// All schemas at once
import { ProductGET, VendorGET, CustomerGET, ... } from 'inflow-api-types';

// Or by subpath (tree-shakeable)
import { ProductGET, ProductPUT } from 'inflow-api-types/products';
import { VendorGET, VendorPUT } from 'inflow-api-types/vendors';
import { CustomerGET, CustomerPUT } from 'inflow-api-types/customers';
import { PurchaseOrderGET, PurchaseOrderPUT } from 'inflow-api-types/purchase-orders';
import { SalesOrderGET, SalesOrderPUT } from 'inflow-api-types/sales-orders';
import { ManufacturingOrderGET, ManufacturingOrderPUT } from 'inflow-api-types/manufacturing-orders';
import { StockTransferGET, StockTransferPUT } from 'inflow-api-types/stock-transfers';
import { StockAdjustmentGET, StockAdjustmentPUT } from 'inflow-api-types/stock-adjustments';
import { ProductCostAdjustmentGET, ProductCostAdjustmentPUT } from 'inflow-api-types/product-cost-adjustments';
import { StockCountGET, StockCountPUT } from 'inflow-api-types/stock-counts';
import { CountSheetGET, CountSheetPUT } from 'inflow-api-types/count-sheets';
import { StockroomScanGET, StockroomScanPUT } from 'inflow-api-types/stockroom-scans';
import { StockroomUserGET } from 'inflow-api-types/stockroom-users';
import { CustomFieldDefinitionGET } from 'inflow-api-types/custom-field-definitions';
import { WebhookGET, WebhookPUT } from 'inflow-api-types/webhooks';

// Reference entities (read-only lookups)
import {
  CategoryGET, LocationGET, CurrencyGET, PricingSchemeGET,
  PaymentTermsGET, TaxCodeGET, TaxingSchemeGET, OperationTypeGET,
  AdjustmentReasonGET, TeamMemberGET, UnitOfMeasureSchema
} from 'inflow-api-types/reference';

// Primitives
import { uuid, decimal, rowversion } from 'inflow-api-types/primitives';
```

## Schema Naming Convention

Each entity exports:

- `{Entity}GET` - Response schema from GET endpoints
- `{Entity}PUT` - Request schema for PUT endpoints (where applicable)
- `{Entity}Includes` - Available `?include=` query options
- `{Entity}Filters` - Available `?filter[x]=` query options
- `{Entity}Constraints` - Read-only, immutable, and required fields

## Documentation

See [CLAUDE.md](./CLAUDE.md) for detailed development documentation, roadmap, and lessons learned.

## License

MIT
