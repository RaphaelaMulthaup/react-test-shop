import React, { Component } from "react";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shopping-cart";
import ProductPage from "./components/product-page";

class App extends Component {
  state = {
    cartItems: [],
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

  addToCart = (productId) => {
    this.setState((prevState) => {
      const exists = prevState.cartItems.some(
        (item) => item.productId === productId
      );

      if (exists) {
        return {
          cartItems: prevState.cartItems.map((item) =>
            item.productId === productId
              ? { ...item, amount: item.amount + 1 }
              : item
          ),
        };
      }

      return {
        cartItems: [
          ...prevState.cartItems,
          {
            productId: productId,
            amount: 1,
          },
        ],
      };
    });
  };

  deleteItem = (productId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.productId !== productId),
    }));
  };

  updateCartQuantity = (productId, change) => {
    this.setState((prevState) => {
      const cartItems = prevState.cartItems
        .map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + change }
            : item
        )
        .filter((item) => item.amount > 0);

      return { cartItems };
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

  render() {
    return (
      <>
        <Navbar />
        <div className="main-container">
          <ProductPage
            products={this.state.products}
            onaddToCart={this.addToCart}
            onAddNewProduct={this.addNewProduct}
          />
          <ShoppingCart
            cartItems={this.state.cartItems}
            products={this.state.products}
            onChange={this.updateCartQuantity}
            onDelete={this.deleteItem}
          />
        </div>
      </>
    );
  }
}

export default App;
