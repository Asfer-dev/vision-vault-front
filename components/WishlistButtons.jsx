"use client";

import { WishlistContext } from "@/contexts/wishlistContext";
import { IconClose, IconHeart, IconHeartSolid } from "@/lib/icons";
import { signIn, useSession } from "next-auth/react";
import { useContext, useState } from "react";

export function AddToWishlistButton({ productId }) {
  const { data: session } = useSession();

  const { wishlist, addToList } = useContext(WishlistContext);

  const [dropWishVisible, setDropWishVisible] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          if (session) {
            addToList(productId);
          } else {
            signIn("google");
          }
        }}
        onMouseOver={() => setDropWishVisible(true)}
        onMouseOut={() => setDropWishVisible(false)}
        disabled={wishlist.find((itemId) => itemId === productId)}
        className="absolute top-0 right-2 hover:scale-110 transition duration-200"
      >
        {wishlist.find((itemId) => itemId === productId) ? (
          <IconHeartSolid size="w-6 h-6 text-red-500" />
        ) : (
          <IconHeart size="w-6 h-6 text-neutral-500 hover:text-black" />
        )}
        <span className="sr-only">Add to wishlist</span>
      </button>
      {dropWishVisible && (
        <div
          className={
            wishlist.find((itemId) => itemId === productId)
              ? "absolute -top-12 -right-16 shadow-md p-2 rounded-md cursor-default bg-neutral-400 text-white opacity-90"
              : "absolute -top-12 -right-12 shadow-md p-2 rounded-md cursor-default bg-white"
          }
        >
          {wishlist.find((itemId) => itemId === productId)
            ? "Added To Wish List"
            : "Add to Wish List"}
        </div>
      )}
    </>
  );
}

export function RemoveFromListButton({ productId }) {
  const { removeFromList } = useContext(WishlistContext);
  return (
    <button
      onClick={() => {
        removeFromList(productId);
      }}
      className="absolute top-1 right-10 hover:scale-110 transition duration-200"
    >
      <IconClose size="w-5 h-5" />
      <span className="sr-only">Add to wishlist</span>
    </button>
  );
}
