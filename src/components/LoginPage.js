import React from "react";
import { connect } from "react-redux";
import { startGoogleLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <button onClick={startLogin}> Login </button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startGoogleLogin())
});

export default connect(null, mapDispatchToProps)(LoginPage);