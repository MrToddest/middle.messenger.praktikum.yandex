import Block from '@/utils/Block';
import renderDOM from '@/utils/renderDOM';

import template from './500.tpl.pug';

class ErrorPage extends Block {
  constructor() {
    super();
  }

  render() {
    return this.compile(template, {});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const page = new ErrorPage();

  renderDOM('#app', page);
});
