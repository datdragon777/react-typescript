import { MESSAGES, REGEX } from '@constants';

export const validationRules = {
  name: {
    regex: REGEX.USERNAME,
    message: MESSAGES.FORM.USERNAME,
  },
  avatar: {
    regex: REGEX.AVATAR,
    message: MESSAGES.FORM.AVATAR,
  },
  mail: {
    regex: REGEX.EMAIL,
    message: MESSAGES.FORM.EMAIL,
  },
  phoneNumber: {
    regex: REGEX.PHONENUMBER,
    message: MESSAGES.FORM.PHONENUMBER,
  },
  description: {
    regex: REGEX.DESCRIPTION,
    message: MESSAGES.FORM.DESCRIPTION,
  },
  address: {
    regex: REGEX.ADDRESS,
    message: MESSAGES.FORM.ADDRESS,
  },
};
