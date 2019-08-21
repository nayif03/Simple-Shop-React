import React, { Component } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
// The helper functions are here
import { calculateTotal } from "../helpers/helper"

class ShoppingCart extends Component {


  render() {
    const itemCount = Object.keys(this.props.cart).length;

    return (
      <div id="cart">
        <h1>Shopping Cart</h1>

        {itemCount === 0 && <div className="empty">- no products yet -</div>}

        {itemCount > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Name</th>
                <th>Price</th>
                <th>Total</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(this.props.cart).map(uuid => (
                <ShoppingCartItem
                  key={uuid}
                  product={this.props.products[uuid]}
                  amount={this.props.cart[uuid]}
                  increaseProductAmount={this.props.increaseProductAmount}
                  decreaseProductAmount={this.props.decreaseProductAmount}
                />
              ))}
              <tr>
                <td colSpan="5">&nbsp;</td>
              </tr>
              <tr>
                <td colSpan="3">&nbsp;</td>
                <td>
                  <strong>Total</strong>
                </td>
                <td className="text-right">€ {calculateTotal(this.props.cart, this.props.products)}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default ShoppingCart;
