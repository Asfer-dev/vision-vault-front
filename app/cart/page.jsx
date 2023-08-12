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

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let subtotal = 0;
    for (const productId of cartProducts) {
      const price =
        products.find((product) => product._id === productId)?.price || 0;
      subtotal += price;
    }
    setTotal(subtotal);
  }, [cartProducts, products]);

  if (loading) {
    return (
      <div className="py-24 container-default">
        <h1 className="page-heading">Your Cart</h1>
        <div className="p-8 rounded-md text-center">
          <p className="text-xl mb-8">Loading Cart</p>
        </div>
      </div>
    );
  }

  if (products?.length > 0) {
    return (
      <div className="py-24 container-default">
        <h1 className="page-heading">Your Cart</h1>
        <div>
          {products?.map((product) => {
            const quantity = cartProducts.filter(
              (prodId) => prodId === product._id
            ).length;
            return (
              <div>
                <div className="flex items-center justify-between max-w-[900px] mx-auto">
                  <div className="flex flex-col items-center md:flex-row md:gap-12">
                    <Link href={"/glasses/" + product._id}>
                      <img
                        src={product.photos[0]}
                        className="w-[100px] md:w-[200px] hoverable"
                      />
                    </Link>
                    <Link href={"/glasses/" + product._id}>
                      <h3 className="product-title relative overflow-hidden transition duration-200 font-medium text-sm md:text-base">
                        {product.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex flex-col items-center md:flex-row gap-4 md:gap-12">
                    <div className="flex gap-1">
                      <button
                        onClick={() => removeProduct(product._id)}
                        className="px-3 py-1 md:px-4 md:py-2 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                      >
                        -
                      </button>
                      <span className="py-1 md:py-2 px-2 font-medium">
                        {quantity}
                      </span>
                      <button
                        onClick={() => addProduct(product._id)}
                        className="px-3 py-1 md:px-4 md:py-2 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-base md:text-xl">
                      $ {product.price * quantity}
                    </p>
                  </div>
                  <button className="px-3 py-3 rounded-full text-red-400 hover:text-white hover:bg-red-400 transition duration-200">
                    <IconTrash />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
                <hr className="w-[80%] md:w-[700px] mx-auto border-neutral-200 my-2" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-end mt-4 md:w-[900px] md:mx-auto px-4">
          <div className="font-medium text-right text-gray-700">
            <p>
              Subtotal: <span className="font-semibold text-xl">${total}</span>
            </p>
            <p>
              Standard Shipping:{" "}
              <span className="font-semibold text-xl">+$10</span>
            </p>
            <p className="text-black text-xl mt-3">
              Total:{" "}
              <span className="text-2xl font-semibold">${total + 10}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-col-reverse md:flex-row gap-4 items-center md:w-[900px] md:mx-auto mt-4">
          <button
            onClick={clearCart}
            className="py-3 px-6 md:px-12 w-full md:w-auto font-medium border-2 border-red-400 hover:bg-red-400 hover:text-white transition duration-200"
          >
            Clear Cart
          </button>
          <Link
            href={"/checkout"}
            className="px-6 md:px-16 py-4 ring-2 w-full md:w-auto text-center font-semibold ring-neutral-300 bg-neutral-800 hover:bg-black text-white transition duration-200"
          >
            CHECKOUT
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 container-default">
      <h1 className="page-heading">Your Cart</h1>
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
