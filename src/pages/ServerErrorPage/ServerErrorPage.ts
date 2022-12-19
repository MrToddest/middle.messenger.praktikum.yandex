import Block from 'src/utils/Block/Block';

import template from './ServerErrorPage.tpl.pug';

class ServerErrorPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

export default ServerErrorPage;
