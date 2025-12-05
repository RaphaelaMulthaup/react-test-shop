import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {
    items: [],
  };
  addItem = (amount, name, price) => {
    let currentItems = this.state.items;
    let existingItem = currentItems.find((item) => item.name === name);
    if (existingItem) {
      existingItem.amount++;
    } else {
      currentItems.push({ amount, name, price });
    }
    this.setState({ items: currentItems });
    console.log(this.state);
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
      // currentItems = currentItems.filter((item) => item.name != name);
      this.deleteItem(name);
    }
    this.setState({ items: currentItems });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product
              onAdd={() => this.addItem(1, "Tomaten", 2.5)}
              title="Tomaten"
              description="Text über Tomaten"
            />{" "}
            <Product
              onAdd={() => this.addItem(1, "Gurken", 3.0)}
              title="Gurken"
              description="Text über Gurken"
            />{" "}
            <Product
              onAdd={() => this.addItem(1, "Karotten", 1.5)}
              title="Karotten"
              description="Text über Karotten"
            />{" "}
            <Product
              onAdd={() => this.addItem(1, "Paprika", 2.0)}
              title="Paprika"
              description="Text über Paprika"
            />
          </div>
          <ShoppingCart onChange={this.changeAmount} onDelete={this.deleteItem} items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
