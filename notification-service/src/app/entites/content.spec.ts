import { notificationContent } from "./notification-content"

test('it should be able to crete a notification content', () => {
    const content = new notificationContent('teste')

    expect(content).toBeTruthy();
})