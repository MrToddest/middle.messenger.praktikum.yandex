export interface IUser {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  phone: string;
  id?: number;
  avatar?: string;
  display_name?: string;
}

export interface IUserSearchRequest {
  login: string;
}
