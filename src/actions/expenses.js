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

export const removeExpense = (payload) => ({
  type: 'REMOVE_EXPENSE',
  payload
});

export const startRemoveExpense = (payload) => {
  return (dispatch) => {
    return database.ref(`expenses/${payload.id}`).remove().then(() => {
      dispatch(removeExpense(payload));
    });
  };
};

export const editExpense = (id, payload) => ({
  type: 'EDIT_EXPENSE',
  id,
  payload
});

export const startEditExpense = (id, payload = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(payload).then(() => {
      dispatch(editExpense(id, payload));
    });
  };
};

export const setExpenses = (payload) => ({
  type: 'SET_EXPENSES',
  payload
});

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const payload = [];
      
      snapshot.forEach((childSnapShot) => {
        payload.push({
          id: childSnapShot.key,
          ...childSnapShot.val()
        });
      });

      dispatch(setExpenses(payload));
    });
  };
};