import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startGoogleLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button
          className="button button--link"
          onClick={startLogout}
        >
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startGoogleLogout())
});

export default connect(null, mapDispatchToProps)(Header);