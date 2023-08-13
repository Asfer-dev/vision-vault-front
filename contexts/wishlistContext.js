"use client";

import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext({});

export const WishlistContextProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const updateWishlist = async () => {
      if (wishlist.length >= 0) {
        try {
          const response = await fetch("/api/wishlist", {
            method: "PATCH",
            body: JSON.stringify({ wishlist, id: session?.user?.id }),
          });
          if (response.ok) {
            console.log("wishlist updated");
          } else {
            console.log("error occurred while updating wishlist");
          }
        } catch (error) {
          console.log(error);
        }
      }
    };
    updateWishlist();
  }, [wishlist]);

  useEffect(() => {
    const retrieveList = async () => {
      try {
        const response = await fetch("/api/wishlist", {
          method: "POST",
          body: JSON.stringify({ id: session?.user?.id }),
        });
        const data = await response.json();
        const { list: previousList } = data;
        setWishlist((prev) => (!previousList ? prev : previousList));
      } catch (error) {
        console.log(error);
      }
    };
    retrieveList();
  }, [session?.user]);

  const addToList = (productId) => {
    if (!wishlist.find((prodId) => prodId === productId))
      setWishlist((prev) => [...prev, productId]);
  };
  const removeFromList = (productId) => {
    setWishlist((prev) => {
      return prev.filter((id) => id !== productId);
    });
  };

  const clearList = async () => {
    try {
      const response = await fetch("/api/wishlist?id=" + session?.user?.id, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("wishlist updated");
      } else {
        console.log("error occurred while updating wishlist");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToList,
        removeFromList,
        clearList,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
