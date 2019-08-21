import React, { Component } from "react";
// The helper functions are here
import { round } from "../helpers/helper"

class ShoppingCartItem extends Component {
  render() {
    const product = this.props.product;

    return (
      <tr className="shopping-cart-item">
        <td>{this.props.amount}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{round(product.price * this.props.amount, 2)}</td>
        <td>
          <button
            className="btn btn-sm btn-success mr-2"
            onClick={() => {
              this.props.increaseProductAmount(product._id);
            }}
          >
            +
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              this.props.decreaseProductAmount(product._id);
            }}
          >
            -
          </button>
        </td>
      </tr>
    );
  }
}

export default ShoppingCartItem;
