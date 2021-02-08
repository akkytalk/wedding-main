import React,{Fragment} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './Component/About/About'
import Home from './Component/Home/Home'
import Contact from './Component/Contact/Contact'
import Form from './Component/Vendor/Form'
import Dashboard from './Component/Vendor/Dashboard/Dashboard'
import Listing from './Component/Vendor/Dashboard/Listing'
const App=()=>
{
  return(
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path ="/aboutus" component={About}/>
          <Route path ="/contact" component={Contact}/>
          <Route path ="/vendor" component={Form}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path ="/listing" component={Listing}/>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App