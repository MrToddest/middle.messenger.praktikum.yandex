export const getKey = (key: string, parentKey?: string) => {
  return parentKey ? `${parentKey}[${key}]` : key;
};
