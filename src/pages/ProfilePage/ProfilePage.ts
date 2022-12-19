import Block from 'src/utils/Block/Block';
import { closeModal } from 'src/utils/helpers';

import UserController from 'src/controllers/UserController';

import Icon from 'src/ui/elements/Icon/Icon';
import ChangeAvatarForm from 'src/ui/components/Form/ChangeAvatarForm/ChangeAvatarForm';
import ModalBackdrop from 'src/ui/components/ModalBackdrop/ModalBackdrop';
import Profile from 'src/ui/components/Profile/Profile';

import template from './ProfilePage.tpl.pug';

import arrowLeft from 'src/assets/icons/arrow-left.svg';

class ProfilePage extends Block {
  protected initChildren() {
    this.childrens.profile = new Profile({});

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });

    this.childrens.changeAvatar = new ModalBackdrop({
      id: 'changeAvatar',
      title: 'Загрузите файл',
      events: {
        click: (e) => closeModal('changeAvatar', e),
      },
      modalContent: new ChangeAvatarForm({
        events: {
          submit: (e) => this.submitHandler(e),
        },
      }),
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    UserController.updateAvatar(formData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default ProfilePage;
