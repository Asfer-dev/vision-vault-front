"use client";

import { CartContext } from "@/contexts/cartContext";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Checkout() {
  const { cartProducts, clearCart } = useContext(CartContext);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    city: "",
    postal: "",
    address: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const response = await fetch("/api/cartproducts", {
          method: "POST",
          body: JSON.stringify({ ids: cartProducts }),
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCartProducts();
  }, [cartProducts]);

  const router = useRouter();
  const success = useSearchParams().get("success");

  if (success === "1") {
    return (
      <main className="py-24 container-default">
        <h1 className="page-heading">Order Placed</h1>
        <div className="p-8 bg-neutral-100 rounded-md text-center">
          <p className="text-xl mb-8">Your order has been placed!</p>
          <p className="text-xl mb-8">Thanks for shopping with us :)</p>
          <Link
            className=" hover:text-neutral-700 hover:underline transition duration-200"
            href={"/"}
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="py-24 container-default">
      <h1 className="page-heading">Provide Your Info</h1>
      <form
        onSubmit={async (e) => {
          setLoading(true);
          e.preventDefault();
          try {
            const response = await fetch("/api/checkout", {
              method: "POST",
              body: JSON.stringify({ ...shippingInfo, cartProducts }),
            });
            if (response.ok) {
              clearCart();
              router.push("/checkout?success=1");
            }
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }}
        className="md:px-12 flex flex-col gap-4"
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Your full name"
            id="name"
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, name: e.target.value })
            }
            value={shippingInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="example123@gmail.com"
            id="email"
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, email: e.target.value })
            }
            value={shippingInfo.email}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="city">City</label>
            <input
              type="text"
              placeholder="City"
              id="city"
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, city: e.target.value })
              }
              value={shippingInfo.city}
            />
          </div>
          <div>
            <label htmlFor="postal">Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              id="postal"
              onChange={(e) =>
                setShippingInfo({ ...shippingInfo, postal: e.target.value })
              }
              value={shippingInfo.postal}
            />
          </div>
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            placeholder="Your full Address"
            id="address"
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, address: e.target.value })
            }
            value={shippingInfo.address}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            type="text"
            placeholder="Country"
            onChange={(e) =>
              setShippingInfo({ ...shippingInfo, country: e.target.value })
            }
            id="country"
            value={shippingInfo.country}
          />
        </div>
        <p className="mt-2">
          You are placing order for{" "}
          {products?.map((product, index) => {
            const quantity = cartProducts.filter(
              (prodId) => prodId === product._id
            ).length;
            if (index === products.length - 1)
              return (
                <span className="font-medium">
                  {product.title} x {quantity}.
                </span>
              );
            return (
              <span className="font-medium">
                {product.title} x {quantity},{" "}
              </span>
            );
          })}
          <br />
          <Link className="underline hoverable" href={"/cart"}>
            Change
          </Link>
        </p>
        <button
          className="my-8 px-12 py-4 font-semibold ring-2 ring-neutral-300 w-full md:w-[250px] bg-neutral-800 hover:bg-black text-white transition duration-200"
          type="submit"
        >
          {loading ? "PLACING ORDER..." : "PLACE ORDER"}
        </button>
      </form>
    </main>
  );
}
