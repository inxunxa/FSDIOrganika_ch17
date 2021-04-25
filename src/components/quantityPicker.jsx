import React, { Component } from "react";

import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
    name: "Sergio",
  };

  render() {
    return (
      <div className="qp-page">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>
        <label>{this.state.quantity}</label>
        <button className="btn btn-sm btn-info" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }

  increase = () => {
    console.log("Increase!!");
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrease = () => {
    let qnty = this.state.quantity - 1;
    if (qnty >= 1) {
      this.setState({ quantity: qnty });
    }
  };
}

export default QuantityPicker;