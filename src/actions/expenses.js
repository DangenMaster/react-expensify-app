// Action generators
export const addExpense = (payload = {}) => ({
  type: 'ADD_EXPENSE',
  payload
});

export const removeExpense = (payload = {}) => ({
  type: 'REMOVE_EXPENSE',
  payload
});

export const editExpense = (id, payload = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  payload
});