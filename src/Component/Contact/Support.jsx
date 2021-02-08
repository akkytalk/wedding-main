import React, { Fragment } from 'react'

const Support = () => {
    return (
        <Fragment>
            <div className="space-medium bg-white">
                <div className="container">
                    <div className="row">
                        {/* contact-block */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="contact-block">
                                <div className="contact-icon"><i className="far fa-user-circle" /></div>
                                <div className="contact-content">
                                    <h3>Customer Support</h3>
                                    <p>Call our 24-hour helpline.</p>
                                    <p><strong>Phone number:</strong><span className="text-default"> +800-123-4567</span>
                                        <br /> <strong>Email Us:</strong><span className="text-default"> info@realwed.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /.contact-block */}
                        {/* contact-block */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="contact-block">
                                <div className="contact-icon"><i className="fa fa-map-marker-alt" /></div>
                                <div className="contact-content">
                                    <h3>Our Address</h3>
                                    <p>Our offices are located in the Georgia. </p>
                                    <p><strong>Address:</strong> 4998 Elk Creek Road
              <br /> Canton, GA 30114
            </p>
                                </div>
                            </div>
                        </div>
                        {/* /.contact-block */}
                        {/* contact-block */}
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="contact-block">
                                <div className="contact-icon"><i className="far fa-envelope" /></div>
                                <div className="contact-content">
                                    <h3>Other Enquiries</h3>
                                    <p>Please contact us at the email below for all other inquiries.</p>
                                    <p><strong>Email Us:</strong> <span className="text-default">info@realwed.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* /.contact-block */}
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default Support