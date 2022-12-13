import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Button from '@/ui/elements/button/button';
import Link from '@/ui/elements/link/link';
import FormField from '@/ui/components/form-field/form-field';

import template from './profile-change-info.tpl.pug';

import { EMAIL, LOGIN, NAME, PHONE } from '@/constants';

interface IProfileChangeInfo {
  events?: TEvents;
}
class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

  protected initChildren() {
    this.childrens.escLink = new Link({
      url: '/profile/profile.html',
      name: 'Отмена',
    });

    this.childrens.saveButton = new Button({
      type: 'submit',
      name: 'Сохранить',
      text: 'Сохранить',
    });

    this.childrens.email = new FormField({
      inputProps: {
        type: 'email',
        name: 'email',
        placeholder: 'pochta@yandex.ru',
        required: true,
        pattern: EMAIL,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.login = new FormField({
      inputProps: {
        type: 'text',
        name: 'login',
        placeholder: 'ivanivanov',
        required: true,
        minlength: 3,
        maxlength: 20,
        pattern: LOGIN,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.firstName = new FormField({
      inputProps: {
        type: 'text',
        name: 'first_name',
        placeholder: 'Иван',
        required: true,
        pattern: NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.secondName = new FormField({
      inputProps: {
        type: 'text',
        name: 'second_name',
        placeholder: 'Иванов',
        required: true,
        pattern: NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.displayName = new FormField({
      inputProps: {
        type: 'text',
        name: 'display_name',
        placeholder: 'Иван',
        required: true,
        pattern: NAME,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.phone = new FormField({
      inputProps: {
        type: 'tel',
        name: 'phone',
        placeholder: '+7 (909) 967 30 30',
        required: true,
        pattern: PHONE,
      },
      classes: 'profile__field',
      validate: true,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfileChangeInfo;
