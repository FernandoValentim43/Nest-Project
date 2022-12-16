import { Notification } from './notification';
import { notificationContent } from './notification-content';

describe('** Notification **', () => {
  test('it should be able to crete a notification', () => {
    const notification = new Notification({
      content: new notificationContent('teste notificação'),
      category: 'teste',
      recipientId: 'teste Id',
    });

    expect(notification).toBeTruthy();
  });
});
