import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./../components/LoginPage";
import AddExpensePage from "./../components/AddExpensePage";
import EditExpensePage from "./../components/EditExpensePage";
import ExpenseDashboardPage from "./../components/ExpenseDashboardPage";

import HelpPage from "./../components/HelpPage";
import NotFoundPage from "./../components/NotFoundPage";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
