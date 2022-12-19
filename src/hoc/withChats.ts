import withStore from './withStore';

import { IState } from 'src/store/Store';

export const withChats = withStore((state: IState) => {
  return { chats: { ...state.chats } };
});
