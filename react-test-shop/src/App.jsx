import { useState } from "react";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shopping-cart";
import ProductPage from "./components/product-page";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
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
  ]);

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => {
      const exists = prevCartItems.some((item) => item.productId === productId);

      if (exists) {
        return prevCartItems.map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [
        ...prevCartItems,
        {
          productId: productId,
          amount: 1,
        },
      ];
    });
  };

  const deleteItem = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.productId !== productId)
    );
  };

  const updateCartQuantity = (productId, change) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + change }
            : item
        )
        .filter((item) => item.amount > 0)
    );
  };

  const addNewProduct = (newProduct) => {
    setProducts((prevStateProducts) => [
      ...prevStateProducts,
      {
        ...newProduct,
        productId: Math.max(...prevStateProducts.map((p) => p.productId)) + 1,
      },
    ]);
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <ProductPage
          products={products}
          onaddToCart={addToCart}
          onAddNewProduct={addNewProduct}
        />
        <ShoppingCart
          cartItems={cartItems}
          products={products}
          onChange={updateCartQuantity}
          onDelete={deleteItem}
        />
      </div>
    </>
  );
}

export default App;
