import { TEvents } from 'src/types/common';

import { MESSAGE } from 'src/constants';

import Block from 'src/utils/Block/Block';

import Button from 'src/ui/elements/Button/Button';
import Icon from 'src/ui/elements/Icon/Icon';
import Input from 'src/ui/elements/Input/Input';

import template from './MessageForm.tpl.pug';

import arrowLeft from 'src/assets/icons/arrow-left.svg';

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
        id: arrowLeft.id,
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
