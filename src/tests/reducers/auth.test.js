import authReducer from "./../../reducers/auth";

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should login correctly', () => {
  const payload = { uid: 'qweQWEasdASD' };
  const state = authReducer({}, {
    type: 'LOGIN',
    payload
  });
  expect(state).toEqual(payload);
});

test('should logout correctly', () => {
  const state = authReducer({ uid: 'qweQWEasdASD' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});