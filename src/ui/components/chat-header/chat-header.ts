import Block from '@/utils/Block';

import Icon from '@/ui/elements/icon/icon';

import template from './chat-header.tpl.pug';

import iconSettings from '@/assets/icons/icon-settings.svg';

class ChatHeader extends Block {
  protected initChildren() {
    this.childrens.icon = new Icon({
      id: iconSettings,
      width: 3,
      height: 16,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatHeader;
