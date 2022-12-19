import { ISignInData, ISignUpData } from 'src/types';

import BaseAPI from './BaseAPI';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signUp(data: ISignUpData): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/signup', { data });
  }

  signIn(data: ISignInData): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/signin', { data });
  }

  user(): Promise<XMLHttpRequestResponseType> {
    return this.http.get('/user');
  }

  logout(): Promise<XMLHttpRequestResponseType> {
    return this.http.post('/logout');
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
