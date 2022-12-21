import { Module } from '@nestjs/common';
import { NotificationsController } from '@infra/http/controllers/notifications-controller';
import { AppService } from './app.service';
import { PrismaService } from '@infra/database/prisma.service';
import { HttpModule } from "@infra/http/http.module";
import { DatabaseModule } from "@infra/database/prisma/database.module";

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
