import { TEvents } from 'src/types';

import Block from 'src/utils/Block/Block';

import template from './ModalBackdrop.tpl.pug';

interface IModalBackdrop {
  id: string;
  title: string;
  classes?: string;
  events?: TEvents;
  modalContent?: Block;
}

class ModalBackdrop extends Block<Record<string, any>> {
  constructor(props: IModalBackdrop) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export default ModalBackdrop;
