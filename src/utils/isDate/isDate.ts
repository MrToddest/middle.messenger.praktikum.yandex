export const isDate = (data: any): boolean => {
  return Object.prototype.toString.call(data) === '[object Date]' && data != 'Invalid Date';
};
