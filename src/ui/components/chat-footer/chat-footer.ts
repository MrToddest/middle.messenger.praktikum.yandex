import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import Icon from '@/ui/elements/icon/icon';
import MessageForm from '@/ui/components/message-form/message-form';

import template from './chat-footer.tpl.pug';

import iconClip from '@/assets/icons/icon-clip.svg';

class ChatFooter extends Block {
  protected initChildren() {
    this.childrens.messageForm = new MessageForm({
      events: {
        submit: (e) => this.submitHandler(e),
      },
    });

    this.childrens.icon = new Icon({
      id: iconClip,
      width: 32,
      height: 32,
    });
  }

  submitHandler(e: Event) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // eslint-disable-next-line no-restricted-syntax
    console.log(formDataToObject(formData));
  }

  render() {
    return this.compile(template, {});
  }
}

export default ChatFooter;
