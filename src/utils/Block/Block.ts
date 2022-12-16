import EventBus from '../EventBus';
import { isEqual } from '../isEqual';

import { nanoid } from 'nanoid';

class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  public id = nanoid(6);

  private _element: HTMLElement | null = null;

  protected props: any;
  protected childrens: Record<string, Block>;
  private eventBus: () => EventBus;

  /** JSDoc
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(propsAndChildrens: any = {}) {
    const eventBus = new EventBus();

    const { props, childrens } = this.getChildren(propsAndChildrens);

    this.childrens = childrens;

    this.props = this._makePropsProxy(props);

    this.initChildren();

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  protected init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  protected componentDidMount() {
    return;
  }

  private _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (!response) return;

    this._render();
  }

  protected componentDidUpdate(oldProps: any, newProps: any) {
    if (!isEqual(oldProps, newProps)) return true;

    return false;
  }

  public setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public getProps = () => {
    return this.props;
  };

  get element(): HTMLElement | null {
    return this._element;
  }

  private _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._removeEvents();

      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  private _makePropsProxy(props: any) {
    return new Proxy(props as unknown as object, {
      get(target: Record<string, unknown>, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target: Record<string, unknown>, prop: string, value: unknown) => {
        const oldProps = { ...target };
        target[prop] = value;

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) return;

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.removeEventListener(event, listener);
    });
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events;

    if (!events || !this._element) return;

    Object.entries(events).forEach(([event, listener]) => {
      this._element?.addEventListener(event, listener);
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  public show() {
    const el = this.getContent();

    if (el) el.style.display = 'block';
  }

  public hide() {
    const el = this.getContent();

    if (el) el.style.display = 'none';
  }

  protected getChildren(propsAndChildrens: any) {
    const childrens: any = {};
    const props: any = {};

    Object.entries(propsAndChildrens).map(([key, value]) => {
      if (value instanceof Block) {
        childrens[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, childrens };
  }

  protected initChildren() {
    return;
  }

  protected compile(template: (context: any) => string, context: any) {
    const fragment = this._createDocumentElement('template') as HTMLTemplateElement;

    Object.entries(this.childrens).forEach(([key, child]) => {
      context[key] = `<div data-id="id-${child.id}"></div>`;
    });

    const htmlString = template(context);

    fragment.innerHTML = htmlString;

    Object.entries(this.childrens).forEach(([, child]) => {
      const stub = fragment.content.querySelector(`[data-id="id-${child.id}"]`);

      if (!stub) return;

      stub.replaceWith(child.getContent() as HTMLElement);
    });

    return fragment.content;
  }
}

export default Block;
