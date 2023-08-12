"use client";

import { IconArrowLeft, IconArrowRight } from "@/lib/icons";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturedSection() {
  const [next, setNext] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setNext((prev) => !prev);
    }, 10000);
  }, []);

  return (
    <section className="overflow-hidden relative">
      <div
        className={
          next
            ? "flex w-[200vw] transition duration-700 -translate-x-1/2"
            : "flex w-[200vw] transition duration-700"
        }
      >
        <Link href={"/glasses"}>
          <div className="">
            {/* <Image src={imgFeatured1} alt="featured-1" fill={true} /> */}
            <img
              className="w-full"
              src="https://vision-vault.s3.eu-north-1.amazonaws.com/featured_1.jpg"
            />
          </div>
        </Link>
        <Link href={"/glasses"}>
          <div className="">
            <img
              className="w-full"
              src="https://vision-vault.s3.eu-north-1.amazonaws.com/featured_2.jpg"
            />
          </div>
        </Link>
      </div>
      <div className="absolute top-1/2 w-full flex justify-between px-6">
        <button
          disabled={!next}
          onClick={() => setNext(false)}
          className="bg-neutral-700 hover:bg-black text-white p-2 transition duration-200 opacity-80"
        >
          <IconArrowLeft />
        </button>
        <button
          disabled={next}
          onClick={() => setNext(true)}
          className="bg-neutral-700 hover:bg-black text-white p-2 transition duration-200 opacity-80"
        >
          <IconArrowRight />
        </button>
      </div>
    </section>
  );
}
