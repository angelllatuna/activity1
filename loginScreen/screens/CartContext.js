import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.name === item.name && i.price === item.price
      );
  
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: item.quantity }];
      }
    });
  };  

  const updateCartItemQuantity = (id, action) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) => {
          if (item.id === id) {
            const updatedItem = { ...item };
            if (action === "increase") {
              updatedItem.quantity += 1;
            } else if (action === "decrease" && updatedItem.quantity > 1) {
              updatedItem.quantity -= 1;
            }
            return updatedItem;
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItemQuantity, calculateTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
