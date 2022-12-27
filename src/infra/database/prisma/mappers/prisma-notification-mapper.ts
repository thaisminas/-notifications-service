import { Notification } from "@application/entities/notification";
import { Content } from '@application/entities/content';

import {} from '@prisma/client';
import { not } from "rxjs/internal/util/not";

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification){
    return {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createAt
    }
  }

  static toDomain(notification: Notification) {
    return new Notification(
      {
        category: notification.category,
        content: notification.content,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
      },
      notification.id,
    );
  }
}