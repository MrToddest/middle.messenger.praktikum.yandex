import Block from 'src/utils/Block/Block';

import template from './Link.tpl.pug';

interface ILink {
  url: string;
  name?: string;
  mod?: string;
  block?: Block;
}

class Link extends Block<Record<string, any>> {
  constructor(props: ILink) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Link;
