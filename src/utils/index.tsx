import { Books } from '@interfaces';

export const emailValidate = (email: string) => {
  const expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return expression.test(String(email).toLowerCase());
};

export const pwdValidate = (pwd: string) => {
  const minPwdLength = 5;
  return pwd.length > minPwdLength;
};

export const booksSortFunction = (itemA: Books, itemB: Books) => {
  const titleA = itemA.title.toLowerCase();
  const titleB = itemB.title.toLowerCase();
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
};
