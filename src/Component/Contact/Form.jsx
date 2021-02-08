import React, { Fragment } from 'react'

const Form = () => {
    return (
        <Fragment>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12 col-12 mb60">
                            {/* contact-section-title */}
                            <div className="text-center">
                                <p className="lead">We would like to talk with you, Talk to us and we'll show you what we’ve done,
                                and what we can do for you.
          </p>
                            </div>
                            {/* /.contact-section-title */}
                        </div>
                        <div className="offset-xl-3 col-xl-6 offset-lg-3 col-lg-6 col-md-12 col-sm-12 col-12">
                            <form action="https://jituchauhan.com/real-wed/realwed/contactus.php" method="post">
                                {/* form */}
                                <div className="contact-form">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                                            {/* Text input*/}
                                            <div className="form-group service-form-group">
                                                <label className="control-label sr-only" htmlFor="fname" />
                                                <input id="fname" type="text" name="fname" placeholder="First Name" className="form-control" required />
                                            </div>
                                        </div>
                                        {/* Text input*/}
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  ">
                                            <div className="form-group service-form-group">
                                                <label className="control-label sr-only" htmlFor="lname" />
                                                <input id="lname" type="text" name="lname" placeholder="Last Name" className="form-control" required />
                                            </div>
                                        </div>
                                        {/* Text input*/}
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <div className="form-group service-form-group">
                                                <label className="control-label sr-only" htmlFor="email" />
                                                <input id="email" type="email" name="email" placeholder="Email" className="form-control" required />
                                            </div>
                                        </div>
                                        {/* Text input*/}
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <div className="form-group service-form-group">
                                                <label className="control-label sr-only" htmlFor="phone" />
                                                <input id="phone" type="text" name="phone" placeholder="Phone" className="form-control" required />
                                            </div>
                                        </div>
                                        {/* select */}
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <div className="form-group">
                                                <select className="wide mb20" name="selectvendor">
                                                    <option value="Vendor Purpose">Vendor Purpose</option>
                                                    <option value="Couple">Couple</option>
                                                    <option value="Pricing">Pricing</option>
                                                    <option value="Vendor">Vendor</option>
                                                    <option value="Advertise with us">Advertise with us</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            {/* textarea */}
                                            <div className="form-group">
                                                <label className="control-label sr-only" htmlFor="message" />
                                                <textarea className="form-control" id="message" name="message" rows={3} placeholder="Messages" defaultValue={""} />
                                            </div>
                                        </div>
                                        {/*button */}
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                                            <button type="submit" name="singlebutton" className="btn btn-default">submit</button>
                                        </div>
                                    </div>
                                </div>
                                {/* /.form */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Form