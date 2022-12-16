import { Replace } from "src/helpers/Replace";
import { notificationContent } from "./notification-content";


export interface NotificationProps {
  recipientId: string;
  content: notificationContent; //custom value
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps,  {createdAt?: Date}>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  //getters and setters

  public set content(content: notificationContent) {
    this.props.content = content;
  }

  public get content(): notificationContent {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category() {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
