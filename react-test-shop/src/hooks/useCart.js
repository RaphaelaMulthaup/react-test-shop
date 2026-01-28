import { useState, useEffect } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem("cartItems");

    if (storedItems) {
      return JSON.parse(storedItems);
    }

    return [];
  });

  const addToCart = (id) => {
    setCartItems((prevCartItems) => {
      const exists = prevCartItems.some((item) => item.id === id);

      if (exists) {
        return prevCartItems.map((item) =>
          item.id === id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }

      return [
        ...prevCartItems,
        {
          id: id,
          amount: 1,
        },
      ];
    });
  };

  const deleteItem = (id) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== id),
    );
  };

  const updateCartQuantity = (id, change) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === id
            ? { ...item, amount: item.amount + change }
            : item,
        )
        .filter((item) => item.amount > 0),
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return {
    cartItems,
    addToCart,
    deleteItem,
    updateCartQuantity,
  };
}
