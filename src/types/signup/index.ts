import { ISignUpData } from '../api';

export interface ISignUpFormData extends ISignUpData {
  passwordCheck: string;
}
