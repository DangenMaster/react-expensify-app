import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import ConfigureStore from "./store/configureStore";
import uuid from "uuid";
import { addExpense } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import 'react-dates/lib/css/_datepicker.css';

const store = ConfigureStore();

store.dispatch(addExpense({ id: uuid(), description: 'Water bill', amount: 100, createdAt: 1000 }));
store.dispatch(addExpense({ id: uuid(), description: 'Gas bill', amount: 250, createdAt: 41000 }));
store.dispatch(addExpense({ id: uuid(), description: 'Rent', amount: 9000, createdAt: 31000 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));