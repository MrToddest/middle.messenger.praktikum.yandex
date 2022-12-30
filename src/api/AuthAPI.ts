import { ISignInData, ISignUpData } from 'src/types';

import BaseAPI from './BaseAPI';

export default class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signUp(data: ISignUpData): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.post('/signup', { data });
    } catch (error) {
      console.log('error', error)
    }
  }

  signIn(data: ISignInData): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.post('/signin', { data });
    } catch (error) {
      console.log('error', error)
    }
  }

  user(): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.get('/user');
    } catch (error) {
      console.log('error', error)
    }
  }

  logout(): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.post('/logout');
    } catch (error) {
      console.log('error', error)
    }
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
