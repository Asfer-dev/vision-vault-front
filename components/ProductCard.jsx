"use client";

import { CartContext } from "@/contexts/cartContext";
import Link from "next/link";
import { useContext } from "react";
import { AddToWishlistButton, RemoveFromListButton } from "./WishlistButtons";

export default function ProductCard({ product, wish }) {
  const { addProduct, setCartVisible } = useContext(CartContext);

  return (
    <div className="flex justify-center">
      <div className="hover:shadow-lg border-t shadow transition duration-200 w-[300px] pb-4 flex flex-col gap-4">
        <Link href={"/glasses/" + product._id}>
          <img
            src={product.photos[0]}
            className="w-[300px] hover:scale-105 hover:shadow-md transition duration-200"
          />
        </Link>

        <div className="px-3 relative">
          <Link className="flex" href={"/glasses/" + product._id}>
            <h3 className="product-title font-medium transition duration-200 relative overflow-hidden">
              {product.title}
            </h3>
          </Link>

          {/* ADD TO WISHLIST BUTTON */}
          <AddToWishlistButton productId={product._id} />

          {/* REMOVE FROM WISH LIST BUTTON */}
          {wish && <RemoveFromListButton productId={product._id} />}
        </div>
        <button
          onClick={() => {
            addProduct(product._id);
            setCartVisible(true);
          }}
          className="p-2 font-semibold border-2 border-accent hover:bg-accent w-full hover:text-white transition duration-200"
        >
          ADD TO CART
        </button>
        <p className="px-3">
          Price: <span className="font-medium">$ {product.price}</span>
        </p>
      </div>
    </div>
  );
}
