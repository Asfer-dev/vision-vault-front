"use client";

import { CartContext } from "@/contexts/cartContext";
import { IconTrash } from "@/lib/icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCartProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/cartproducts", {
          method: "POST",
          body: JSON.stringify({ ids: cartProducts }),
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartProducts();
  }, [cartProducts]);

  if (loading) {
    return (
      <div className="py-24 container-default">
        <h1 className="text-5xl font-semibold mb-8">Your Cart</h1>
        <div className="p-8 rounded-md text-center">
          <p className="text-xl mb-8">Loading Cart</p>
        </div>
      </div>
    );
  }

  if (products?.length > 0) {
    return (
      <div className="py-24 container-default">
        <h1 className="text-5xl font-semibold mb-8">Your Cart</h1>
        <div>
          {products?.map((product) => {
            const quantity = cartProducts.filter(
              (prodId) => prodId === product._id
            ).length;
            return (
              <div>
                <div className="flex gap-2 items-center justify-between md:px-12">
                  <img src={product.photos[0]} className="w-[200px]" />
                  <h3 className="font-medium">{product.title}</h3>

                  <div className="flex gap-1">
                    <button
                      onClick={() => removeProduct(product._id)}
                      className="px-4 py-2 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                    >
                      -
                    </button>
                    <span className="py-2 px-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => addProduct(product._id)}
                      className="px-4 py-2 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-semibold text-xl">
                    $ {product.price * quantity}
                  </p>
                  <button className="px-3 py-3 rounded-full text-red-400 hover:text-white hover:bg-red-400 transition duration-200">
                    <IconTrash />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
                <hr className="w-[80%] mx-auto border-neutral-200 my-8" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={clearCart}
            className="py-3 px-12 font-medium border-2 border-red-400 hover:bg-red-400 hover:text-white transition duration-200"
          >
            Clear Cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 container-default">
      <h1 className="text-5xl font-semibold mb-8">Your Cart</h1>
      <div className="p-8 bg-neutral-100 rounded-md text-center">
        <p className="text-xl mb-8">Your cart is empty</p>
        <p>
          <Link
            className=" hover:text-neutral-700 hover:underline transition duration-200"
            href={"/"}
          >
            Continue Shopping
          </Link>
        </p>
      </div>
    </div>
  );
}
