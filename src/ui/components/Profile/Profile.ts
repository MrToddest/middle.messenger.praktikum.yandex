import Block from 'src/utils/Block/Block';
import { getAvatarPlug } from 'src/utils/getAvatarPlug';
import { getProfileItems } from 'src/utils/getProfileItems';
import { openModal } from 'src/utils/helpers';

import AuthController from 'src/controllers/AuthController';

import Button from 'src/ui/elements/Button/Button';
import Link from 'src/ui/elements/Link/Link';

import template from './Profile.tpl.pug';

import { withUser } from 'src/hoc/withUser';

class Profile extends Block {
  protected initChildren() {
    this.childrens.changeInfoLink = new Link({
      url: '/settings',
      name: 'Изменить данные',
    });

    this.childrens.changePasswordLink = new Link({
      url: '/password',
      name: 'Изменить пароль',
    });

    this.childrens.changeAvatarButton = new Button({
      type: 'button',
      name: 'changeAvatar',
      text: 'Поменять аватар',
      classes: 'button--avatar',
      events: {
        click: () => openModal('changeAvatar'),
      },
    });

    this.childrens.exitLink = new Button({
      type: 'button',
      name: 'logout',
      text: 'Выйти',
      classes: 'button--link button--link-red',
      events: {
        click: () => AuthController.logout(),
      },
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

export default withUser(Profile);
