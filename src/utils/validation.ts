export const getValidationMsg = (input: HTMLInputElement) => {
  return input.validationMessage;
};

export const isValid = (input: HTMLInputElement) => {
  return input.validity.valid;
};
