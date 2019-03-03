import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startGoogleLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>
    <NavLink exact to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button 
      onClick={startLogout}
    > Logout
    </button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startGoogleLogout())
});

export default connect(null, mapDispatchToProps)(Header);