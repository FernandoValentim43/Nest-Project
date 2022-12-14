import { SendNotification } from "./send-notification"

describe("Send Notification", ()=> {
    it("Should be able to send a notification", async () => {
        const sendNotification = new SendNotification()
        
        const { notification } = await sendNotification.execute({
            content: 'This is a notification',
            category: 'test',
            recipientId: 'test'
        })

        expect(notification).toBeTruthy

    })
})