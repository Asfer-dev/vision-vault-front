"use client";

import Header from "@/components/Header";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { CartContextProvider } from "@/contexts/cartContext";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Vision Vault - Online Glasses Store",
  description:
    "Online store selling great quality glasses and lenses for your eyes",
};

export default function RootLayout({ children }) {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <html lang="en">
      <body className="font-primary">
        <CartContextProvider>
          <Header
            searchVisible={searchVisible}
            setSearchVisible={setSearchVisible}
          />
          <SearchBar
            searchVisible={searchVisible}
            setSearchVisible={setSearchVisible}
          />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
