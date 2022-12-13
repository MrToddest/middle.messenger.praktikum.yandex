import Block from '@/utils/Block';

import template from './link.tpl.pug';

interface ILink {
  url: string;
  name?: string;
  mod?: string;
  block?: Block;
}

class Link extends Block {
  constructor(props: ILink) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Link;
