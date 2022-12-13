import Block from '@/utils/Block';

import template from './icon.tpl.pug';

interface IIcon {
  id: string;
  width: number;
  height: number;
}

class Icon extends Block {
  constructor(props: IIcon) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export default Icon;
