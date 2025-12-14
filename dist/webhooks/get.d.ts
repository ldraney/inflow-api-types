import { z } from 'zod';
/**
 * Valid webhook event types
 */
export declare const WebhookEventType: z.ZodEnum<["customer.created", "customer.updated", "vendor.created", "vendor.updated", "purchaseOrder.created", "purchaseOrder.updated", "salesOrder.created", "salesOrder.updated", "product.created", "product.updated"]>;
/**
 * WebhookSubscription GET response schema
 * Endpoint: GET /{companyId}/webhooks
 * Endpoint: GET /{companyId}/webhooks/{webHookId}
 */
export declare const WebhookGET: z.ZodObject<{
    webHookSubscriptionId: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
    events: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    secret: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    webHookSubscriptionId?: string;
    url?: string;
    events?: string[];
    secret?: string;
}, {
    webHookSubscriptionId?: string;
    url?: string;
    events?: string[];
    secret?: string;
}>;
/**
 * Webhook events description
 */
export declare const WebhookEvents: {
    'customer.created': {
        description: string;
    };
    'customer.updated': {
        description: string;
    };
    'vendor.created': {
        description: string;
    };
    'vendor.updated': {
        description: string;
    };
    'purchaseOrder.created': {
        description: string;
    };
    'purchaseOrder.updated': {
        description: string;
    };
    'salesOrder.created': {
        description: string;
    };
    'salesOrder.updated': {
        description: string;
    };
    'product.created': {
        description: string;
    };
    'product.updated': {
        description: string;
    };
};
//# sourceMappingURL=get.d.ts.map