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

class ChatList extends Block<Record<string, any>> {
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
    console.log('сын собаки', this.props)
    return this.compile(template, { ...this.props }, 'assa');
  }
}

export default withChats(ChatList);
