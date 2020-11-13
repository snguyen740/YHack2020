import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Volunteer from './Volnuteer.js';
import SignIn from './SignIn.js';
import Calendar from './Calendar.js';

const Main = () => (
  <div class = "background">
    <Switch>
      <Route path='/Home' component={Home} />
      <Route path='/About' component={About} />
      <Route path='/Volunteer' component={Volunteer} />
      <Route path='/SignIn' component={SignIn} />
      <Route path='/Calendar' component={Calendar} />
    </Switch>
  </div>
)

export default Main;