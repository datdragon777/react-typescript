/* eslint-disable no-useless-escape */
export const REGEX = {
  USERNAME: /^.{3,16}$/,
  AVATAR: /^https?:\/\/.*\.(png|jpg|jpeg|gif|bmp|svg)$/,
  EMAIL: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  PHONENUMBER: /^(((\+|)84)|0)([1-9]{1})([0-9]{8})\b/,
  DESCRIPTION: /.{3,}/,
  ADDRESS: /.{8,}/,
};
