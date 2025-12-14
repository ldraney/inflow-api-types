import { z } from 'zod';
import { uuid, decimal, rowversion, int32 } from '../primitives';
// ============================================================================
// Category
// Endpoints: GET /{companyId}/categories/{categoryId}
//            GET /{companyId}/categories
// ============================================================================
export const CategoryGET = z.object({
    categoryId: uuid,
    name: z.string().optional(),
    isDefault: z.boolean().optional(),
    parentCategoryId: uuid.nullable().optional(),
    parentCategory: z.lazy(() => CategoryGET).optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Location
// Endpoints: GET /{companyId}/locations/{locationId}
//            GET /{companyId}/locations
// ============================================================================
export const AddressSchema = z.object({
    addressLine1: z.string().optional(),
    addressLine2: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    postalCode: z.string().optional(),
    state: z.string().optional(),
}).optional();
export const LocationGET = z.object({
    locationId: uuid,
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    address: AddressSchema.nullable().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Currency
// Endpoints: GET /{companyId}/currencies/{currencyId}
//            GET /{companyId}/currencies
// ============================================================================
export const CurrencyConversionSchema = z.object({
    currencyConversionId: z.string().optional(),
    currencyId: uuid.optional(),
    exchangeRate: decimal.optional(),
    isManual: z.boolean().optional(),
    timestamp: rowversion.optional(),
});
export const CurrencyGET = z.object({
    currencyId: uuid,
    name: z.string().optional(),
    symbol: z.string().optional(),
    code: z.string().optional(),
    decimalPlaces: int32.optional(),
    decimalSeparator: z.string().optional(),
    thousandsSeparator: z.string().optional(),
    isSymbolFirst: z.boolean().optional(),
    isHome: z.boolean().optional(),
    currencyConversions: z.array(CurrencyConversionSchema).optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// PricingScheme
// Endpoints: GET /{companyId}/pricing-schemes/{pricingSchemeId}
//            GET /{companyId}/pricing-schemes
// ============================================================================
export const PricingSchemeGET = z.object({
    pricingSchemeId: uuid,
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    isTaxInclusive: z.boolean().optional(),
    currencyId: uuid.optional(),
    currency: CurrencyGET.optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// PaymentTerms
// Endpoints: GET /{companyId}/payment-terms/{paymentTermsId}
//            GET /{companyId}/payment-terms
// ============================================================================
export const PaymentTermsGET = z.object({
    paymentTermsId: uuid,
    name: z.string().optional(),
    daysDue: int32.optional(),
    isActive: z.boolean().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// TaxCode
// Endpoints: GET /{companyId}/tax-codes/{taxCodeId}
//            GET /{companyId}/tax-codes
// ============================================================================
export const TaxCodeGET = z.object({
    taxCodeId: uuid,
    name: z.string().optional(),
    tax1Rate: decimal.optional(),
    tax2Rate: decimal.optional(),
    isActive: z.boolean().optional(),
    taxingSchemeId: uuid.optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// TaxingScheme
// Endpoints: GET /{companyId}/taxing-schemes/{taxingSchemeId}
//            GET /{companyId}/taxing-schemes
// ============================================================================
export const TaxingSchemeGET = z.object({
    taxingSchemeId: uuid,
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    tax1Name: z.string().optional(),
    tax2Name: z.string().optional(),
    tax1OnShipping: z.boolean().optional(),
    tax2OnShipping: z.boolean().optional(),
    calculateTax2OnTax1: z.boolean().optional(),
    defaultTaxCodeId: uuid.optional(),
    defaultTaxCode: TaxCodeGET.optional(),
    taxCodes: z.array(TaxCodeGET).optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// OperationType
// Endpoints: GET /{companyId}/operation-types/{operationTypeId}
//            GET /{companyId}/operation-types
// ============================================================================
export const OperationTypeGET = z.object({
    operationTypeId: uuid,
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    isDefault: z.boolean().optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// AdjustmentReason
// Endpoints: GET /{companyId}/adjustment-reasons/{adjustmentReasonId}
//            GET /{companyId}/adjustment-reasons
// ============================================================================
export const AdjustmentReasonGET = z.object({
    adjustmentReasonId: uuid,
    name: z.string().optional(),
    isActive: z.boolean().optional(),
    isInternal: z.boolean().optional(), // Read-only, system-generated
});
// ============================================================================
// TeamMember
// Endpoints: GET /{companyId}/team-members (list only, no single-item endpoint)
// ============================================================================
/**
 * AccessRight - API returns PascalCase format like 'SalesOrderView', 'ProductEdit'
 * Note: swagger.json shows SCREAMING_SNAKE_CASE but API returns PascalCase
 */
export const AccessRight = z.string(); // API returns values like 'SalesOrderView', 'ProductEdit', etc.
export const TeamMemberGET = z.object({
    teamMemberId: uuid,
    name: z.string().optional(),
    email: z.string().optional(),
    isActive: z.boolean().optional(),
    isInternal: z.boolean().optional(),
    canBeSalesRep: z.boolean().optional(),
    accessAllLocations: z.boolean().optional(),
    accessLocationIds: z.array(uuid).optional(),
    accessRights: z.array(AccessRight).optional(),
});
// ============================================================================
// UnitOfMeasure (embedded only - no direct endpoint)
// ============================================================================
export const UnitOfMeasureSchema = z.object({
    name: z.string().optional(),
    conversionRatio: z.object({
        numerator: decimal.optional(),
        denominator: decimal.optional(),
    }).optional(),
});
