import CartItem from "./cart-item";

const ShoppingCart = ({ cartItems, products, onDelete, onChange }) => {
  const completeCartItems = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      if (!product) return null;
      return { ...product, amount: item.amount };
    })
    .filter(Boolean);

  return (
    <div className="shopping-cart">
      <h2>Warenkorb</h2>
      {completeCartItems.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onDelete={onDelete}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
