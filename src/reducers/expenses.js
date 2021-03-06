const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.payload.id);
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
    case 'SET_EXPENSES':
      return state = action.payload;
    default:
      return state;
  }
};

export default expensesReducer;