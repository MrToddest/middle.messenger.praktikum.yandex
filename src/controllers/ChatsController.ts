import { IChatCreate, IChatItem, IChatUsersRequest, IUser } from 'src/types';

import { closeModal } from 'src/utils/helpers';
import { transformDateInChats } from 'src/utils/transformDateInChats';

import ChatsAPI from 'src/api/ChatsAPI';
import SocketConnection from 'src/api/SocketConnection';

import UserController from './UserController';

import store from 'src/store/Store';

class ChatsController {
  private api: ChatsAPI;
  private socket: SocketConnection | null;

  constructor() {
    this.api = new ChatsAPI();
    this.socket = null;
  }

  async setSocketConnection(userId: string, chatId: string) {
    const { token } = (await this.api.getToken(chatId)) as unknown as Record<string, unknown>;

    const endpoint = `${userId}/${chatId}/${token}`;

    this.socket = new SocketConnection(endpoint);
  }

  async getChats() {
    const chats = await this.api.getChats({ offset: 0, limit: 50 });

    transformDateInChats(chats as unknown as IChatItem[]);

    store.set('chats', chats);
  }

  async addChat(data: IChatCreate) {
    await this.api.addChat(data);

    this.getChats();

    closeModal('addChat');
  }

  async addUser(data: Record<string, unknown>) {
    const { login, chatId } = data;

    const user = (await UserController.searchUser({
      login: login as string,
    })) as unknown as IUser[];

    const requestData: IChatUsersRequest = {
      users: [user[0].id as number],
      chatId: chatId as number,
    };

    await this.api.addUser(requestData);

    closeModal('addUser');
  }

  async deleteUser(data: Record<string, unknown>) {
    const { login, chatId } = data;

    const user = (await UserController.searchUser({
      login: login as string,
    })) as unknown as IUser[];

    const requestData: IChatUsersRequest = {
      users: [user[0].id as number],
      chatId: chatId as number,
    };

    await this.api.deleteUser(requestData);

    closeModal('delUser');
  }

  async deleteChat(id: string) {
    await this.api.deleteChat(id);

    await this.getChats();

    store.set('activeChat.chat.id', null);

    closeModal('delChat');
  }

  async sendMessage(message: string) {
    if (this.socket) {
      this.socket.sendMessage(message);
    }
  }
}

export default new ChatsController();
