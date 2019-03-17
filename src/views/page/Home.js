import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          nama: "Dhani",
          umur: 24,
          pekerjaan: "Programmer"
        },
        {
          nama: "Yusuf",
          umur: 28,
          pekerjaan: "Manajer"
        },
        {
          nama: "Yusuf",
          umur: 28,
          pekerjaan: "Manajer"
        },
        {
          nama: "Yusuf",
          umur: 28,
          pekerjaan: "Manajer"
        },
        {
          nama: "Yusuf",
          umur: 28,
          pekerjaan: "Manajer"
        },
        {
          nama: "Yusuf",
          umur: 28,
          pekerjaan: "Manajer"
        }
      ]
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.product.map((data) =>
            <div className="col-sm-3 mt-20">
              <div className="shadow" style={{"padding":"10px"}}>
              Nama : {data.nama}<br/>
              Umur : {data.umur}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
