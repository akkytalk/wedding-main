import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./Component/About/About";
import Home from "./Component/Home/Home";
import Contact from "./Component/Contact/Contact";
import Form from "./Component/Vendor/Form";
import Dashboard from "./Component/Vendor/Dashboard/Dashboard";
import Listing from "./Component/Vendor/Dashboard/Listing";
import { connect } from "react-redux";
import * as actions from "./reduxStore/actions/index";

const App = (props) => {
  useEffect(() => {
    props.onTryAutoSignup();
  }, []);

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/vendor" component={Form} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/listing" component={Listing} />
        </Switch>
      </Router>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
