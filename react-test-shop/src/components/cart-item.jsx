import React, { Component } from "react";

class CartItem extends Component {
  render() {
    const { item, onDelete, onChange } = this.props;

    return (
      <div>
        {item.amount}x {item.name} {item.price}€
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onDelete(item.productId)}
        >
          Aus Warenkorb entfernen
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(item.productId, 1)}
        >
          +
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(item.productId, -1)}
        >
          -
        </button>
      </div>
    );
  }
}

export default CartItem;
