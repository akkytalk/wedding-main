import React, { Fragment } from 'react'

const NavbarContact = () => {
    return (
        <Fragment>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        {/* page caption */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                            <div className="page-caption">
                                <h1 className="page-title">Contact us</h1>
                            </div>
                        </div>
                        {/* /.page caption */}
                    </div>
                </div>
                {/* page caption */}
                <div className="page-breadcrumb">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#" className="breadcrumb-link">Home</a></li>
                                    <li className="breadcrumb-item active text-white" aria-current="page">Contact us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* page breadcrumb */}
            </div>
        </Fragment>
    )
}

export default NavbarContact