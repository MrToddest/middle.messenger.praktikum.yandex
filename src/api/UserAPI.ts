import { IPasswordData, IUser, IUserSearchRequest } from 'src/types';

import BaseAPI from './BaseAPI';

export default class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  updateProfile(data: IUser): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/profile', { data });
  }

  updateAvatar(data: FormData): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/profile/avatar', { data });
  }

  updatePassword(data: IPasswordData): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/password', { data });
  }

  get(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.get(`/${id}`);
  }

  search(data: IUserSearchRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/search', { data });
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
