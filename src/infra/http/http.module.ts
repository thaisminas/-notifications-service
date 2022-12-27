import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/http/controllers/notifications-controller';
import { SendNotification } from "@application/use-cases/send-notification";
import { DatabaseModule } from "@infra/database/prisma/database.module";
import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { ReadNotification } from "@application/use-cases/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";
import { GetRecipientNotifications } from "@application/use-cases/get-recipient-notification";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification, CancelNotification, CountRecipientNotifications, ReadNotification, UnreadNotification, GetRecipientNotifications],
})
export class HttpModule {}