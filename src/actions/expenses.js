import database from "../firebase/firebase";

// Action generators
export const addExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload
});

export const startAddExpense = (expense = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0 
    } = expense;
    const payload = { description, note, amount, createdAt };
    return database.ref('expenses').push(payload).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...payload
      }));
    })

  };
};

export const removeExpense = (payload = {}) => ({
  type: 'REMOVE_EXPENSE',
  payload
});

export const editExpense = (id, payload = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  payload
});