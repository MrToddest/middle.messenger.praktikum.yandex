import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Icon from '@/ui/elements/icon/icon';
import Input from '@/ui/elements/input/input';

import template from './message-form.tpl.pug';

import arrowLeft from '@/assets/icons/arrow-left.svg';
import { MESSAGE } from '@/constants';

interface IMessageForm {
  events?: TEvents;
}
class MessageForm extends Block {
  constructor(props: IMessageForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.input = new Input({
      type: 'text',
      name: 'message',
      placeholder: 'Сообщение',
      classes: 'message-form__text',
      required: true,
      pattern: MESSAGE,
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'send',
      classes: 'button--rounded button--back message-form__send',
      block: new Icon({
        id: arrowLeft,
        width: 24,
        height: 24,
      }),
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default MessageForm;
