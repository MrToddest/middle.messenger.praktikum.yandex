import { Indexed } from 'src/types/common';

import { getKey } from './getKey';
import { isArrayOrObject } from './isArrayOrObject';

export const getParams = (data: Indexed | [], parentKey?: string) => {
  const result: [string, string][] = [];

  for (const [key, value] of Object.entries(data)) {
    if (isArrayOrObject(value)) {
      result.push(...getParams(value, getKey(key, parentKey)));
    } else {
      result.push([getKey(key, parentKey), encodeURIComponent(String(value))]);
    }
  }

  return result;
};
