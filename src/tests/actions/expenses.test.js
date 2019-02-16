import { addExpense, editExpense, removeExpense } from "./../../actions/expenses";

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