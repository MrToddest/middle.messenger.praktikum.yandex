import { TEvents } from 'src/types/common';

import { LOGIN, PASSWORD } from 'src/constants';

import Block from 'src/utils/Block/Block';

import Button from 'src/ui/elements/Button/Button';
import Link from 'src/ui/elements/Link/Link';
import FormField from 'src/ui/components/FormField/FormField';

import template from './SigninForm.tpl.pug';

interface ISigninForm {
  events?: TEvents;
}

class SigninForm extends Block {
  constructor(props: ISigninForm) {
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
      },
      label: 'Логин',
      name: 'login',
      validate: true,
    });

    this.childrens.password = new FormField({
      inputProps: {
        type: 'password',
        name: 'password',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      label: 'Пароль',
      name: 'password',
      validate: true,
    });

    this.childrens.link = new Link({
      url: '/signup',
      name: 'Нет аккаунта?',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Войти',
      text: 'Войти',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SigninForm;
