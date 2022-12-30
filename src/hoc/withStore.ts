import Block from 'src/utils/Block/Block';
import { isEqual } from 'src/utils/isEqual';

import store, { IState, StoreEvents } from 'src/store/Store';

const withStore =
  (mapStateToProps: (state: IState) => Record<string, unknown>) => (Component: typeof Block<Record<string, any>>) => {
    let state: Record<string, unknown>;

    return class extends Component {
      constructor(props: Record<string, unknown>) {
        state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        store.on(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());

          if (!isEqual(state, newState)) {
            this.setProps({
              ...newState,
            });
          }
        });
      }
    };
  };

export default withStore;
