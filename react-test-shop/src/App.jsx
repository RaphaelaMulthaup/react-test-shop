import { useState } from "react";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shopping-cart";
import ProductPage from "./components/product-page";
import { useCart } from "./hooks/useCart";

function App() {
  const { cartItems, addToCart, deleteItem, updateCartQuantity } = useCart();
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
