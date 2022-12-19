import withStore from './withStore';

import { IState } from 'src/store/Store';

export const withActiveChat = withStore((state: IState) => ({ ...state.activeChat }));
