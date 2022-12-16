import { getPathname } from './getPathname';

import { expect } from 'chai';
import jsdom from 'mocha-jsdom';

describe('getPathname util', () => {
  jsdom({ url: 'http://localhost/pathname' });

  it('should return pathname', () => {
    const result = getPathname();

    expect(result).to.equal('/pathname');
  });
});
