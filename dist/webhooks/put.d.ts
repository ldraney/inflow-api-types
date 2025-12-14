import { z } from 'zod';
/**
 * WebhookSubscription PUT request schema
 * Endpoint: PUT /{companyId}/webhooks
 *
 * Creates or updates a webhook subscription
 * Note: webHookSubscriptionId should be a generated GUID when creating
 */
export declare const WebhookPUT: z.ZodObject<{
    webHookSubscriptionId: z.ZodString;
    webHookSubscriptionRequestId: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
    events: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    webHookSubscriptionId?: string;
    url?: string;
    events?: string[];
    webHookSubscriptionRequestId?: string;
}, {
    webHookSubscriptionId?: string;
    url?: string;
    events?: string[];
    webHookSubscriptionRequestId?: string;
}>;
/**
 * Field constraints for Webhook
 */
export declare const WebhookConstraints: {
    readOnly: string[];
    immutable: any[];
    required: {
        create: string[];
        update: string[];
    };
};
/**
 * DELETE endpoint: DELETE /{companyId}/webhooks/{webHookId}
 * No request body required, just the webHookId in the path
 */
//# sourceMappingURL=put.d.ts.map