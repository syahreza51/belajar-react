import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../page/Home';
import Register from '../page/Register';

class Header extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/Register' component={Register} />
      </Switch>
    );
  }
}

export default Header;
