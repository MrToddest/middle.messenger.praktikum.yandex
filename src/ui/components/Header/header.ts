import Block from 'src/utils/Block/Block';
import { formDataToObject } from 'src/utils/formDataToObject';

import Icon from 'src/ui/elements/Icon/Icon';
import Link from 'src/ui/elements/Link/Link';
import Search from 'src/ui/components/Search/Search';

import template from './Header.tpl.pug';

import arrowRight from 'src/assets/icons/arrow-right.svg';

class Header extends Block {
  protected initChildren() {
    this.childrens.link = new Link({
      url: '/profile',
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
