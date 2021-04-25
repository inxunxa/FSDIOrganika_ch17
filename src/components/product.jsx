import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./product.css";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="product">
        <img src="https://picsum.photos/240/200" alt="product" />
        <h6 className="title">Title of the Product</h6>
        <label className="total-value">$10.00</label>
        <label className="price-value">$10.00</label>

        <QuantityPicker></QuantityPicker>

        <button className="btn btn-sm btn-primary">
          <i class="fa fa-cart-plus" aria-hidden="true"></i>
          Add
        </button>
      </div>
    );
  }
}

export default Product;
