"use client";

import HeaderIcons from "./HeaderIcons";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import { IconClose, IconHamburger } from "@/lib/icons";
import Logo from "./Logo";

export default function Header({ searchVisible, setSearchVisible }) {
  const [atTop, setAtTop] = useState(true);
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 70) {
        setAtTop(false);
      } else {
        setAtTop(true);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) setNavVisible(true);
    });
  }, []);

  const headerStyles =
    "fixed top-0 right-0 left-0 flex justify-between items-center shadow-sm px-4 md:px-12 py-4 z-20 transition duration-200 bg-accent";
  return (
    <header
      className={
        atTop
          ? headerStyles + " md:bg-opacity-0"
          : headerStyles + " bg-opacity-100"
      }
    >
      <button
        onClick={() => setNavVisible((prev) => !prev)}
        className="md:hidden z-20 w-8 h-8 flex items-center justify-center"
      >
        {navVisible ? (
          <>
            <IconClose size={"w-8 h-8"} />{" "}
            <span className="sr-only">Close</span>
          </>
        ) : (
          <>
            <IconHamburger size={"w-6 h-6"} />{" "}
            <span className="sr-only">Menu</span>
          </>
        )}
        <span className="sr-only">menu</span>
      </button>
      <Logo />
      <Nav navVisible={navVisible} />
      <HeaderIcons
        searchVisible={searchVisible}
        setSearchVisible={setSearchVisible}
      />
    </header>
  );
}
