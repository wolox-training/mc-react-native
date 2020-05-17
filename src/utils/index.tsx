export const emailValidate = (email: string) => {
  const expression = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return expression.test(String(email).toLowerCase());
};

export const pwdValidate = (pwd: string) => {
  const minPwdLength = 5;
  return pwd.length > minPwdLength;
};
