import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-sm-3 mt-20">
        <div className="shadow" style={{ "padding": "10px" }}>
          Nama : {this.props.dataProduct.name}<br />
          Telepon : {this.props.dataProduct.phone}
          <button onClick={this.props.delete.bind(this, this.props.dataProduct.name)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default Product;
