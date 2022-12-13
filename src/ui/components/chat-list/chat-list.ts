import { IChatItem } from '@/types';

import Block from '@/utils/Block';

import template from './chat-list.tpl.pug';

interface IChatList {
  items: IChatItem[];
}

class ChatList extends Block {
  constructor(props: IChatList) {
    super(props);
  }
  render() {
    return this.compile(template, { ...this.props });
  }
}

export default ChatList;
