import ShoppingCart from "../components/shopping-cart";

function CartPage({ cartItems, products, onChange, onDelete }) {
  return (
    <div>
      <h1>Warenkorb</h1>
      <ShoppingCart
        cartItems={cartItems}
        products={products}
        onChange={onChange}
        onDelete={onDelete}
      />
    </div>
  );
}

export default CartPage;
