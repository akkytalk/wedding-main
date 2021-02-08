import React, { Fragment } from 'react'

const Section = () => {
    return (
        <Fragment>
            <div>
                <div className="space-medium">
                    <div className="container">
                        <div className="row">
                            {/*  about-details  */}
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 mb100">
                                <img src="images/about-img-4.jpg" alt="" className="img-fluid rounded" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="p-5">
                                    <h2>Who we are</h2>
                                    <p className="lead">VendorHub is the largest and most trusted global directory connecting engaged couples with local wedding professionals.</p>
                                    <p>Maecenas semper dolor metus, a convallis ipsum condimentum ras eros ex, euismod vitae congue ullamcorper id ligula. Maecenas semper dolor metusm ras eros ex, euismod vitae congue ullamcorper id ligula. </p>
                                    <a href="#" className="btn btn-outline-default">Read More</a>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb30">
                                <div className="feature card text-center">
                                    <div className="card-body">
                                        <div className="feature-icon circle-second-icon circle-xl bg-light text-default mr-auto ml-auto ">
                                            <i className="fas fa-rocket fa-2x" />
                                        </div>
                                        <h3>Our Mission</h3>
                                        <p className="feature-content">Quisque consectauris elurpis faucibus dictum sium mi egetallis aliquam metus ipsum volutpat nisperdi elibero.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb30">
                                <div className="feature card text-center">
                                    <div className=" card-body ">
                                        <div className="feature-icon circle-second-icon circle-xl bg-light text-default mr-auto ml-auto ">
                                            <i className="fas fa-eye fa-2x" />
                                        </div>
                                        <h3>Our Vision</h3>
                                        <p className="feature-content">Maecenas semper dolor metus, a convallis ipsum condimentum ras eros ex, euismod vitae congue ullamcorper id ligula. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 mb30">
                                <div className="feature card text-center">
                                    <div className=" card-body ">
                                        <div className="feature-icon circle-second-icon circle-xl bg-light text-default mr-auto ml-auto ">
                                            <i className="fas fa-award fa-2x" />
                                        </div>
                                        <h3>Our Achievement</h3>
                                        <p className="feature-content">Maecenas semper dolor metus, a convallis ipsum condimentum ras eros ex, euismod vitae congue ullamcorper id ligula. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.venue-categoris-section*/}
                <div className="space-medium">
                    <div className="container">
                        <div className="row">
                            <div className="offset-xl-2 col-xl-8 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 text-center">
                                <div className="section-title">
                                    <h2>Our Trusted Partners</h2>
                                    <p>Customer feedback examples are essential to the success of a business. </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-1.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-2.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-3.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-4.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-5.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mb30">
                                <a href="#">
                                    <div className="client-logo">
                                        <img src="images/client-logo-6.png" alt="" className="img-fluid" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cta-second">
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-3 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div className="cta-second-content">
                                <h2 className="text-white">Start Planning for Free</h2>
                                <p>VendorHub will connect your wedding with businessess that are available on your wedding date,
                                meet your budgets, are in-line with your style and much more. Save time and let venorhub
                                recommend the best wedding vendors in india for your Wedding Day!
                                </p>
                                <a href="#" className="btn btn-default btn-lg mb30">Plan for Free Today</a>
                                <p>Already have an account? <a href="#" className="text-white">Login here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Section