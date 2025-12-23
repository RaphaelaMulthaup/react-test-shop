import React, { Component } from "react";
import { validateProduct } from "./../validateProduct";

class FormNewProduct extends Component {
  state = {
    newProduct: {
      name: "",
      price: "",
      description: "",
    },
    errors: {
      name: null,
      price: null,
      duplicate: null,
    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    const parsedValue = name === "price" ? Number(value) : value;

    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: parsedValue,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateProduct(
      this.state.newProduct,
      this.props.existingProducts
    );
    this.setState({ errors });
    if (Object.values(errors).some((value) => value !== null)) {
      return;
    }
    this.props.onSubmit(this.state.newProduct);
    this.setState({
      newProduct: { name: "", price: "", description: "" },
      errors: {
        name: null,
        price: null,
        duplicate: null,
      },
    });
  };

  render() {
    const { name, price, description } = this.state.newProduct;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className="label">Produktname:</span>

          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            placeholder="z. B. Apfelsaft"
          />
        </label>
        {this.state.errors.name && (
          <div className="error">{this.state.errors.name}</div>
        )}

        <label>
          <span className="label"> Preis:</span>

          <input
            name="price"
            value={price}
            onChange={this.handleChange}
            type="number"
            placeholder="z. B. 3.99"
            step="0.01"
          />
        </label>
        {this.state.errors.price && (
          <div className="error">{this.state.errors.price}</div>
        )}

        <label>
          <span className="label">Beschreibung:</span>

          <input
            name="description"
            value={description}
            onChange={this.handleChange}
            type="text"
            placeholder="z. B. Frischer Bio-Apfelsaft"
          />
        </label>
        {this.state.errors.duplicate && (
          <div className="error">{this.state.errors.duplicate}</div>
        )}

        <button type="submit">Produkt hinzufügen</button>
      </form>
    );
  }
}

export default FormNewProduct;
