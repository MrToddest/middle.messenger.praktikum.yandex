import { IPasswordFormData } from 'src/types';

import Block from 'src/utils/Block/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import UserController from 'src/controllers/UserController';

import Icon from 'src/ui/elements/Icon/Icon';
import ProfileChangePassword from 'src/ui/components/ProfileChangePassword/ProfileChangePassword';

import template from './PasswordPage.tpl.pug';

import arrowLeft from 'src/assets/icons/arrow-left.svg';

class PasswordPage extends Block {
  protected initChildren() {
    this.childrens.profileChangePassword = new ProfileChangePassword({
      events: {
        submit: (e: Event) => this.submitHandler(e),
      },
    });

    this.childrens.icon = new Icon({
      id: arrowLeft,
      width: 24,
      height: 24,
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    UserController.updatePassword(data as unknown as IPasswordFormData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default PasswordPage;
