import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (

      <div className="container">
        <form class="shadow-lg p-3 mb-5 bg-white rounded">
          <div className="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
            <small id="emailHelp" className="form-text text-muted"></small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>

    );
  }
}

export default Register;
