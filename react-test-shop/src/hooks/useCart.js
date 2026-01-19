import { useState } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((prevCartItems) => {
      const exists = prevCartItems.some((item) => item.productId === productId);

      if (exists) {
        return prevCartItems.map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + 1 }
            : item,
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
      prevCartItems.filter((item) => item.productId !== productId),
    );
  };

  const updateCartQuantity = (productId, change) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.productId === productId
            ? { ...item, amount: item.amount + change }
            : item,
        )
        .filter((item) => item.amount > 0),
    );
  };

  return {
    cartItems,
    addToCart,
    deleteItem,
    updateCartQuantity,
  };
}
