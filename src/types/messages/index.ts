export enum MessageType {
  DATE = 'date',
  INBOX = 'inbox',
  OUTBOX = 'outbox',
}

export interface IMessageItem {
  id: number;
  user_id: number;
  chat_id: number;
  type: 'message';
  time: string;
  content: string;
  is_read: boolean;
  file: null;
}
