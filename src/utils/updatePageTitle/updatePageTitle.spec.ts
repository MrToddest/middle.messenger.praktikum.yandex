import { updatePageTitle } from './updatePageTitle';

import { expect } from 'chai';
import { describe } from 'mocha';
import jsdom from 'mocha-jsdom';

describe('updatePageTitle util', () => {
  jsdom({ url: 'http://localhost' });

  it('should be change title', () => {
    updatePageTitle('New Title');
    expect(document.title).to.equal('New Title');
  });
});
