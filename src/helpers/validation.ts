import { validationRules } from '@mocks';

export const Validation = (name: string, value: string) => {
  if (!value.trim()) {
    return 'This field is required.';
  }

  if (validationRules[name]) {
    const { regex, message } = validationRules[name];
    if (!regex.test(value)) {
      return message;
    }
  }

  return '';
};
