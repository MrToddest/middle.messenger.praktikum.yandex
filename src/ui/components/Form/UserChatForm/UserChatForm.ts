import { TEvents } from 'src/types';

import { LOGIN } from 'src/constants';

import Block from 'src/utils/Block/Block';

import Button from 'src/ui/elements/Button/Button';
import FormField from 'src/ui/components/FormField/FormField';

import template from './UserChatForm.tpl.pug';

import { withActiveChat } from 'src/hoc';

interface IUserChatForm {
  buttonText: string;
  chatId?: string;
  events?: TEvents;
}

class UserChatForm extends Block {
  constructor(props: IUserChatForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.login = new FormField({
      inputProps: {
        type: 'text',
        name: 'login',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: LOGIN,
        placeholder: '',
      },
      label: 'Логин',
      name: 'login',
      validate: true,
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'submit',
      text: this.props.buttonText,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props.chat });
  }
}

export default withActiveChat(UserChatForm);
