export enum MessageType {
  DATE = 'date',
  INBOX = 'inbox',
  OUTBOX = 'outbox',
}

export interface IMessageItem {
  type: MessageType;
  value: string;
  date?: string;
  sended?: boolean;
}
