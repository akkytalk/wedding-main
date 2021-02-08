import React, { Fragment } from 'react'

const Listing = () => {
    return (
        <Fragment>
            <div className="space-small bg-default text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
                            <h2 className="text-white mb10">Submit your Listing Right Now!</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 text-center mt-3">
                            <a href="#" className="btn btn-primary btn-lg">Submit Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>    
    )
}

export default Listing