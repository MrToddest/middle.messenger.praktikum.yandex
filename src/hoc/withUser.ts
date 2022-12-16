import withStore from './withStore';

import { IState } from 'src/store/Store';

export const withUser = withStore((state: IState) => ({ ...state.currentUser }));
