import React, { Component } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";

class Shop extends Component {
    constructor() {
        super();
        // Local Storage - check if we saved shoppingcart
        this.localStorage = JSON.parse(localStorage.getItem('shoppingcart'))
        this.shoppingcart = (this.localStorage !== null ? this.localStorage : {})

        this.state = {
            products: {},
            cart: {}
        };
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate() {
        //Update localstoarage if cart changes
        localStorage.setItem("shoppingcart", JSON.stringify(this.state.cart))
    }

    loadProducts() {
        fetch("products.json")
            .then(response => {
                return response.json();
            })
            .then(products => {
                this.setState(state => {
                    state.products = products;
                    //if the localstorage contain a cart it will be used
                    state.cart = this.shoppingcart
                    return state;
                });
            });
    }

    addProductToCart = (productId, amount) => {
        if (amount < 1 || Number.isNaN(Number(amount))) {
            return;
        }

        // setState the right way! https://reactjs.org/docs/react-component.html#setstate
        if (productId in this.state.cart) {
            this.setState(state => {
                state.cart[productId] += amount;
                console.log(state)
                return state;
            });
        } else {
            this.setState(state => {
                state.cart[productId] = amount;
                return state;
            });
        }
    };

    increaseProductAmount = productId => {
        this.setState(state => {
            state.cart[productId]++;
            return state;
        });
    };

    decreaseProductAmount = productId => {
        if (this.state.cart[productId] > 1) {
            this.setState(state => {
                state.cart[productId]--;
                return state;
            });
        } else {
            this.setState(state => {
                delete state.cart[productId];
                return state;
            });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ProductList
                            products={this.state.products}
                            addProductToCart={this.addProductToCart}
                        />
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ShoppingCart
                            cart={this.state.cart}
                            products={this.state.products}
                            increaseProductAmount={this.increaseProductAmount}
                            decreaseProductAmount={this.decreaseProductAmount}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;
