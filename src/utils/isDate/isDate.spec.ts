import { isDate } from './isDate';

import { expect } from 'chai';

describe('isDate util', () => {
  it('should return true if object Date passed', () => {
    const date = new Date();
    const result = isDate(date);

    expect(result).to.be.true;
  });

  it('should return false if string passed', () => {
    const date = '01.01.1970';
    const result = isDate(date);

    expect(result).to.be.false;
  });

  it('should return false if number passed', () => {
    const date = 1970;
    const result = isDate(date);

    expect(result).to.be.false;
  });

  it('should return false if array passed', () => {
    const date = ['01.01.1970', 1970];
    const result = isDate(date);

    expect(result).to.be.false;
  });

  it('should return false if null passed', () => {
    const date = null;
    const result = isDate(date);

    expect(result).to.be.false;
  });
});
