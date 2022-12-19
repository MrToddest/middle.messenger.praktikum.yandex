import { TEvents } from 'src/types';

import Block from 'src/utils/Block/Block';

import Button from 'src/ui/elements/Button/Button';
import FormField from 'src/ui/components/FormField/FormField';

import template from './AddChatForm.tpl.pug';

interface IAddChatForm {
  events?: TEvents;
}

class AddChatForm extends Block {
  constructor(props: IAddChatForm) {
    super(props);
  }

  protected initChildren(): void {
    this.childrens.name = new FormField({
      inputProps: {
        type: 'text',
        name: 'title',
        required: true,
        placeholder: '',
      },
      label: 'Введите имя чата',
      name: 'title',
    });

    this.childrens.button = new Button({
      type: 'submit',
      name: 'add',
      text: 'Добавить',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props });
  }
}

export default AddChatForm;
