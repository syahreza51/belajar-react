import React, { Component } from 'react';
import Product from '../common/Product';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    }
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonStr => {
      this.setState({ product: jsonStr });
      console.log(jsonStr);
    });
  }

  deleteArray(id) {
    alert("Data dengan nama " + id + " Dihapus")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.product.map((data) =>
            <Product key={data.id} dataProduct={data} delete={this.deleteArray} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
