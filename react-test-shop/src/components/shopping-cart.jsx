import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};

  getCartItems() {
    const { items, products } = this.props;
    return items.map((item) => {
      const product = products.find((p) => p.productId === item.productId);
      return { ...product, amount: item.amount };
    });
  }

  render() {
    const cartItems = this.getCartItems();

    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {cartItems.map((item) => (
          <div key={item.productId}>
            {item.amount}x {item.name} {item.price}€
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onDelete(item.productId)}
            >
              Aus Warenkorb entfernen
            </button>
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onChange(item.productId, 1)}
            >
              +
            </button>
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onChange(item.productId, -1)}
            >
              -
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
