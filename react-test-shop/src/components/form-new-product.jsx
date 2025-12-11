import React, { Component } from "react";

class FormNewProduct extends Component {
  state = {
    newProduct: {
      name: "",
      price: "",
      description: "",
      imageUrl: "",
    },
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

  render() {
    const { name, price, description, imageUrl } = this.state.newProduct;

    return (
      <form>
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

        <label>
          <span className="label">Bild-URL:</span>

          <input
            name="imageUrl"
            value={imageUrl}
            onChange={this.handleChange}
            type="text"
            placeholder="z. B. /images/apfelsaft.png oder https://..."
          />
        </label>
        <button></button>
      </form>
    );
  }
}

export default FormNewProduct;
