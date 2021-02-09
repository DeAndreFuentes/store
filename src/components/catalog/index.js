import React, { Component } from "react";

import Product from "../product/index";
import ProductService from "../../services/ProductService";

class Catalog extends Component {
  state = {
    products: [],
  };

  // constructor(){
  //   super();
  // console.log("constructor");
  // }

  render() {
    console.log("render");
    return (
      <div className="catalog-page">
        <div className="products">
          {this.state.products.map((prod) => (
            <Product key={prod.id} data={prod}></Product>
          ))}
        </div>
      </div>
    );
  }

  // componentWillMount(){
  //   console.log("will mount");

  // }

  componentDidMount() {
    console.log("Did mount");

    let service = new ProductService();
    let data = service.getProducts();
    console.log("got data", data);

    this.setState({ products: data });
  }
}

export default Catalog;
