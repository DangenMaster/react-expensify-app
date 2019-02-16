import expensesReducer from "./../../reducers/expenses";
import expenses from "./../fixtures/expenses";

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const expense = { 
    id: 4,
    description: 'Internet',
    note: '',
    amount: 8500,
    createdAt: 119500
  };
  const state = expensesReducer(expenses, {
    type: 'ADD_EXPENSE',
    payload: expense
  });
  expect(state).toEqual([ ...expenses, expense ]);
});

test('should remove expense by id', () => {
  const expenseId = 3;
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    payload: { id: expenseId }
  });
  expect(state).toEqual(expenses.filter(({ id }) => id !== expenseId));
});

test('should edit expense by id', () => {
  const expenseId = 1;
  const update = { description: 'Internet' };
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenseId,
    payload: update
  });
  expect(state).toEqual(expenses.map((expense) => {
    if (expense.id === expenseId) {
      return { ...expense, ...update };
    } else {
      return expense;
    }
  }));
});