import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import template from './index.tpl.pug';

class IndexPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new IndexPage();

  renderDOM('#app', page);
});
