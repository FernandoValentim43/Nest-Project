import { Notification } from "../entites/notification";
import { notificationContent } from "../entites/notification-content";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

export class SendNotification {
    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const {recipientId, content, category } = request
        const notification = new Notification({
            recipientId, 
            content: new notificationContent(content),
            category,
        })

        return {
            notification,
        };
    }
}