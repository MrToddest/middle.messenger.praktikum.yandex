import { IChatItem, TEvents } from 'src/types';

import Block from 'src/utils/Block/Block';
import { openModal } from 'src/utils/helpers';

import Button from 'src/ui/elements/Button/Button';

import template from './ChatList.tpl.pug';

import { withChats } from 'src/hoc';

interface IChatList {
  chats?: IChatItem[];
  events?: TEvents;
}

class ChatList extends Block {
  constructor(props: IChatList) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.addChat = new Button({
      type: 'button',
      name: 'addChat',
      text: 'Добавить чат',
      events: {
        click: () => openModal('addChat'),
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default withChats(ChatList);
