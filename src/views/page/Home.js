import React, { Component } from 'react';
import Product from '../common/Product';

class Home extends Component {
  constructor(props) { // Constructor adalah script yg pertama kali dibaca
    super(props);
    this.state = {
      product: [],
      statusProduct: ""
    }
  }
  
  componentDidMount(){ //ComponentDidMount akan dijalankan setelah script menjalankan template
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonStr => {
      this.setState({ 
        product: jsonStr,
        statusProduct: 200
      });
    });
  }

  deleteArray(id) {
    alert("Data dengan nama " + id + " Dihapus")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.statusProduct === 200 && ( //if conditional. if(statusProduct == 200){ Show data
              this.state.product.map((data) =>
              <Product key={data.id} dataProduct={data} delete={this.deleteArray} />
            )
          )}
          {this.state.statusProduct === "" && ( //if conditional. if(statusProduct == ""){ Loading data
            <div className="center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
