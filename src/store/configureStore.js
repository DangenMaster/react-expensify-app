import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import expensesReducer from "./../reducers/expenses";
import filtersReducer from "./../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }),
    composeEnhancers(applyMiddleware(ReduxThunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store
};
