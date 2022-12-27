import Block from '../utils/Block/Block';
import renderDOM from '../utils/renderDOM';
import { updatePageTitle } from '../utils/updatePageTitle/updatePageTitle';

export default class Route {
  private pathname: string;
  private blockClass: typeof Block;
  private block: Block | null;
  private props: any;

  constructor(pathname: string, view: typeof Block, props: any) {
    this.pathname = pathname;
    this.blockClass = view;
    this.block = null;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this.pathname;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass();
    }

    if (this.props.title) updatePageTitle(this.props.title);

    renderDOM(this.props.rootQuery, this.block);
  }
}
