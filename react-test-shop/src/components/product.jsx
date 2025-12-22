import React, { Component } from "react";

const Product = ({ title, description, price, onAdd }) => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={`/assets/img/${title.toLowerCase()}.jpg`}
          alt={`Image of ${title}`}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>{price}€</p>
          <button onClick={onAdd} className="btn btn-primary">
            Hinzufügen
          </button>
        </div>
      </div>
    );
  };

export default Product;
