export const NAME = '^(?=.*[A-ZА-ЯЁ])([A-Za-zА-Яа-яЁё\\-]+)';

export const LOGIN = '(?=.*[A-Za-z])[A-Za-z0-9\\-_]+';

export const EMAIL =
  '^([\\w-]+(?:\\.[\\w-]+)*)@((?:[\\w-]+\\.)*\\w[\\w-]{0,66})\\.([a-z]{2,6}(?:\\.[a-z]{2})?)$';

export const PASSWORD = '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,40}';

export const PHONE = '([\\+]*[7-8]{1}\\s?[\\(]*9[0-9]{2}[\\)]*\\s?\\d{3}[-]*\\d{2}[-]*\\d{2})';

export const MESSAGE = '.+';
