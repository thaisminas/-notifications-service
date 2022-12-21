import { Content } from "@application/entities/content";
import { Replace } from "@helpers/Replace";
import { randomUUID } from "node:crypto";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  //usa o replace para deixar opcional o campo de createAt no construtor
  constructor(props: Replace<NotificationProps, { createAt?: Date }>) {
    this._id = randomUUID();
    //verifica se tem a data, se nao tiver ele cria
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    }
  }

  public get id(){
    return this._id;
  }

  public set content(content: Content){
    this.props.content = content
  }

  public get content(): Content{
    return this.props.content;
  }

  public set recipientId(recipientId: string){
    this.props.recipientId = recipientId
  }

  public get recipientId(): string{
    return this.props.recipientId;
  }

  public set category(category: string){
    this.props.category = category
  }

  public get category(): string{
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined){
    this.props.readAt = readAt
  }

  public get readAt(): Date | null | undefined{
    return this.props.readAt;
  }

  public get createAt(): Date{
    return this.props.createAt;
  }

}