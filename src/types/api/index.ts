import { Method } from 'src/constants';

export type Options = {
  method: Method;
  data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;

export interface ISignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISignInData {
  login: string;
  password: string;
}

export interface IPasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface IPasswordFormData extends IPasswordData {
  passwordCheck: string;
}
