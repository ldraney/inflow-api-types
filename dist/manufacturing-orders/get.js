import { z } from 'zod';
import { uuid, decimal, decimalNullable, rowversion, dateTime, int32, int64 } from '../primitives.js';
import { QuantityWithUom } from '../purchase-orders/get.js';
// ============================================================================
// Enums
// ============================================================================
/**
 * Manufacturing order status
 */
export const MOStatus = z.enum([
    'Open', 'InProgress', 'Completed',
    'open', 'inProgress', 'completed',
]);
// ============================================================================
// Nested Schemas
// ============================================================================
/**
 * Attachment schema for manufacturing orders
 */
export const MOAttachmentSchema = z.object({
    attachmentId: uuid.optional(),
    fileName: z.string().optional(),
    fileSize: int64.optional(),
    attachmentUrl: z.string().optional(),
    lastModDttm: dateTime.optional(),
    lastModifiedById: uuid.optional(),
});
/**
 * Manufacturing order operation - tasks required to complete assembly
 */
export const ManufacturingOrderOperationSchema = z.object({
    manufacturingOrderOperationId: uuid.optional(),
    operationTypeId: uuid.optional(),
    operationType: z.object({
        operationTypeId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    instructions: z.string().optional(),
    remarks: z.string().optional(),
    cost: decimalNullable.optional(),
    perHourCost: decimalNullable.optional(),
    seconds: decimalNullable.optional(),
    minutes: decimalNullable.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Manufacturing order line - BOM definition (finished product + raw materials)
 */
export const ManufacturingOrderLineSchema = z.object({
    manufacturingOrderLineId: uuid.optional(),
    manufacturingOrderId: uuid.optional(),
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    description: z.string().optional(),
    quantity: QuantityWithUom,
    parentManufacturingOrderLineId: uuid.nullable().optional(),
    manufacturingOrderOperations: z.array(ManufacturingOrderOperationSchema).optional(),
    manufacturingOrderLines: z.lazy(() => z.array(ManufacturingOrderLineSchema)).optional(),
    timestamp: rowversion.optional(),
});
/**
 * Manufacturing order pick line - raw materials picked from warehouse
 */
export const ManufacturingOrderPickLineSchema = z.object({
    manufacturingOrderPickLineId: uuid.optional(),
    manufacturingOrderId: uuid.optional(),
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    description: z.string().optional(),
    quantity: QuantityWithUom,
    locationId: uuid.optional(),
    location: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    sublocation: z.string().optional(),
    pickDate: dateTime.optional(),
    timestamp: rowversion.optional(),
});
/**
 * Manufacturing order put-away line - finished products put into warehouse
 */
export const ManufacturingOrderPutLineSchema = z.object({
    manufacturingOrderPutLineId: uuid.optional(),
    manufacturingOrderId: uuid.optional(),
    productId: uuid.optional(),
    product: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    description: z.string().optional(),
    quantity: QuantityWithUom,
    locationId: uuid.optional(),
    location: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    sublocation: z.string().optional(),
    timestamp: rowversion.optional(),
});
/**
 * Manufacturing order pick matching - matches pick lines to order lines
 */
export const ManufacturingOrderPickMatchingSchema = z.object({
    manufacturingOrderPickMatchingId: uuid.optional(),
    manufacturingOrderId: uuid.optional(),
    manufacturingOrderLineId: uuid.optional(),
    manufacturingOrderPickLineId: uuid.optional(),
    matchedQuantity: decimal.optional(),
    serial: z.string().optional(),
    version: int32.optional(),
    lastModifiedById: uuid.optional(),
    timestamp: rowversion.optional(),
});
// ============================================================================
// Main ManufacturingOrder GET Schema
// ============================================================================
/**
 * ManufacturingOrder GET response schema
 * Endpoint: GET /{companyId}/manufacturing-orders/{manufacturingOrderId}
 * Endpoint: GET /{companyId}/manufacturing-orders (returns array)
 */
export const ManufacturingOrderGET = z.object({
    // Primary identifier
    manufacturingOrderId: uuid,
    // Order identification
    manufacturingOrderNumber: z.string().optional(),
    // Status
    status: MOStatus.optional(),
    isCancelled: z.boolean().optional(),
    isCompleted: z.boolean().optional(),
    isPrioritized: z.boolean().optional(),
    // Dates
    orderDate: dateTime.optional(),
    dueDate: dateTime.nullable().optional(),
    completedDate: dateTime.nullable().optional(),
    // Primary finished product
    primaryFinishedProductId: uuid.nullable().optional(),
    primaryFinishedProduct: z.object({
        productId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Location
    locationId: uuid.nullable().optional(),
    location: z.object({
        locationId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Currency
    currencyId: uuid.nullable().optional(),
    currency: z.object({
        currencyId: uuid.optional(),
        name: z.string().optional(),
        isoCode: z.string().optional(),
        symbol: z.string().optional(),
    }).nullable().optional(),
    // Costs
    extraCosts: decimalNullable.optional(),
    // Team member
    assignedToTeamMemberId: uuid.nullable().optional(),
    assignedToTeamMember: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Remarks
    remarks: z.string().optional(),
    pickRemarks: z.string().optional(),
    putAwayRemarks: z.string().optional(),
    // BOM lines (finished products + raw materials)
    lines: z.array(ManufacturingOrderLineSchema).optional(),
    // Pick lines (raw materials picked)
    pickLines: z.array(ManufacturingOrderPickLineSchema).optional(),
    // Put-away lines (finished products put away)
    putLines: z.array(ManufacturingOrderPutLineSchema).optional(),
    // Pick matchings (link pick lines to order lines)
    pickMatchings: z.array(ManufacturingOrderPickMatchingSchema).optional(),
    // Attachments (read-only)
    attachments: z.array(MOAttachmentSchema).optional(),
    // Custom fields
    customFields: z.record(z.unknown()).optional(),
    // Audit fields (read-only)
    lastModifiedById: uuid.optional(),
    lastModifiedBy: z.object({
        teamMemberId: uuid.optional(),
        name: z.string().optional(),
    }).nullable().optional(),
    // Deprecated fields
    splitPartNumber: int32.nullable().optional(),
    version: int32.optional(),
    // Concurrency
    timestamp: rowversion.optional(),
});
/**
 * ManufacturingOrder list response - array wrapper
 */
export const ManufacturingOrderListGET = z.array(ManufacturingOrderGET);
// ============================================================================
// Includes & Filters Metadata
// ============================================================================
/**
 * Available includes for ?include= query parameter
 */
export const ManufacturingOrderIncludes = {
    primaryFinishedProduct: {
        description: 'Primary finished product details',
        adds: ['primaryFinishedProduct'],
        nested: [],
    },
    lines: {
        description: 'BOM lines (finished products and raw materials)',
        adds: ['lines'],
        nested: ['product', 'manufacturingOrderOperations'],
    },
    pickLines: {
        description: 'Pick lines (raw materials picked)',
        adds: ['pickLines'],
        nested: ['product', 'location'],
    },
    putLines: {
        description: 'Put-away lines (finished products)',
        adds: ['putLines'],
        nested: ['product', 'location'],
    },
    pickMatchings: {
        description: 'Pick matchings (link picks to order lines)',
        adds: ['pickMatchings'],
        nested: [],
    },
    attachments: {
        description: 'File attachments (read-only)',
        adds: ['attachments'],
        nested: ['lastModifiedBy'],
    },
    location: {
        description: 'Default location',
        adds: ['location'],
        nested: [],
    },
    currency: {
        description: 'Order currency',
        adds: ['currency'],
        nested: [],
    },
    assignedToTeamMember: {
        description: 'Assigned team member',
        adds: ['assignedToTeamMember'],
        nested: [],
    },
    customFields: {
        description: 'Custom field values',
        adds: ['customFields'],
        nested: [],
    },
    lastModifiedBy: {
        description: 'Team member who last modified',
        adds: ['lastModifiedBy'],
        nested: [],
    },
};
/**
 * Available filters for ?filter[x]= query parameter
 */
export const ManufacturingOrderFilters = {
    manufacturingOrderNumber: {
        type: 'string',
        description: 'Filter by order number',
    },
    status: {
        type: 'array',
        description: 'Filter by status (Open, InProgress, Completed)',
    },
    isPrioritized: {
        type: 'boolean',
        description: 'Filter by prioritized flag',
    },
    orderDate: {
        type: 'dateRange',
        description: 'Filter by order date range',
        example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
    },
    dueDate: {
        type: 'dateRange',
        description: 'Filter by due date range',
        example: '{"fromDate":"2022-01-01","toDate":"2023-01-01"}',
    },
    locationId: {
        type: 'uuid',
        description: 'Filter by location ID',
    },
    assignedTo: {
        type: 'uuid',
        description: 'Filter by assigned team member ID',
    },
    isActive: {
        type: 'boolean',
        description: 'Filter by active status (excludes cancelled orders when true)',
    },
};
