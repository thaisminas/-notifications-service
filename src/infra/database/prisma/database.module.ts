import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/http/controllers/notifications-controller';
import { PrismaService } from "@infra/database/prisma.service";
import { NotificationsRepository } from "@application/repositories/notifications-repository";
import { PrismaNotificationsRepository } from "@infra/database/prisma/repositories/prisma-notifications-repository";

@Module({
  providers: [PrismaService, {
    provide: NotificationsRepository,
    useClass: PrismaNotificationsRepository
  }],
  exports: [
    NotificationsRepository,
  ]
})
export class DatabaseModule {}