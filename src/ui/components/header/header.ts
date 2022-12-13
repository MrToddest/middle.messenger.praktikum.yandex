import Block from '@/utils/Block';
import { formDataToObject } from '@/utils/formDataToObject';

import Icon from '@/ui/elements/icon/icon';
import Link from '@/ui/elements/link/link';
import Search from '@/ui/components/search/search';

import template from './header.tpl.pug';

import arrowRight from '@/assets/icons/arrow-right.svg';

class Header extends Block {
  protected initChildren() {
    this.childrens.link = new Link({
      url: '/profile/profile.html',
      name: 'Профиль',
      mod: 'link--grey link--icon',
      block: new Icon({
        id: arrowRight,
        width: 6,
        height: 10,
      }),
    });

    this.childrens.search = new Search({
      events: {
        submit: (e) => this.submitHandler(e),
      },
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

export default Header;
