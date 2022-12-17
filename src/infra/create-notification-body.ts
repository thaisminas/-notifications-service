import { isNotEmpty } from "class-validator";


export class CreateNotificationBody {

  @isNotEmpty(teste: 'nao pode ser vazio')
  recipientId: string;

  content: string;

  category: string;
}
