import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/product-page";
import CartPage from "./pages/CartPage";
import NewProductPage from "./pages/NewProductPage";
import Navbar from "./components/navbar";
import { useCart } from "./hooks/useCart";
import { useProducts } from "./hooks/useProducts";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  const { cartItems, addToCart, deleteItem, updateCartQuantity } = useCart();
  const { products, isLoading, error, addNewProduct } = useProducts();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProductPage
              products={products}
              isLoading={isLoading}
              error={error}
              onaddToCart={addToCart}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductPage
              products={products}
              isLoading={isLoading}
              error={error}
              onaddToCart={addToCart}
            />
          }
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
          path="/product/:id"
          element={
            <ProductDetailPage
              products={products}
              isLoading={isLoading}
              error={error}
              onAdd={addToCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
