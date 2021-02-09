import React, { Component } from 'react';
import QuantityPicker from "../quantityPicker/quantityPicker";


import "./product.css";

class Product extends Component {
    state = { 
        minimum: this.props.data.minimum || 1,
        price: this.props.data.price,
        total: this.props.data.price,

     };
    render() { 
        return (  
            <div className="product">
                <h4>This will be a product</h4>
                <img src={"/images/products/" + this.props.data.image} alt="Product Here"></img>
                <h4>{this.props.data.title}</h4>
                
                <p>  Product description </p>
                <h6> Total: ${this.state.total.toLocaleString("en-US")}</h6>
                <h6> price: ${this.state.price.toLocaleString("en-US")}</h6>

                <QuantityPicker 
                min={this.state.minimum} 
                onValueChange={this.handleValueChange} 
                ></QuantityPicker> 
                
            </div>
        );
    }


    handleValueChange = (qnty) => {
console.log("value has changed", qnty);
let total = this.state.price * qnty;
this.setState({ total: total});    
    };
}
 
export default Product;