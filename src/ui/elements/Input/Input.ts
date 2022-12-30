import { TEvents } from 'src/types/common';

import Block from 'src/utils/Block/Block';

import template from './Input.tpl.pug';

export interface IInput {
  type: string;
  name: string;
  id?: string;
  value?: string;
  classes?: string;
  placeholder?: string;
  required?: boolean;
  minlength?: number;
  maxlength?: number;
  pattern?: string;
  events?: TEvents;
  validate?: boolean;
  autocomplete?: 'on' | 'off';
}

class Input extends Block<Record<string, any>> {
  constructor(props: IInput) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Input;
