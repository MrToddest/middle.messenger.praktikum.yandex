import { IPasswordFormData, IUser, IUserSearchRequest } from 'src/types';

import { PagePaths } from 'src/constants';

import { closeModal } from 'src/utils/helpers';

import UserAPI from 'src/api/UserAPI';

import router from 'src/router/router';

import store from 'src/store/Store';

class UserController {
  private api: UserAPI;

  constructor() {
    this.api = new UserAPI();
  }

  async updateProfile(data: IUser) {
    const newUser = await this.api.updateProfile(data);

    store.set('currentUser', newUser);

    router.go(PagePaths.Profile);
  }

  async updatePassword(data: IPasswordFormData) {
    if (data.newPassword !== data.passwordCheck) {
      throw new Error('Пароли не совпадают');
    }

    const { passwordCheck, ...updatePasswordData } = data;

    await this.api.updatePassword(updatePasswordData);

    router.go(PagePaths.Profile);
  }

  async updateAvatar(data: FormData) {
    const response = (await this.api.updateAvatar(data)) as unknown as IUser;

    store.set('currentUser.avatar', response.avatar);

    closeModal('changeAvatar');
  }

  async searchUser(data: IUserSearchRequest) {
    return await this.api.search(data);
  }
}

export default new UserController();
