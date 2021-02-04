import React, { Component } from 'react';

import "./quantityPicker.css"



class  QuantityPicker extends Component {
    state = { 
        quantity: 1,
        name: "DeAndre",
    


     };



    render() { 
        return (
            <div className="qntyPicker">
        <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>

        <label className="qnt">{this.state.quantity}</label>

        <button onClick={this.increase} className="btn btn-sm btn-primary">+</button>
        <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
      </div>
          );
    }

    decrease = () => {
      var qnty = this.state.quantity - 1;
      if (qnty === 0) qnty = 1;
      this.setState({ quantity: qnty });
       
    };

    increase = () => {
        this.setState({ quantity: this.state.quantity + 1 });
    };
}
 
export default QuantityPicker;