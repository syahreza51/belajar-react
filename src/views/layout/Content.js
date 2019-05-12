import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../page/Home';
import Register from '../page/Register';
import Test from '../page/Test';

class Header extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/Register' component={Register} />
        <Route path='/test' component={Test} />
      </Switch>
    );
  }
}

export default Header;
