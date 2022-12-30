import { IProfileItem, IUser } from 'src/types';

export const getProfileItems = (props: IUser): IProfileItem[] => {
  const items: IProfileItem[] = [];

  const addItem = (name: string, value?: string, key?: string) => {
    items.push({ name, value , key});
  };
  Object.keys(props).forEach((key) => {
    if (key === 'email') addItem('Почта', props[key], key);
    if (key === 'login') addItem('Логин', props[key], key);
    if (key === 'first_name') addItem('Имя', props[key], key);
    if (key === 'second_name') addItem('Фамилия', props[key], key);
    if (key === 'display_name') addItem('Имя в чате', props[key], key);
    if (key === 'phone') addItem('Телефон', props[key], key);
  });
  return items;
};
