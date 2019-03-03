import { googleLogin, googleLogout } from "./../../actions/auth";

test('should generate googleLogin action object', () => {
  const payload = { uid: 'qweQWEasdASD' };
  const action = googleLogin(payload);
  expect(action).toEqual({
    type: 'LOGIN',
    payload
  });
});

test('should generate googleLogout action object', () => {
  const action = googleLogout();
  expect(action).toEqual({ type: 'LOGOUT' });
});