import { TEvents } from '@/types/common';

import Block from '@/utils/Block';

import Icon from '@/ui/elements/icon/icon';

import template from './search.tpl.pug';

import iconSearch from '@/assets/icons/icon-search.svg';

interface ISearch {
  events?: TEvents;
}
class Search extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  protected initChildren() {
    this.childrens.icon = new Icon({
      id: iconSearch,
      width: 20,
      height: 20,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default Search;
