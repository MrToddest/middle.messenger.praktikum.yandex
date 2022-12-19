import { IMessageItem } from 'src/types';

export const sortMessages = (messages: IMessageItem[]) => {
  if (Array.isArray(messages)) {
    return messages.sort((a, b) => {
      return Date.parse(a.time) - Date.parse(b.time);
    });
  }

  return messages;
};
