import { IChatItem, IMessageItem, IUser } from 'src/types';

import { set } from 'src/utils/set';

import EventBus from '../utils/EventBus';

export enum StoreEvents {
  Updated = 'updated',
}

export interface IState {
  currentUser?: IUser;
  chats: IChatItem[];
  activeChat: {
    chat: IChatItem | null;
    messages: IMessageItem[] | [];
  };
}

class Store extends EventBus {
  private state: IState = {
    chats: [],
    activeChat: {
      chat: null,
      messages: [],
    },
  };

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

const store = new Store();

export default store;
