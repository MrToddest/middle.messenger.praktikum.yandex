import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import ChatFooter from '@/ui/components/chat-footer/chat-footer';
import ChatHeader from '@/ui/components/chat-header/chat-header';
import ChatList from '@/ui/components/chat-list/chat-list';
import Header from '@/ui/components/header/header';
import MessageView from '@/ui/components/message-view/message-view';

import template from './chat-active.tpl.pug';
import { data, messages } from './data';

class ChatPage extends Block {
  protected initChildren() {
    this.childrens.header = new Header();

    this.childrens.chats = new ChatList({
      items: data,
    });

    this.childrens.chatHeader = new ChatHeader();
    this.childrens.chatFooter = new ChatFooter();

    this.childrens.messageView = new MessageView({
      data: messages,
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
