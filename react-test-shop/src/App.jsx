import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";
import FormNewProduct from "./components/form-new-product";

class App extends Component {
  state = {
    items: [],
    products: [
      { id: 1, name: "Tomaten", price: 2.5, description: "Text über Tomaten" },
      { id: 2, name: "Gurken", price: 3.0, description: "Text über Gurken" },
      {
        id: 3,
        name: "Karotten",
        price: 1.5,
        description: "Text über Karotten",
      },
      { id: 4, name: "Paprika", price: 2.0, description: "Text über Paprika" },
    ],
  };

  addItem = (product) => {
    this.setState((prevState) => {
      const exists = prevState.items.some((item) => item.id === product.id);

      if (exists) {
        return {
          items: prevState.items.map((item) =>
            item.id === product.id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      }

      return {
        items: [
          ...prevState.items,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            amount: 1,
          },
        ],
      };
    });
  };

  deleteItem = (id) => {
    let currentItems = this.state.items;
    let itemsWithoutTheDeleted = currentItems.filter((item) => item.id !== id);
    this.setState({ items: itemsWithoutTheDeleted });
  };

  changeAmount = (id, change) => {
    this.setState((prevState) => {
      const items = prevState.items
        .map((item) =>
          item.id === id ? { ...item, amount: item.amount + change } : item
        )
        .filter((item) => item.amount > 0);

      return { items };
    });
  };

  addNewProduct = (newProduct) => {
    this.setState((prevState) => {
      const nextId = Math.max(...prevState.products.map((p) => p.id)) + 1;
      return {
        products: [...prevState.products, { ...newProduct, id: nextId }],
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="main-container-left">
            <div className="product-container">
              {this.state.products.map((product) => (
                <Product
                  key={product.id}
                  onAdd={() => this.addItem(product)}
                  title={product.name}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
            <FormNewProduct
              onSubmit={this.addNewProduct}
              existingProducts={this.state.products}
            />
          </div>
          <ShoppingCart
            onChange={this.changeAmount}
            onDelete={this.deleteItem}
            items={this.state.items}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
