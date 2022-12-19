import { TEvents } from 'src/types/common';

import { EMAIL, LOGIN, NAME, PASSWORD, PHONE } from 'src/constants';

import Block from 'src/utils/Block/Block';

import Button from 'src/ui/elements/Button/Button';
import Link from 'src/ui/elements/Link/Link';
import FormField from 'src/ui/components/FormField/FormField';

import template from './SignupForm.tpl.pug';

interface ISignupForm {
  events?: TEvents;
}

class SignupForm extends Block {
  constructor(props: ISignupForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.email = new FormField({
      inputProps: {
        type: 'email',
        name: 'email',
        required: true,
        pattern: EMAIL,
      },
      label: 'Почта',
      name: 'email',
      validate: true,
    });

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

    this.childrens.firstName = new FormField({
      inputProps: {
        type: 'text',
        name: 'first_name',
        required: true,
        pattern: NAME,
      },
      label: 'Имя',
      name: 'first_name',
      validate: true,
    });

    this.childrens.secondName = new FormField({
      inputProps: {
        type: 'text',
        name: 'second_name',
        required: true,
        pattern: NAME,
      },
      label: 'Фамилия',
      name: 'second_name',
      validate: true,
    });

    this.childrens.phone = new FormField({
      inputProps: {
        type: 'tel',
        name: 'phone',
        required: true,
        pattern: PHONE,
      },
      label: 'Телефон',
      name: 'phone',
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

    this.childrens.passwordCheck = new FormField({
      inputProps: {
        type: 'password',
        name: 'passwordCheck',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      label: 'Пароль (еще раз)',
      name: 'passwordCheck',
      validate: true,
    });

    this.childrens.link = new Link({
      url: '/signin',
      name: 'Войти',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'Зарегистрироваться',
      text: 'Зарегистрироваться',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default SignupForm;
