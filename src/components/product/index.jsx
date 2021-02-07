import React, { Component } from 'react';
import QuantityPicker from "../quantityPicker/quantityPicker";


import "./product.css";

class Product extends Component {
    state = { 
        minimum: 1,
        price: this.props.price,
        total: this.props.price,

     };
    render() { 
        return (  
            <div className="product">
                <h4>This will be a product</h4>
                <img src="	https://picsum.photos/230/200" alt="Product Here"></img>
                
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