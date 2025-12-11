import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";
import FormNewProduct from "./components/form-new-product";

class App extends Component {
  state = {
    items: [],
    products: [
      { name: "Tomaten", price: 2.5, description: "Text über Tomaten" },
      { name: "Gurken", price: 3.0, description: "Text über Gurken" },
      { name: "Karotten", price: 1.5, description: "Text über Karotten" },
      { name: "Paprika", price: 2.0, description: "Text über Paprika" },
    ],
  };

  addItem = (product) => {
    this.setState((prevState) => {
      const updatedItems = prevState.items.map((item) => {
        if (item.name === product.name) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      const exists = prevState.items.some((item) => item.name === product.name);
      return {
        items: exists
          ? updatedItems
          : [
              ...prevState.items,
              { amount: 1, name: product.name, price: product.price },
            ],
      };
    });
  };

  deleteItem = (name) => {
    let currentItems = this.state.items;
    let itemsWithoutTheDeleted = currentItems.filter(
      (item) => item.name != name
    );
    this.setState({ items: itemsWithoutTheDeleted });
  };

  changeAmount = (name, change) => {
    let currentItems = this.state.items;
    let itemToChangeAmount = currentItems.find((item) => item.name === name);
    itemToChangeAmount.amount += change;
    if (itemToChangeAmount.amount === 0) {
      this.deleteItem(name);
    } else {
      this.setState({ items: currentItems });
    }
  };

  addNewProduct = (newProduct) => {
    this.setState((prevState) => {
      return {
        products: [...prevState.products, newProduct],
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
                  key={product.name}
                  onAdd={() => this.addItem(product)}
                  title={product.name}
                  description={product.description}
                />
              ))}
            </div>
            <FormNewProduct onSubmit={this.addNewProduct} existingProducts={this.state.products}/>
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
