import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

import Welcome from './Components/LandingPage/welcome.js';
// import Home from '././components/Home/Home';
import Login from './Components/Login/login.js';
import Signup from './Components/Signup/signup.js';
// import NotFound from '././components/NotFound/NotFound';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route path="/login" component={Login}/>
          <Route path="/Signup" component={Signup}/>
          {/* <Route path="/home" component={Home}/>
          <Route path="*" component={NotFound}/> */}
      </Switch>
  </BrowserRouter>
);

export default Routes;