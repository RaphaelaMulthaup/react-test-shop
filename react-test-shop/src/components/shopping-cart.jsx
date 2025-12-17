import React, { Component } from "react";
import CartItem from "./cart-item";

class ShoppingCart extends Component {
  getCartItems() {
    const { items, products } = this.props;
    return items
      .map((item) => {
        const product = products.find((p) => p.productId === item.productId);
        if (!product) return null;
        return { ...product, amount: item.amount };
      })
      .filter(Boolean);
  }

  render() {
    const cartItems = this.getCartItems();

    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {cartItems.map((item) => (
          <CartItem
            key={item.productId}
            item={item}
            onDelete={this.props.onDelete}
            onChange={this.props.onChange}
          />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
