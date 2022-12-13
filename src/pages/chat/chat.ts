import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import ChatList from '@/ui/components/chat-list/chat-list';
import Header from '@/ui/components/header/header';

import template from './chat.tpl.pug';
import { data } from './data';
class ChatPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({
      items: data,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ChatPage();

  renderDOM('#app', page);
});
