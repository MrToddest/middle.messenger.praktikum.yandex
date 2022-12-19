import { ISignInData } from 'src/types';

import Block from 'src/utils/Block/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import AuthController from 'src/controllers/AuthController';

import SigninForm from 'src/ui/components/Form/SigninForm/SigninForm';

import template from './SignInPage.tpl.pug';

class SignInPage extends Block {
  protected initChildren() {
    this.childrens.form = new SigninForm({
      events: {
        submit: (e) => this.submitHandler(e),
      },
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = formDataToObject(formData);

    AuthController.signIn(data as unknown as ISignInData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SignInPage;
