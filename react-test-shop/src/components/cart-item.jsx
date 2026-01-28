const CartItem = ({ name, price, amount, id, onDelete, onChange }) => {
    return (
      <div>
        {amount}x {name} {price}€
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onDelete(id)}
        >
          Aus Warenkorb entfernen
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(id, 1)}
        >
          +
        </button>
        <button
          className="btn btn-primary btnShoppingCart"
          onClick={() => onChange(id, -1)}
        >
          -
        </button>
      </div>
    );
  };

export default CartItem;
