import Block from 'src/utils/Block/Block';

import router from 'src/router/router';

function withRouter(Component: typeof Block) {
  return class WithRouter extends Component {
    public static componentName = Component.name;

    constructor(props: any) {
      super({ ...props, router: router });
    }
  };
}

export default withRouter;
