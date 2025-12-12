import React, { Component } from "react";

class FormNewProduct extends Component {
  state = {
    newProduct: {
      name: "",
      price: "",
      description: "",
    },
    error: null,
    nameMissing: null,
    incorrectPrice: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newProduct } = this.state;
    const nameEntered = newProduct.name != "";
    if (!nameEntered) {
      this.setState({
        nameMissing: "Trage einen Namen ein.",
      });
      return;
    } else {
      this.setState({
        nameMissing: null,
      });
    }
    const priceLowerZero = newProduct.price <= 0;
    if (priceLowerZero) {
      this.setState({
        incorrectPrice: "Trage einen Preis ein, der größer als null ist.",
      });
      return;
    } else {
      this.setState({
        incorrectPrice: null,
      });
    }
    const exists = this.props.existingProducts.some(
      (product) => product.name === newProduct.name
    );
    if (exists) {
      this.setState({
        error: "Ein Produkt mit diesem Namen existiert bereits.",
      });
      return;
    } else {
      this.setState({
        error: null,
      });
    }

    this.props.onSubmit(newProduct);
    this.setState({
      newProduct: { name: "", price: "", description: "", imageUrl: "" },
      error: null,
      nameMissing: null,
      incorrectPrice: null,
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
        {this.state.nameMissing && (
          <div className="error">{this.state.nameMissing}</div>
        )}

        <label>
          <span className="label"> Preis:</span>

          <input
            name="price"
            value={price}
            onChange={this.handleChange}
            type="number"
            placeholder="z. B. 3.99"
          />
        </label>
        {this.state.incorrectPrice && (
          <div className="error">{this.state.incorrectPrice}</div>
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
        {this.state.error && <div className="error">{this.state.error}</div>}

        <button type="submit">Produkt hinzufügen</button>
      </form>
    );
  }
}

export default FormNewProduct;
