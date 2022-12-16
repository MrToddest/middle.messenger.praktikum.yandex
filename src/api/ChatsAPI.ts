import { IChatCreate, IChatUsersRequest, Indexed } from 'src/types';

import { queryString } from 'src/utils/queryString';

import BaseAPI from './BaseAPI';

export default class ChatsAPI extends BaseAPI {
  constructor() {
    super('/chats');
  }

  getChats(query: Indexed): Promise<XMLHttpRequestResponseType> {
    return this.http.get(queryString(query));
  }

  addChat(data: IChatCreate): Promise<XMLHttpRequestResponseType> {
    return this.http.post('', { data });
  }

  deleteChat(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.delete('', { data: { chatId: id } });
  }

  addUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.put('/users', { data });
  }

  deleteUser(data: IChatUsersRequest): Promise<XMLHttpRequestResponseType> {
    return this.http.delete('/users', { data });
  }

  getToken(id: string): Promise<XMLHttpRequestResponseType> {
    return this.http.post(`/token/${id}`);
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
