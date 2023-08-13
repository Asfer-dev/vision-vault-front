"use client";

import ProductCard from "@/components/ProductCard";
import { WishlistContext } from "@/contexts/wishlistContext";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function Account() {
  const { wishlist, removeFromList } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        const response = await fetch("/api/cartproducts", {
          method: "POST",
          body: JSON.stringify({ ids: wishlist }),
        });
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWishlistProducts();
  }, [wishlist]);

  if (products.length === 0) {
    return (
      <main className="pt-24 container-default">
        <h1 className="page-heading">Account</h1>
        <section className="mb-16">
          <h2 className="section-heading">Wish List</h2>
          <div className="p-8 bg-neutral-100 rounded-md text-center">
            <p className="text-lg text-gray-600 mb-8">
              Your Wish List is empty
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="pt-24 container-default">
      <h1 className="page-heading">Account</h1>
      <section className="mb-16">
        <h2 className="section-heading">Wish List</h2>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {products.length > 0 &&
            products.map((product) => (
              <ProductCard product={product} wish={true} />
            ))}
        </div>
      </section>
    </main>
  );
}
