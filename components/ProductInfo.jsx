"use client";

import { CartContext } from "@/contexts/cartContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function ProductInfo({ product }) {
  const { addProduct } = useContext(CartContext);

  const [size, setSize] = useState("");
  const [dimensions, setDimensions] = useState("");

  useEffect(() => {
    const sizeValue = product?.properties?.find(
      (prop) => prop.name.toLowerCase() === "size"
    )?.value;
    setSize(sizeValue);

    const frameSize = product?.properties?.find(
      (prop) => prop.name.toLowerCase() === "dimensions"
    )?.value;
    setDimensions(frameSize);
  }, [product]);

  return (
    <div className="p-4">
      <h2 className="font-medium text-3xl mb-6">{product?.title}</h2>
      <div className="flex mb-4 font-medium">
        <div className="border border-neutral-200 px-4 py-2 bg-neutral-100">
          Frame Size
        </div>
        <div className="border-r border-t border-b border-neutral-200 px-4 p-2 bg-neutral-100">
          {dimensions === "" ? "N/A" : dimensions}
        </div>
      </div>
      <p className="font-medium text-xl mb-4">
        Size: <span className="font-semibold">{size}</span>
      </p>
      <p className="font-semibold text-3xl mb-4">
        <span className="font-semibold">$ {product.price}.00</span>
      </p>
      <hr />
      <button
        onClick={() => addProduct(product._id)}
        className="p-3 font-semibold border-2 border-accent hover:bg-accent w-full hover:text-white transition duration-200 mt-6 mb-4"
      >
        ADD TO CART
      </button>
      <Link href={"/cart"}>
        <button
          onClick={() => addProduct(product._id)}
          className="p-3 font-semibold bg-neutral-800 hover:bg-black w-full text-white transition duration-200 mb-4"
        >
          BUY NOW
        </button>
      </Link>
    </div>
  );
}
