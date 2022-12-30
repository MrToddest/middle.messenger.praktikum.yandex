import { ISignUpFormData } from 'src/types';

import Block from 'src/utils/Block/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import AuthController from 'src/controllers/AuthController';

import SignupForm from 'src/ui/components/Form/SignupForm/SignupForm';

import template from './SignUpPage.tpl.pug';

class SignUpPage extends Block<Record<string, any>> {
  protected initChildren() {
    this.childrens.form = new SignupForm({
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

    AuthController.signUp(data as unknown as ISignUpFormData);
  }

  render() {
    return this.compile(template, {});
  }
}

export default SignUpPage;
