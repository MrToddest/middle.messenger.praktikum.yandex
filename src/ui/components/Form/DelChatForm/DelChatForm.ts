import { TEvents } from 'src/types';

import Block from 'src/utils/Block/Block';
import { closeModal } from 'src/utils/helpers';

import ChatsController from 'src/controllers/ChatsController';

import Button from 'src/ui/elements/Button/Button';

import template from './DelChatForm.tpl.pug';

import { withActiveChat } from 'src/hoc';

interface IDelChatForm {
  modalId: string;
  chatId: any;
  events?: TEvents;
}

class DelChatForm extends Block {
  constructor(props: IDelChatForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.cancel = new Button({
      type: 'button',
      name: 'cancel',
      text: 'Отмена',
      classes: 'button--gray',
      events: {
        click: () => closeModal(this.props.modalId),
      },
    });

    this.childrens.accept = new Button({
      type: 'button',
      name: 'accept',
      text: 'Удалить',
      events: {
        click: () => this.delChatHandler(this.props.chat.id),
      },
    });
  }

  delChatHandler(chatId: string) {
    ChatsController.deleteChat(chatId);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(DelChatForm);
