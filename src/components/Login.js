import PropTypes from "prop-types";
import React from "react";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your store's inventory.</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login with Github
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Login with Twitter
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Login with Facebook
    </button>
  </nav>
);

export default Login;

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};
