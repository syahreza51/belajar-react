import React, { Component } from 'react';
import { NavLink,Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props); 
    //Tempat untuk membuat state
    this.state = { 
      overlay: "",
      test: "Kosong"
    }
  }

  // ini adalah function/method di react
  focusSearch(){
    this.setState({overlay:"overlay"});
  }

  unFocusSearch(){
    this.setState({overlay:""})
  }

  klik(){
    this.setState({test:"Ada Data"});
  }
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="header">
        <div className={this.state.overlay+" active"}></div>
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to='/home'>Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/register'>Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/test'>Test</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/">Action</Link>
                <Link className="dropdown-item" to="/">Another action</Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/">Something else here</Link>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link disabled" to="/">Disabled</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input onBlur={this.unFocusSearch.bind(this)} onFocus={this.focusSearch.bind(this)} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Header;
