"use client";

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

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
  const removeProduct = (productId) => {
    setCartProducts((prev) => {
      const pos = cartProducts.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  };

  const clearCart = () => {
    ls?.setItem("cart", "[]");
    setCartProducts([]);
  };

  return (
    <CartContext.Provider
      value={{ cartProducts, addProduct, removeProduct, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
