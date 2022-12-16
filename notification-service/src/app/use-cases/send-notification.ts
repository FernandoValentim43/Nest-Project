import { Notification } from "../entites/notification";
import { notificationContent } from "../entites/notification-content";
import { NotificationRepository } from "../repositories/notifications-repositorie";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

export class SendNotification {
    constructor(private notificationsRepository: NotificationRepository) {

    }


    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const {recipientId, content, category } = request
        const notification = new Notification({
            recipientId, 
            content: new notificationContent(content),
            category,
        })

        await this.notificationsRepository.create(notification)

        return {
            notification,
        };
    }
}