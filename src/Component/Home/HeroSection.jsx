import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions/index";

const HeroSection = (props) => {
  useEffect(() => {
    props.onVendorTypeGetData();
  }, []);

  console.log("vendor type from main", props.vendorType);
  return (
    <Fragment>
      <div className="hero-section-third">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-xl-10 offset-lg-1 col-lg-10 col-md-12 col-sm-12 col-12">
              {/* search-block */}
              <div className>
                <div className="text-center search-head">
                  <h1 className="search-head-title text-white">
                    Find Local Wedding Vendors
                  </h1>
                  <p className="d-none d-xl-block d-lg-block d-sm-block text-white">
                    Browse the best wedding vendors in your area — from venues
                    and photographers, to wedding planners, caterers, florists
                    and more.
                  </p>
                </div>
                {/* /.search-block */}
                {/* search-form */}
                <div className="search-form">
                  <form className="form-row">

                        
                    <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-12">
                       {/* select  */}

                      <select className="wide">
                     
                        
                        <option>select</option>
                                                <option value="Venue Type">Vendor Type</option>
                                                <option value="Venue">Venue</option>
                                                <option value="Florist">Florist</option>
                                                <option value="Cake">Cake</option>
                                                <option value="Photographer">Photographer</option>
                                                <option value="Catering">Catering</option>
                                                <option value="Dress">Dress</option>
                      </select>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-4 col-sm-12 col-12">
                      {/* select */}
                      <select className="wide">
                        <option value="Ahmedabad" data-display="Ahmedabad">
                          Ahmedabad
                        </option>
                        <option value="Surat">Surat</option>
                        <option value="Rajkot">Rajkot</option>
                        <option value="Vadodara">Vadodara</option>
                        <option value="Vapi">Vapi</option>
                        <option value="Bhavnagar">Bhavnagar</option>
                      </select>
                    </div>
                    {/* button */}
                    <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12 col-12">
                      <button
                        className="btn btn-default btn-block"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                {/* /.search-form */}
              </div>
            </div>
          </div>
        </div>
        <div className="feature-section">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="feature-left">
                  <div className="feature-icon">
                    <i className="fas fa-clipboard-list" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-white mb-1">13000+</h3>
                    <p className="text-white">Vendor Listing</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="feature-left">
                  <div className="feature-icon">
                    <i className="fas fa-smile" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-white mb-1">12000+</h3>
                    <p className="text-white">Happy Users</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="feature-left">
                  <div className="feature-icon">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-white mb-1">168+</h3>
                    <p className="text-white">Worldwide Cities</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                <div className="feature-left">
                  <div className="feature-icon">
                    <i className="fas fa-heart" />
                  </div>
                  <div className="feature-content">
                    <h3 className="text-white mb-1">200+</h3>
                    <p className="text-white">Real Weddings</p>
                  </div>
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
    vendorType: state.vendorType.vendorType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVendorTypeGetData: () => dispatch(actions.vendorTypeGetData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
