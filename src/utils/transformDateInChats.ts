import { IChatItem } from 'src/types';

import { setFormat } from './setFormatDate';

export const transformDateInChats = (chats: IChatItem[]) => {
  chats.map((chat) => {
    if (chat.last_message) {
      const day = new Date(chat.last_message.time);
      chat.last_message.time = setFormat(day);
    }
  });
};
