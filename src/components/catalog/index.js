import React, { Component } from "react";

import Product from "../product/index";

class Catalog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Product price={10}></Product>
        <Product price={20}></Product>
        <Product price={30}></Product>
        <Product price={40}></Product>
        <Product price={50}></Product>
        <Product price={60}></Product>
        <Product price={70}></Product>
        <Product price={80}></Product>
        <Product price={90}></Product>
        <Product price={100}></Product>
      </React.Fragment>
    );
  }
}

export default Catalog;
