import { IconAccount, IconDropdown } from "@/lib/icons";
import Link from "next/link";

export default function Nav({ navVisible }) {
  const navStyles =
    "flex items-center font-medium fixed top-0 bottom-0 right-0 left-0 transition-transform duration-500 -translate-x-full bg-accent md:bg-transparent p-8 md:p-0 md:static";

  return (
    <nav className={!navVisible ? navStyles : navStyles + " translate-x-0"}>
      <ul className="flex items-center flex-col md:flex-row gap-8 w-full md:w-auto">
        <li className="w-full md:w-auto">
          <Link
            className="hoverable flex justify-between md:justify-normalx gap-1 items-center"
            href={"/glasses"}
          >
            Eyeglasses
            <IconDropdown size="w-4 h-4" />
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link
            className="hoverable flex justify-between md:justify-normal gap-1 items-center"
            href={"/glasses"}
          >
            Sunglasses
            <IconDropdown size="w-4 h-4" />
          </Link>
        </li>
        <li className="w-full md:w-auto">
          <Link
            className="hoverable flex justify-between md:justify-normal gap-1 items-center"
            href={"/glasses"}
          >
            All Glasses
            <IconDropdown size="w-4 h-4" />
          </Link>
        </li>
        <hr className="w-full border-black opacity-20 md:hidden" />
        <li className="w-full md:w-auto md:hidden">
          <Link className="hoverable flex gap-2 items-center" href={"#"}>
            <IconAccount />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
