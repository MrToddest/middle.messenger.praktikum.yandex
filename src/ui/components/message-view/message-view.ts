import { IMessageItem } from '@/types';

import Block from '@/utils/Block';

import template from './message-view.tpl.pug';

interface IMessageView {
  data: IMessageItem[];
}

class MessageView extends Block {
  constructor(props: IMessageView) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default MessageView;
