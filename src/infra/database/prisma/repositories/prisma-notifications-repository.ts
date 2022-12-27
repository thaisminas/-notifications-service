import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "@infra/database/prisma.service";
import { Notification } from "@application/entities/notification";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "@infra/database/prisma/mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notifications.create({
      data: raw
    });
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notifications.findUnique({
      where: {
        id: notificationId,
      },
    });

    if (!notification) {
      return null;
    }

    // @ts-ignore
    return PrismaNotificationMapper.toDomain(notification);
  }

  async save(notification: Notification): Promise<void> {
    return Promise.resolve(undefined);
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return await this.prismaService.notifications.count({
      where: {
        recipientId,
      },
    });
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notifications.findMany({
      where: {
        recipientId,
      },
    });

    // @ts-ignore
    return notifications.map(PrismaNotificationMapper.toDomain(notifications));
  }

}