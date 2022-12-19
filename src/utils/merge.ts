import { Indexed } from 'src/types/common';

import { isObject } from './isObject';

export const merge = (lhs: Indexed<any>, rhs: Indexed<any>): Indexed<any> => {
  if (!rhs) return lhs;

  const rhsArr: Indexed<any>[] = [rhs];

  if (!rhsArr.length) return lhs;

  const src = rhsArr.shift();

  if (isObject(lhs) && isObject(src)) {
    for (const key in src) {
      if (isObject(src[key])) {
        if (!lhs[key]) {
          Object.assign(lhs, {
            [key]: {},
          });
        }

        merge(lhs[key], src[key]);
      } else {
        Object.assign(lhs, {
          [key]: src[key],
        });
      }
    }
  }

  return rhsArr[0] ? merge(lhs, rhsArr[0]) : lhs;
};
