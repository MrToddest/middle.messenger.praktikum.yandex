import Block from 'src/utils/Block/Block';

import template from './ClientErrorPage.tpl.pug';

class ClientErrorPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

export default ClientErrorPage;
