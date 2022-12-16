export const formDataToObject = (formData: FormData) => {
  const data: { [key: string]: FormDataEntryValue } = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  return data;
};
