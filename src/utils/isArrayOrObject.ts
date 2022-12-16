import { Indexed } from 'src/types/common';

import { isArray } from './isArray';
import { isPlainObject } from './isPlainObject';

export const isArrayOrObject = (value: unknown): value is [] | Indexed => {
  return isPlainObject(value) || isArray(value);
};
