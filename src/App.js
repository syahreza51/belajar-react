import React, { Component } from 'react';
import './App.css';
import Header from './views/layout/Header';
import Content from './views/layout/Content';
import Footer from './views/layout/Footer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;
