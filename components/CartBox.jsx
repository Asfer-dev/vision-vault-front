import { CartContext } from "@/contexts/cartContext";
import { IconClose } from "@/lib/icons";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function CartBox({ cartVisible, setCartVisible }) {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);

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

  const cartStyles =
    "overflow-auto right-0 top-[4.5rem] fixed bottom-0 left-0 md:left-auto w-[400px] shadow-lg p-4 bg-white transition-transform duration-500 translate-x-full";

  return (
    <div
      className={cartVisible ? cartStyles + "translate-x-0" : cartStyles + ""}
    >
      <div className="flex justify-end mb-2">
        <button onClick={() => setCartVisible(false)}>
          <IconClose />
          <span className="sr-only">Close Cart</span>
        </button>
      </div>
      <h2 className="text-xl font-medium">Your Cart</h2>
      <div>
        {products.map((product) => {
          const quantity = cartProducts.filter(
            (prodId) => prodId === product._id
          ).length;
          return (
            <div className="flex gap-2 items-center justify-between mb-4">
              <div>
                <img className="h-16" src={product.photos[0]} />
                <h3>{product.title}</h3>
              </div>
              <p>${product.price * quantity}</p>
              <div className="flex gap-1">
                <button
                  onClick={() => removeProduct(product._id)}
                  className="px-3 py-1 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                >
                  -
                </button>
                <span className="py-1 px-2 font-medium">{quantity}</span>
                <button
                  onClick={() => addProduct(product._id)}
                  className="px-3 py-1 text-xl font-medium bg-neutral-100 hover:bg-neutral-200 transition duration-200"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Link href={"/cart"}>
        <button
          onClick={() => setCartVisible(false)}
          className="px-4 py-3 text-center w-[200px] mt-6 bg-neutral-800 hover:bg-black text-white transition duration-200"
        >
          BUY ITEMS
        </button>
      </Link>
    </div>
  );
}
