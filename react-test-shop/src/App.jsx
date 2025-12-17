import React, { Component } from "react";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shopping-cart";
import ProductPage from "./components/product-page";

class App extends Component {
  state = {
    items: [],
    products: [
      {
        productId: 1,
        name: "Tomaten",
        price: 2.5,
        description: "Text über Tomaten",
      },
      {
        productId: 2,
        name: "Gurken",
        price: 3.0,
        description: "Text über Gurken",
      },
      {
        productId: 3,
        name: "Karotten",
        price: 1.5,
        description: "Text über Karotten",
      },
      {
        productId: 4,
        name: "Paprika",
        price: 2.0,
        description: "Text über Paprika",
      },
    ],
  };

  addItem = (product) => {
    this.setState((prevState) => {
      const exists = prevState.items.some(
        (item) => item.productId === product.productId
      );

      if (exists) {
        return {
          items: prevState.items.map((item) =>
            item.productId === product.productId
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }

      return {
        items: [
          ...prevState.items,
          {
            productId: product.productId,
            amount: 1,
          },
        ],
      };
    });
  };

  deleteItem = (productId) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.productId !== productId),
    }));
  };

  changeAmount = (productId, change) => {
    this.setState((prevState) => {
      const items = prevState.items
        .map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + change }
            : item
        )
        .filter((item) => item.amount > 0);

      return { items };
    });
  };

  addNewProduct = (newProduct) => {
    this.setState((prevState) => ({
      products: [
        ...prevState.products,
        {
          ...newProduct,
          productId:
            Math.max(...prevState.products.map((p) => p.productId)) + 1,
        },
      ],
    }));
  };

  getCartItems() {
    return this.state.items.map((item) => {
      const product = this.state.products.find(
        (p) => p.productId === item.productId
      );
      return { ...product, amount: item.amount };
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="main-container">
          <ProductPage
            products={this.state.products}
            onAddItem={this.addItem}
            onAddNewProduct={this.addNewProduct}
          />
          <ShoppingCart
            items={this.getCartItems()}
            onChange={this.changeAmount}
            onDelete={this.deleteItem}
          />
        </div>
      </>
    );
  }
}

export default App;
