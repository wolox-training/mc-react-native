import { emailValidate } from '@utils';

describe('Validate Email', () => {
  test('invalid Email', () => {
    expect(emailValidate('aaa')).toBe(false);
  });
  test('valid password', () => {
    expect(emailValidate('aaa@wolox.com')).toBe(true);
  });
});
