"use client";

import { CartContext } from "@/contexts/cartContext";
import { IconHeart } from "@/lib/icons";
import Link from "next/link";
import { useContext } from "react";

export default function ProductCard({ product }) {
  const { addProduct } = useContext(CartContext);

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
          <button className="absolute top-0 right-2 hover:scale-110 transition duration-200">
            <IconHeart size="w-6 h-6 text-neutral-500 hover:text-black" />
            <span className="sr-only">Add to wishlist</span>
          </button>
        </div>
        <button
          onClick={() => addProduct(product._id)}
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
