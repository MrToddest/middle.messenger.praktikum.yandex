import { IMessageItem } from 'src/types';

import { setFormat } from './setFormatDate';

export const transformDateInMsg = (msg: IMessageItem[] | IMessageItem) => {
  if (!Array.isArray(msg)) {
    const day = new Date(msg.time);

    msg.time = setFormat(day);
  } else {
    msg.map((item) => {
      const day = new Date(item.time);

      item.time = setFormat(day);
    });
  }
};
