import { createStore } from "redux";

// Action generator
const incrementCount = (payload = {}) => ({
  type: 'INCREMENT',
  payload
});

const decrementCount = (payload = {}) => ({
  type: 'DECREMENT',
  payload
});

const resetCount = (payload = {}) => ({
  type: 'RESET',
  payload
});

// Reducer
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.payload.increment
      };
    case 'DECREMENT':
      return {
        count: state.count - action.payload.decrement
      };
    case 'RESET':
      return {
        count: action.payload.reset
      };
    default:
      return state;
  }
};

// Application store or state
const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Actions
store.dispatch(incrementCount({ increment: 2 }));

store.dispatch(decrementCount({ decrement: 1 }));

store.dispatch(resetCount({ reset: 0 }));

