import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "@application/use-cases/cancel-notification";
import { Content } from "@application/entities/content";
import { Notification } from "@application/entities/notification";
import { NotificationNotFound } from "@application/use-cases/errors/notification-not-found";

describe('Cancel Notification', () =>  {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationsRepository)

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitacao de amizade!'),
      recipientId: 'exemple-recipient-id'
    })

    await notificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id
    })

    expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
  })

  it('should not be able to cancel a non existing notification', async ()=> {
    const notificationRepository = new InMemoryNotificationsRepository()
    const cancelNotification = new CancelNotification(notificationRepository)

    await expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id'
      });
    }).rejects.toThrow(NotificationNotFound)
  })
})