import { z } from 'zod';
import { uuid } from '../primitives.js';
/**
 * Valid webhook event types
 */
export const WebhookEventType = z.enum([
    'customer.created',
    'customer.updated',
    'vendor.created',
    'vendor.updated',
    'purchaseOrder.created',
    'purchaseOrder.updated',
    'salesOrder.created',
    'salesOrder.updated',
    'product.created',
    'product.updated',
]);
/**
 * WebhookSubscription GET response schema
 * Endpoint: GET /{companyId}/webhooks
 * Endpoint: GET /{companyId}/webhooks/{webHookId}
 */
export const WebhookGET = z.object({
    webHookSubscriptionId: uuid.optional(),
    url: z.string().optional(),
    events: z.array(z.string()).optional(), // Array of event types
    secret: z.string().optional(), // Only returned at creation
});
/**
 * Webhook events description
 */
export const WebhookEvents = {
    'customer.created': { description: 'Triggered when a new customer is created' },
    'customer.updated': { description: 'Triggered when a customer is updated' },
    'vendor.created': { description: 'Triggered when a new vendor is created' },
    'vendor.updated': { description: 'Triggered when a vendor is updated' },
    'purchaseOrder.created': { description: 'Triggered when a new purchase order is created' },
    'purchaseOrder.updated': { description: 'Triggered when a purchase order is updated' },
    'salesOrder.created': { description: 'Triggered when a new sales order is created' },
    'salesOrder.updated': { description: 'Triggered when a sales order is updated' },
    'product.created': { description: 'Triggered when a new product is created' },
    'product.updated': { description: 'Triggered when a product is updated' },
};
