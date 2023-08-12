"use client";

import Header from "@/components/Header";
import "./globals.css";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { CartContextProvider } from "@/contexts/cartContext";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

export const metadata = {
  title: "Vision Vault - Online Glasses Store",
  description:
    "Online store selling great quality glasses and lenses for your eyes",
};

export default function RootLayout({ children }) {
  const [searchVisible, setSearchVisible] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>Vision Vault - Online Glasses Store</title>
        <link
          rel="icon"
          type="image/png"
          href="https://vision-vault.s3.eu-north-1.amazonaws.com/logo.png"
        />
      </head>
      <body className="font-primary">
        <Provider>
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
        </Provider>
      </body>
    </html>
  );
}
