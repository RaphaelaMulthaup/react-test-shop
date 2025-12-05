import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};
  render() {
    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {this.props.items.map((item) => (
          <div key={item.name}>
            {item.amount}x {item.name} {item.price}€
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onDelete(item.name)}
            >
              Aus Warenkorb entfernen
            </button>
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onChange(item.name, 1)}
            >
              +
            </button>
            <button
              className="btn btn-primary btnShoppingCart"
              onClick={() => this.props.onChange(item.name, -1)}
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
