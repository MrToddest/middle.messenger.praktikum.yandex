import { TEvents } from 'src/types/common';

import { EMAIL, LOGIN, NAME, PHONE } from 'src/constants';

import Block from 'src/utils/Block/Block';
import { getAvatarPlug } from 'src/utils/getAvatarPlug';

import Button from 'src/ui/elements/Button/Button';
import Link from 'src/ui/elements/Link/Link';
import FormField from 'src/ui/components/FormField/FormField';

import template from './ProfileChangeInfo.tpl.pug';

import { withUser } from 'src/hoc/withUser';
import { getProfileItems } from 'src/utils/getProfileItems';

interface IProfileChangeInfo {
  events?: TEvents;
}
class ProfileChangeInfo extends Block {
  constructor(props: IProfileChangeInfo) {
    super(props);
  }

  protected initChildren() {
    this.childrens.escLink = new Link({
      url: '/profile',
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
    return this.compile(template, {
      items: getProfileItems(this.props),
      plug: getAvatarPlug(this.props),
      ...this.props,
    });
  }
}

export default withUser(ProfileChangeInfo);
