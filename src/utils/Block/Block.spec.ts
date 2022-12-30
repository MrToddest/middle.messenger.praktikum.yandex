import Block from './Block';

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

let testedBlock: Block;

describe('Block (Component)', () => {
  jsdom({ url: 'http://localhost' });

  const template = () => `<div><h1>Template</h1><div>`;

  class TestBlock extends Block<Record<string, any>> {
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
    testedBlock = new TestBlock();
  });

  it('Have public id', () => {
    const result = testedBlock.id;

    expect(result).to.be.a('string');
  });

  it('element not return null', () => {
    const result = testedBlock.element;

    expect(result).to.be.not.null;
  });

  it('getContent method not return null', () => {
    const result = testedBlock.getContent();

    expect(result).to.be.not.null;
  });

  it('getProps method return props', () => {
    const result = testedBlock.getProps();

    expect(result).to.have.property('base');
  });

  it('setProps method added props', () => {
    testedBlock.setProps({ test: 'testProp' });
    const result = testedBlock.getProps();

    expect(result).to.have.property('base');
    expect(result).to.have.property('test');
  });

  it('Hide method change display style', () => {
    testedBlock.hide();
    const el = testedBlock.getContent();
    const result = el?.style.display;

    expect(result).to.be.equal('none');
  });

  it('Show method change display style', () => {
    testedBlock.show();
    const el = testedBlock.getContent();
    const result = el?.style.display;

    expect(result).to.be.equal('block');
  });
});
