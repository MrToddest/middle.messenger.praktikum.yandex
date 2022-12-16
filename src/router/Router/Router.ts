import { APP_SELECTOR } from 'src/constants/common';

import Block from '../../utils/Block/Block';
import Route from '../Route';

export class Router {
  private static __instance: Router;
  private routes: Route[] = [];
  private history = window.history;
  private currentRoute: Route | null = null;
  private pageNotFound: string | null = null;

  constructor(pageNotFound?: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    if (pageNotFound) this.pageNotFound = pageNotFound;

    Router.__instance = this;
  }

  public use(pathname: string | string[], block: typeof Block, props?: any) {
    if (Array.isArray(pathname)) {
      pathname.map((path) => {
        const route = new Route(path, block, { ...props, rootQuery: APP_SELECTOR });

        this.routes.push(route);
      });
    } else {
      const route = new Route(pathname, block, { ...props, rootQuery: APP_SELECTOR });

      this.routes.push(route);
    }

    return this;
  }

  public start() {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  public forward() {
    this.history.forward();
  }

  private _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      if (this.pageNotFound) this.go(this.pageNotFound);
      return;
    }

    if (this.currentRoute) this.currentRoute.leave();

    this.currentRoute = route;

    route.render();
  }

  private getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
