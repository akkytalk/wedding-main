import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../reduxStore/actions/index";
import Login from "../Auth/Login";

const Form = (props) => {
  return (
    <Fragment>
      <div className=" vendor-form" style={{ backgroundColor: "pink" }}>
        <div className="container">
          <div className="row ">
            <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12  ">
              {/* vendor head */}
              <div className="vendor-head">
                <a href="index.html">
                  <img
                    src="images/logo.png"
                    alt="Wedding Vendor & Supplier Directory HTML Template "
                  />
                </a>
              </div>
              {/* /.vendor head */}
              <div className="st-tab">
                <ul
                  className="nav nav-tabs nav-justified"
                  id="Mytabs"
                  role="tablist"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="tab-1"
                      data-toggle="tab"
                      href="#tab1"
                      role="tab"
                      aria-controls="tab-1"
                      aria-selected="true"
                    >
                      Register
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="tab-2"
                      data-toggle="tab"
                      href="#tab2"
                      role="tab"
                      aria-controls="tab-2"
                      aria-selected="false"
                    >
                      Login
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="tab-1"
                  >
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                      {/* vendor title */}
                      <div className="vendor-form-title">
                        <h3 className="mb-2">Business Register</h3>
                        <p>
                          Join Weddingsto get your business listed or to claim
                          your listing for FREE!
                        </p>
                      </div>
                      {/* /.vendor title */}
                      <form>
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            {/* Text input*/}
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="firstname"
                              />
                              <input
                                id="firstname"
                                type="text"
                                name="first-name"
                                placeholder="First Name"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            {/* Text input*/}
                            <div className="form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="lastname"
                              />
                              <input
                                id="lastname"
                                type="text"
                                name="last-name"
                                placeholder="Last Name"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            {/* Text input*/}
                            <div className="form-group service-form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="email"
                              />
                              <input
                                id="email"
                                type="email"
                                placeholder="Email"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            {/* Text input*/}
                            <div className="form-group service-form-group">
                              <label
                                className="control-label sr-only"
                                htmlFor="passwordregister"
                              />
                              <input
                                id="passwordregister"
                                type="password"
                                name="passwordregister"
                                placeholder="Password"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            {/* select */}
                            {/* <div className="form-group">
                              <select className="wide mb20">
                                <option value="Vendor Purpose">
                                  Vendor Purpose
                                </option>
                                <option value="Venue">Venue</option>
                                <option value="Photographer">
                                  Photographer
                                </option>
                                <option value="Florist">Florist</option>
                              </select>
                            </div> */}
                          </div>
                          {/* buttons */}
                          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <button
                              type="submit"
                              name="singlebutton"
                              className="btn btn-default"
                            >
                              Sign up
                            </button>
                          </div>
                        </div>
                      </form>
                      <p className="mt-2">
                        {" "}
                        Have you subscribed? <a href="#"> Login</a>
                      </p>
                    </div>
                  </div>
                  {/* vendor-login */}
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="tab-2"
                  >
                    <Login />
                  </div>
                  {/* /.vendor-login */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

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
export default connect(mapStateToProps, mapDispatchToProps)(Form);
