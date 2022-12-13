import { Method } from '@/constants';

export type Options = {
  method: Method;
  data?: any;
};

export type OptionsWithoutMethod = Omit<Options, 'method'>;
