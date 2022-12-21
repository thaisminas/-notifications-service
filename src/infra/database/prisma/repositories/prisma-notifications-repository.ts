import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "@infra/database/prisma.service";
import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notifications.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createAt
      }
    })
  }

}