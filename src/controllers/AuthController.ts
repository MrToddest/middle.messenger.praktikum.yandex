import { ISignInData, ISignUpFormData } from 'src/types';

import { PagePaths } from 'src/constants';

import { getPathname } from 'src/utils/getPathname/getPathname';

import AuthAPI from 'src/api/AuthAPI';

import router from 'src/router/router';

import store from 'src/store/Store';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: ISignUpFormData) {
    if (data.password !== data.passwordCheck) {
      throw new Error('Пароли не совпадают');
    }

    const { passwordCheck, ...signUpData } = data;

    await this.api.signUp(signUpData);
    await this.getUser();

    router.go(PagePaths.Profile);
  }

  async signIn(data: ISignInData) {
    await this.api.signIn(data);
    await this.getUser();

    router.go(PagePaths.Messanger);
  }

  async getUser() {
    const path = getPathname();

    try {
      const user = await this.api.user();

      store.set('currentUser', user);

      switch (path) {
        case PagePaths.Signin:
        case PagePaths.Signup:
        case PagePaths.Index:
          router.go(PagePaths.Profile);
          break;
        default:
          break;
      }
    } catch (error) {
      switch (path) {
        case PagePaths.Index:
        case PagePaths.Signin:
        case PagePaths.Signup:
          break;
        default:
          router.go(PagePaths.Signin);
          break;
      }
    }
  }

  async logout() {
    await this.api.logout();

    router.go(PagePaths.Index);
  }
}

export default new AuthController();
