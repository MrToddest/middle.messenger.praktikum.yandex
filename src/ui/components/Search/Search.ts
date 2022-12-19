import { TEvents } from 'src/types/common';

import Block from 'src/utils/Block/Block';

import Icon from 'src/ui/elements/Icon/Icon';

import template from './Search.tpl.pug';

import iconSearch from 'src/assets/icons/icon-search.svg';

interface ISearch {
  events?: TEvents;
}
class Search extends Block {
  constructor(props: ISearch) {
    super(props);
  }

  protected initChildren() {
    this.childrens.icon = new Icon({
      id: iconSearch.id,
      width: 20,
      height: 20,
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export default Search;
