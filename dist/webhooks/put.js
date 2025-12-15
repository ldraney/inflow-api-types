import { z } from 'zod';
import { uuid } from '../primitives.js';
/**
 * WebhookSubscription PUT request schema
 * Endpoint: PUT /{companyId}/webhooks
 *
 * Creates or updates a webhook subscription
 * Note: webHookSubscriptionId should be a generated GUID when creating
 */
export const WebhookPUT = z.object({
    webHookSubscriptionId: uuid, // Required - generate new GUID for insert
    webHookSubscriptionRequestId: uuid.optional(), // Optional additional ID
    url: z.string().url(),
    events: z.array(z.string()), // Array of event types to subscribe to
});
/**
 * Field constraints for Webhook
 */
export const WebhookConstraints = {
    readOnly: ['secret'], // Secret is only returned at creation, cannot be set
    immutable: [],
    required: {
        create: ['webHookSubscriptionId', 'url', 'events'],
        update: ['webHookSubscriptionId', 'url', 'events'],
    },
};
/**
 * DELETE endpoint: DELETE /{companyId}/webhooks/{webHookId}
 * No request body required, just the webHookId in the path
 */
