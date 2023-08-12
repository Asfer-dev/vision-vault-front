import { CartContext } from "@/contexts/cartContext";
import { IconAccount, IconCart, IconSearch } from "@/lib/icons";
import { useContext, useState } from "react";
import CartBox from "./CartBox";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function HeaderIcons({ searchVisible, setSearchVisible }) {
  const { cartProducts, cartVisible, setCartVisible } = useContext(CartContext);

  // const [cartVisible, setCartVisible] = useState(false);

  const { data: session } = useSession();

  const [dropAcc, setDropAcc] = useState(false);

  return (
    <ul className="flex flex-row-reverse gap-2 md:gap-6 items-center z-20">
      <li className="hidden md:flex items-center relative">
        {session ? (
          <>
            <button
              onClick={() => setDropAcc((prev) => !prev)}
              className="w-7 h-7 rounded-full overflow-hidden ring-2 ring-neutral-900"
            >
              <img src={session.user.image} />
            </button>
            {dropAcc && (
              <div className="absolute bg-accent shadow-sm w-[150px] top-12 p-4 -left-16">
                <Link
                  className="px-3 font-medium hoverable transition duration-200"
                  href={"/account"}
                >
                  Account
                </Link>
                <hr className="border-neutral-600 my-2 w-[80%] mx-auto" />
                <button
                  onClick={() => signOut("google")}
                  className="px-3 font-medium hoverable transition duration-200"
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <button
              onClick={() => setDropAcc((prev) => !prev)}
              aria-label="Account"
              className="hoverable"
            >
              <IconAccount size="w-6 h-6" />
              <span className="sr-only">Account</span>
            </button>
            {dropAcc && (
              <div className="absolute bg-accent shadow-sm w-[150px] top-12 p-4 -left-16">
                <button
                  onClick={() => signIn("google")}
                  className="px-3 font-medium hoverable transition duration-200"
                >
                  Log in
                </button>
              </div>
            )}
          </>
        )}
      </li>
      <li className="flex items-center">
        <button
          onClick={() => setCartVisible((prev) => !prev)}
          aria-label="cart"
          className="hoverable"
        >
          <div className="relative">
            <IconCart size="w-6 h-6" />
            <div className="absolute bg-black text-white font-semibold -top-2 -right-2 h-5 w-5 flex justify-center items-center rounded-full text-sm">
              {cartProducts.length}
            </div>
          </div>
          <span className="sr-only">Cart</span>
        </button>
        <CartBox cartVisible={cartVisible} setCartVisible={setCartVisible} />
      </li>
      <li className="flex items-center">
        <button
          onClick={() => setSearchVisible(!searchVisible)}
          aria-label="search"
          className="hoverable"
        >
          <IconSearch size="w-6 h-6" />
          <span className="sr-only">Search</span>
        </button>
      </li>
    </ul>
  );
}
