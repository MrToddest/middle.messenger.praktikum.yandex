import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Link from '@/ui/elements/link/link';
import FormField from '@/ui/components/form-field/form-field';

import template from './signin-form.tpl.pug';

import { LOGIN, PASSWORD } from '@/constants';

interface ISigninForm {
  url: string;
  method: string;
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
      url: '/signup/signup.html',
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
