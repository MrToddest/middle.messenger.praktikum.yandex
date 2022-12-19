import { Indexed } from 'src/types/common';

export const createNestedObj = (source: Indexed<any>, target = {}): Indexed<any> => {
  const result = Object.entries(source).reduce((obj: Indexed<any>, [k, v]) => {
    const path = k.split('.');
    const prop = path.pop();

    if (prop) {
      path.reduce((acc, n: string) => (acc[n] = acc[n] || {}), obj)[prop] = v;
    }

    return obj;
  }, target);

  return result;
};
