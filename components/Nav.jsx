"use client";

import { IconAccount, IconDropdown } from "@/lib/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav({ navVisible }) {
  const [dropEye, setDropEye] = useState(false);
  const [dropSun, setDropSun] = useState(false);
  const [dropGlass, setDropGlass] = useState(false);

  const navStyles =
    "flex items-center font-medium fixed top-0 bottom-0 right-0 left-0 transition-transform duration-500 -translate-x-full bg-accent md:bg-transparent p-8 md:p-0 md:static md:-ml-20";

  return (
    <nav className={!navVisible ? navStyles : navStyles + " translate-x-0"}>
      <ul className="flex items-center flex-col md:flex-row gap-8 w-full md:w-auto">
        <li
          className="w-full md:w-auto relative"
          onMouseOver={() => setDropEye(true)}
          onMouseOut={() => setDropEye(false)}
        >
          <Link
            className="hoverable flex justify-between md:justify-normalx gap-1 items-center"
            href={"/glasses"}
          >
            Eyeglasses
            <IconDropdown size="w-4 h-4" />
          </Link>

          {/* DROPDOWN */}
          {dropEye && (
            <ul className="absolute bg-accent w-[250px] px-6 py-4 shadow-sm list-disc">
              <li className="hover:translate-x-2 ml-2 transition duration-200 mb-2">
                <Link className="hoverable" href={"/glasses"}>
                  Men's Eyeglasses
                </Link>
              </li>
              <li className="hover:translate-x-2 ml-2 transition duration-200">
                <Link className="hoverable" href={"/glasses"}>
                  Women's Eyeglasses
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="w-full md:w-auto"
          onMouseOver={() => setDropSun(true)}
          onMouseOut={() => setDropSun(false)}
        >
          <Link
            className="hoverable flex justify-between md:justify-normal gap-1 items-center"
            href={"/glasses"}
          >
            Sunglasses
            <IconDropdown size="w-4 h-4" />
          </Link>

          {/* DROPDOWN */}
          {dropSun && (
            <ul className="absolute bg-accent w-[250px] px-6 py-4 shadow-sm list-disc">
              <li className="hover:translate-x-2 ml-2 transition duration-200 mb-2">
                <Link className="hoverable" href={"/glasses"}>
                  Men's Sunglasses
                </Link>
              </li>
              <li className="hover:translate-x-2 ml-2 transition duration-200">
                <Link className="hoverable" href={"/glasses"}>
                  Women's Sunglasses
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          className="w-full md:w-auto"
          onMouseOver={() => setDropGlass(true)}
          onMouseOut={() => setDropGlass(false)}
        >
          <Link
            className="hoverable flex justify-between md:justify-normal gap-1 items-center"
            href={"/glasses"}
          >
            All Glasses
            <IconDropdown size="w-4 h-4" />
          </Link>

          {/* DROPDOWN */}
          {dropGlass && (
            <ul className="absolute bg-accent w-[250px] px-6 py-4 shadow-sm list-disc">
              <li className="hover:translate-x-2 ml-2 transition duration-200 mb-2">
                <Link className="hoverable" href={"/glasses"}>
                  Men's Glasses
                </Link>
              </li>
              <li className="hover:translate-x-2 ml-2 transition duration-200">
                <Link className="hoverable" href={"/glasses"}>
                  Women's Glasses
                </Link>
              </li>
            </ul>
          )}
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
