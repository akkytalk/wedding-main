import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <div className="header-transparent">
        {/* navigation start */}
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <nav className="navbar navbar-expand-lg navbar-transparent">
                <Link className="navbar-brand" to="/">
                  {" "}
                  {/* <img src="images/logo-white.png" alt="" /> */}
                  <img src="images/Wedding Mogache.png" style={{ width:"120px", color:"white" }} alt="" />
                </Link>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-transparent"
                  aria-controls="navbar-transparent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar mt-0" />
                  <span className="icon-bar middle-bar" />
                  <span className="icon-bar bottom-bar" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbar-transparent"
                >
                  <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-lg-auto">
                    <li className="nav-item dropdown ">
                      <Link
                        className="nav-link mr-5"
                        to="/"
                        id="menu-1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Homepage
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/gallery"
                        id="menu-2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Gallery
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/vendor"
                        id="menu-3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Vendors
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/contact"
                        id="menu-4"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/aboutus"
                        id="menu-5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        About US
                      </Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link mr-5"
                        to="/login"
                        id="menu-7"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Login
                      </Link>
                    </li>
                  </ul>
                  <Link to="/" className="btn btn-default btn-sm">
                    Get Started Now
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* navigation close */}
      </div>
    </Fragment>
  );
};

export default Header;
