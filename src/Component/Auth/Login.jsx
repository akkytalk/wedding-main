import React, { useState } from "react";
import * as actions from "../../reduxStore/actions/index";
import { connect } from "react-redux";

function Login(props) {
  const [authForm, setAuthForm] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuthForm({ ...authForm, [name]: value });
  };

  const [isSignup, setIsSignup] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAuth(authForm.email.value, authForm.password.value, isSignup);
  };

  console.log("auth form", authForm);

  return (
    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
      <div className="vendor-form-title">
        {/*vendor-title */}
        <h3 className="mb-2">Welcome Back Vendor</h3>
        <p>
          Join Weddings to get your business listed or to claim your listing for
          FREE!
        </p>
      </div>
      {/*/.vendor-title */}
      <form onSubmit={submitHandler}>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            {/* Text input*/}
            <div className="form-group">
              <label className="control-label sr-only" htmlFor="email" />
              <input
                id="email"
                type="text"
                name="email"
                placeholder="E-mail"
                value={authForm.email}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>
          </div>
          {/* Text input*/}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            <div className="form-group service-form-group">
              <label
                className="control-label sr-only"
                htmlFor="passwordlogin"
              />
              <input
                id="passwordlogin"
                type="password"
                name="password"
                value={authForm.password}
                onChange={handleInputChange}
                placeholder="Password"
                className="form-control"
                required
              />
            </div>
          </div>
          {/*buttons */}
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
            {/* <Link to="/dashboard"> */}
            <button
              type="submit"
              name="singlebutton"
              className="btn btn-default"
            >
              Login
            </button>
            {/* </Link> */}
          </div>
        </div>
      </form>
      <p className="mt-2">
        {" "}
        Are you new couple? Create a New Account.
        <a href="#" className="wizard-form-small-text">
          {" "}
          Click here
        </a>
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignup) =>
      dispatch(actions.auth(email, password, isSignup)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/")),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
