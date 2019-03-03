import database from "../firebase/firebase";

// Action generators
export const addExpense = (payload) => ({
  type: 'ADD_EXPENSE',
  payload
});

export const startAddExpense = (expense = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0 
    } = expense;
    const payload = { description, note, amount, createdAt };
    return database.ref(`users/${uid}/expenses`).push(payload).then((ref) => {
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${payload.id}`).remove().then(() => {
      dispatch(removeExpense(payload));
    });
  };
};

export const editExpense = (id, payload) => ({
  type: 'EDIT_EXPENSE',
  id,
  payload
});

export const startEditExpense = (expenseId, payload = {}) => {
  console.log('payload', payload);
  const { id, ...updatedData } = payload;
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses/${expenseId}`).update(updatedData).then(() => {
      dispatch(editExpense(expenseId, updatedData));
    });
  };
};

export const setExpenses = (payload) => ({
  type: 'SET_EXPENSES',
  payload
});

export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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