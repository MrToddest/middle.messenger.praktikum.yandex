import { PagePaths } from 'src/constants';

import Block from 'src/utils/Block/Block';

export type TEvents = Record<string, (e: Event) => void>;

export type Indexed<T = unknown> = {
  [key in string]: T;
};
export interface IPage {
  path: PagePaths | PagePaths[];
  block: new () => Block<Record<string, any>>;
  props?: Record<string, unknown>;
}
