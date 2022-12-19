import { IUser } from '../user';

export interface IChatItem {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message?: ILastMessage;
}

export interface IChatCreate {
  title: string;
}

export interface IChatUsersRequest {
  users: number[];
  chatId: number;
}

export interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}
