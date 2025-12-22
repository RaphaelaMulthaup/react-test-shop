import React, { Component } from "react";

const CartItem = ({ name, price, amount, productId, onDelete, onChange }) => {
    return (
      <div>
        {amount}x {name} {price}€
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onDelete(productId)}
        >
          Aus Warenkorb entfernen
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(productId, 1)}
        >
          +
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(productId, -1)}
        >
          -
        </button>
      </div>
    );
  };

export default CartItem;
