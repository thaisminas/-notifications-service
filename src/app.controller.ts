import { Body, Controller, Get, Post } from "@nestjs/common";
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import any = jasmine.any;
import { CreateNotificationBody } from "./create-notification-body";

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  getHello(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.prismaService.notifications.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    await this.prismaService.notifications.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
