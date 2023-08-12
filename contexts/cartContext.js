"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  const [cartVisible, setCartVisible] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    const previousCart = JSON.parse(ls?.getItem("cart"));
    setCartProducts(!previousCart ? [] : previousCart);
  }, []);

  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };
  const decreaseProduct = (productId) => {
    setCartProducts((prev) => {
      const pos = cartProducts.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  };
  const removeProduct = (productId) => {
    setCartProducts((prev) => {
      return prev.filter((id) => id !== productId);
    });
  };

  const clearCart = () => {
    ls?.setItem("cart", "[]");
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        addProduct,
        decreaseProduct,
        removeProduct,
        clearCart,
        cartVisible,
        setCartVisible,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
