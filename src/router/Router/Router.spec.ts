import Block from '../../utils/Block/Block';

import { Router } from './Router';

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import sinon from 'sinon';

let router: Router;

describe('Router', () => {
  jsdom({ url: 'http://localhost' });

  const template = () => `<div><h1>Template</h1><div>`;

  class BasePage extends Block<Record<string, any>>{
    constructor() {
      super();

      this.props = {
        base: 'baseProp',
      };
    }

    render() {
      return this.compile(template, {});
    }
  }

  before(() => {
    const root = document.createElement('div');
    root.setAttribute('id', 'app');
    document.body.appendChild(root);
    router = new Router();
    router.use('/', BasePage, { title: 'Главная' });
    router.use('/article', BasePage, { title: 'Статья' });
    router.start();
  });

  it('Router use should be return true', () => {
    expect(router).to.have.property('routes');
    expect(router).to.have.property('history');
    expect(router).to.have.property('currentRoute');
  });

  it('Router go should be change location', () => {
    router.go('article');

    const result = window.location.pathname;

    expect(result).to.be.equal('/article');
  });

  it('Router back should be return true', () => {
    const backSpy = sinon.spy(window.history, 'back');
    router.back();
    expect(backSpy.callCount).to.be.equal(1);
  });

  it('Router forward should be return true', () => {
    const forwardSpy = sinon.spy(window.history, 'forward');
    router.forward();
    expect(forwardSpy.callCount).to.be.equal(1);
  });
});
