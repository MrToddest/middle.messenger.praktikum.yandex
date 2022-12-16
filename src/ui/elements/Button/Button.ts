import { TEvents } from 'src/types';

import Block from 'src/utils/Block/Block';

import template from './Button.tpl.pug';

interface IButton {
  type: string;
  name: string;
  text?: string;
  classes?: string;
  block?: Block;
  events?: TEvents;
}

class Button extends Block {
  constructor(props: IButton) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Button;
