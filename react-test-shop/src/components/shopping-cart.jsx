import CartItem from "./cart-item";

const ShoppingCart = ({ items, products, onDelete, onChange }) => {
  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.productId === item.productId);
      if (!product) return null;
      return { ...product, amount: item.amount };
    })
    .filter(Boolean);

  return (
    <div className="shopping-cart">
      <h2>Warenkorb</h2>
      {cartItems.map((item) => (
        <CartItem
          key={item.productId}
          {...item}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
