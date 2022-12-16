import { isNotEmpty } from 'class-validator';

export class CreateNotificationBody {
  @isNotEmpty()
  recipientId: string;

  content: string;

  category: string;
}
