import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// Action generators
const addExpense = (payload = {}) => ({
  type: 'ADD_EXPENSE',
  payload
});

const removeExpense = (payload = {}) => ({
  type: 'REMOVE_EXPENSE',
  payload
});

const editExpense = (id, payload = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  payload
});

const setTextFilter = (payload = {}) => ({
  type: 'SET_TEXT_FILTER',
  payload
});

const sortByFilter = (payload = {}) => ({
  type: 'SORT_BY',
  payload
});

const setStartDateFilter = (payload = {}) => ({
  type: 'START_DATE',
  payload
});

const setEndDateFilter = (payload = {}) => ({
  type: 'END_DATE',
  payload
});

// Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'REMOVE_EXPENSE': 
      return state.filter(({id}) => id !== action.payload.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.payload
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.payload.text
      };
    case 'SORT_BY':
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    case 'START_DATE':
      return {
        ...state,
        startDate: action.payload.startDate
      };
    case 'END_DATE':
      return {
        ...state,
        endDate: action.payload.endDate
      };
    default:
      return state;
  }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    } else {
      return 0;
    }
  });
};

// Create application store
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Actions
const expenseOne = store.dispatch(addExpense({ id: uuid(), description: 'Rent', note: '', amount: 300, createdAt: -1000 })); 
const expenseTwo = store.dispatch(addExpense({ id: uuid(), description: 'Coffee', note: '', amount: 100, createdAt: 1000 }));
//store.dispatch(removeExpense({ id: expenseTwo.payload.id }));
//store.dispatch(editExpense(expenseOne.payload.id, { amount: 250 }));
/* store.dispatch(setTextFilter({ text: 'rent' }));
store.dispatch(sortByFilter({ sortBy: 'amount' }));
store.dispatch(sortByFilter({ sortBy: 'date' }));
store.dispatch(setStartDateFilter({ startDate: 125 }));
store.dispatch(setEndDateFilter({ endDate: 1250 })); */
store.dispatch(sortByFilter({ sortBy: 'amount' }));

const demoState = {
  expenses: [{
    id: 'qwertyuiop',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 545,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};