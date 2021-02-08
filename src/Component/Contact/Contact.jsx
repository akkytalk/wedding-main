import React, { Fragment } from 'react'
import Footer from '../Home/Footer'
import Header from '../Home/Header'
import Form from './Form'
import NavbarContact from './NavbarContact'
import Support from './Support'

const Contact=()=>
{
    return(
        <Fragment>
              <Header/>
              <NavbarContact/>
              <Form/>
              <Support/>
              <Footer/>  
        </Fragment>
    )
}

export default Contact