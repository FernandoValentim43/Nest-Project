import { notificationContent } from './notification-content';
describe('** Notification Content **', () => {
  test('it should be able to crete a notification content', () => {
    const content = new notificationContent('teste');

    expect(content).toBeTruthy();
  });

  test('it should NOT be able to crete a notification content with less than 5 char', () => {
    expect(() => new notificationContent('aaa')).toThrow();
  });

  test('it should NOT be able to crete a notification content with more than 240 char', () => {
    expect(() => new notificationContent('a'.repeat(241))).toThrow();
  });
});
