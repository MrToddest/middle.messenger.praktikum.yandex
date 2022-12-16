import { isDate } from './isDate/isDate';

export const setFormat = (day: Date) => {
  if (!isDate(day)) return '';

  const oneDay = 86400000;
  const week = oneDay * 7;
  const now = new Date();

  const dateTimeFormat = (date: Date, options: Intl.DateTimeFormatOptions) => {
    const dtf = new Intl.DateTimeFormat('ru-RU', options);

    return dtf.format(date);
  };

  if (Number(now) - Number(day) < oneDay) {
    return dateTimeFormat(day, { hour: 'numeric', minute: 'numeric' });
  } else if (Number(now) - Number(day) < week) {
    return dateTimeFormat(day, { weekday: 'short' });
  } else {
    return dateTimeFormat(day, {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
};
