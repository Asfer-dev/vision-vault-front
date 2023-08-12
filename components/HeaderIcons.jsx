import { CartContext } from "@/contexts/cartContext";
import { IconAccount, IconCart, IconSearch } from "@/lib/icons";
import { useContext } from "react";
import CartBox from "./CartBox";

export default function HeaderIcons({ searchVisible, setSearchVisible }) {
  const { cartProducts, cartVisible, setCartVisible } = useContext(CartContext);

  // const [cartVisible, setCartVisible] = useState(false);

  return (
    <ul className="flex flex-row-reverse gap-2 md:gap-6 items-center z-20">
      <li className="hidden md:flex items-center">
        <button aria-label="Account" className="hoverable">
          <IconAccount size="w-6 h-6" />
          <span className="sr-only">Account</span>
        </button>
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
