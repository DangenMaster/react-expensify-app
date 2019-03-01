import configureMockStore from "redux-mock-store";
import ReduxThunk from "redux-thunk";
import { addExpense, startAddExpense, editExpense, removeExpense } from "./../../actions/expenses";
import database from "../../firebase/firebase";

const mockStore = configureMockStore([ReduxThunk]);

test('should setup add expense action object', () => {
  const action = addExpense({ id: '123qwe', description: 'Rent', amount: '123' });
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    payload: {
      id: '123qwe',
      description: 'Rent',
      amount: '123'
    }
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123qwe', { description: 'Internet' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123qwe',
    payload: {
      description: 'Internet'
    }
  });
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123qwe' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    payload: {
      id: '123qwe'
    }
  });
});

test('should add expense to database and store', (done) => {
  const store = mockStore({});
  const expenseData = {
    description: 'Internet',
    note: 'Internet bill',
    amount: 820,
    createdAt: 1000 
  };
  store.dispatch(startAddExpense(expenseData))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      payload: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].payload.id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});