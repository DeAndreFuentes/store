import React, { Component } from 'react';
import QuantityPicker from "../quantityPicker/quantityPicker";


import "./product.css";

class Product extends Component {
    state = {  };
    render() { 
        return (  
            <div className="product">
                <h4>This will be a product</h4>
                <img src="	https://picsum.photos/230/200" alt="Product Here"></img>
                
                <h6> Total </h6>
                <h6> price </h6>

                <QuantityPicker></QuantityPicker> 
                
                

            </div>
        );
    }
}
 
export default Product;