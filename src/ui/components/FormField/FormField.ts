import { TEvents } from 'src/types/common';

import Block from 'src/utils/Block/Block';
import { addClass, inputHasValue, removeClass, setMessage } from 'src/utils/helpers';
import { getValidationMsg, isValid } from 'src/utils/validation';

import Input, { IInput } from 'src/ui/elements/Input/Input';

import template from './FormField.tpl.pug';

interface IFormField {
  inputProps: IInput;
  name?: string;
  label?: string;
  validate?: boolean;
  classes?: string;
  events?: TEvents;
}

class FormField extends Block {
  constructor(props: IFormField) {
    super(props);

    this.setListeners();
  }

  classes = {
    hasValue: 'hasValue',
    hasError: 'isError',
  };

  input = this.element?.querySelector('input');
  message = this.element?.querySelector('span');

  setListeners() {
    this.input?.addEventListener('focus', this.onFocus.bind(this));
    this.input?.addEventListener('blur', this.onBlur.bind(this));
  }

  onFocus(): void {
    addClass(this.classes.hasValue, this.element);

    this.validate(this.input);
  }

  onBlur(): void {
    if (!inputHasValue(this.input)) {
      removeClass(this.classes.hasValue, this.element);
    }

    this.validate(this.input);
  }

  validate(input?: HTMLInputElement | null): void {
    if (input && this.props.validate) {
      if (!isValid(input)) {
        addClass(this.classes.hasError, this.element);
        setMessage(getValidationMsg(input), this.message);
      } else {
        removeClass(this.classes.hasError, this.element);
        setMessage('', this.message);
      }
    }
  }

  protected initChildren(): void {
    this.childrens.input = new Input({ ...this.props.inputProps });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default FormField;
