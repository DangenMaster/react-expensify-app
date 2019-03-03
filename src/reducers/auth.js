export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.payload.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};