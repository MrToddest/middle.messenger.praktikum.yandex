import { IUser } from 'src/types';

export const getAvatarPlug = (props: IUser): string => {
  let plug = '';

  Object.keys(props).forEach((key) => {
    if (key === 'first_name') plug += props[key].slice(0, 1);
    if (key === 'second_name') plug += props[key].slice(0, 1);
  });

  return plug;
};
