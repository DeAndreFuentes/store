import React, { Component } from 'react';

import "./quantityPicker.css"



class  QuantityPicker extends Component {
    state = { 
        quantity: this.props.min || 1,
        name: "DeAndre",
    


     };



    render() { 
        return (
            <div className="qntyPicker">
        <button onClick={this.decrease} className="btn btn-sm btn-primary">-</button>

        <label className="qnt">{this.state.quantity}</label>
        

        <button onClick={this.increase} className="btn btn-sm btn-primary">+</button>
        <i  className="fa fa-cart-arrow-down" aria-hidden="true"></i>
      </div>
          );
    }

    decrease = () => {
      var qnty = this.state.quantity - 1;
      if (qnty < this.props.min) qnty = this.props.min;
      this.setState({ quantity: qnty });
       
      this.props.onValueChange(qnty);
    };

    increase = () => {
        let qnty = this.state.quantity + 1;
        this.setState({ quantity: qnty});

        this.props.onValueChange(qnty);
    };
}
 
export default QuantityPicker;