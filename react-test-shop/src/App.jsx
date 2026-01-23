import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product-page";
import CartPage from "./pages/CartPage";
import NewProductPage from "./pages/NewProductPage";
import { useState } from "react";
import Navbar from "./components/navbar";
import { useCart } from "./hooks/useCart";
import ProductDetailPage from "./pages/ProductDetailPage";

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
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductPage products={products} onaddToCart={addToCart} />}
        />
        <Route
          path="/products"
          element={<ProductPage products={products} onaddToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              products={products}
              onChange={updateCartQuantity}
              onDelete={deleteItem}
            />
          }
        />
        <Route
          path="/products/new"
          element={
            <NewProductPage
              onSubmit={addNewProduct}
              existingProducts={products}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={
            <ProductDetailPage products={products} onAdd={addToCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
