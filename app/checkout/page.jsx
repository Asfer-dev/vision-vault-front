"use client";

import { CartContext } from "@/contexts/cartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useState } from "react";

export default function Checkout() {
  const { cartProducts } = useContext(CartContext);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    city: "",
    postal: "",
    address: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const success = useSearchParams().get("success");

  if (success === "1") {
    return (
      <main className="py-24 container-default">
        <h1 className="page-heading">Order Placed</h1>
        <p>
          Your order has been placed! <br />
          Thanks for shopping with us
        </p>
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
            if (response.ok) router.push("/checkout?success=1");
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
        <button
          className="my-8 px-12 py-4 ring-2 ring-neutral-300 w-full md:w-[200px] bg-neutral-800 hover:bg-black text-white transition duration-200"
          type="submit"
        >
          {loading ? "SUBMIT..." : "SUBMIT"}
        </button>
      </form>
    </main>
  );
}
