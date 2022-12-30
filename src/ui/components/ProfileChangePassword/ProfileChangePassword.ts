import { TEvents } from 'src/types/common';

import { PASSWORD } from 'src/constants';

import Block from 'src/utils/Block/Block';
import { getAvatarPlug } from 'src/utils/getAvatarPlug';

import Button from 'src/ui/elements/Button/Button';
import Link from 'src/ui/elements/Link/Link';
import FormField from 'src/ui/components/FormField/FormField';

import template from './ProfileChangePassword.tpl.pug';

import { withUser } from 'src/hoc/withUser';
import { IUser } from 'src/types';

interface IProfileChangePassword  {
  events?: TEvents;
}
class ProfileChangePassword extends Block<IProfileChangePassword> {
  constructor(props: IProfileChangePassword) {
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

    this.childrens.oldPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'oldPassword',
        placeholder: '•••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPassword = new FormField({
      inputProps: {
        type: 'password',
        name: 'newPassword',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });

    this.childrens.newPasswordRepeat = new FormField({
      inputProps: {
        type: 'password',
        name: 'passwordCheck',
        placeholder: '•••••••••••',
        required: true,
        minlength: 8,
        maxlength: 40,
        pattern: PASSWORD,
      },
      classes: 'profile__field',
      validate: true,
    });
  }

  render() {
    return this.compile(template, {
      plug: getAvatarPlug(this.props as IUser),
      ...this.props,
    });
  }
}

export default withUser(ProfileChangePassword);
