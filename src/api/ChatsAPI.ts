import { IChatCreate, IChatUsersRequest, Indexed } from 'src/types';

import { queryString } from 'src/utils/queryString';

import BaseAPI from './BaseAPI';

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(query: Indexed): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.get(queryString(query));
    } catch (error) {
      console.log('error', error)
    }
  }

  addChat(data: IChatCreate): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.post('', { data });
    } catch (error) {
      console.log('error', error)
    }
  }

  deleteChat(id: string): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.delete('', { data: { chatId: id } });
    } catch (error) {
      console.log('error', error)
    }
  }

  addUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.put('/users', { data });
    } catch (error) {
      console.log('error', error)
    }
  }

  deleteUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.delete('/users', { data });
    } catch (error) {
      console.log('error', error)
    }
  }

  getToken(id: string): Promise<XMLHttpRequestResponseType> {
    try {
      return this.http.post(`/token/${id}`);
    } catch (error) {
      console.log('error', error)
    }
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
