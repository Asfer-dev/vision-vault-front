import Link from "next/link";
import ProductCard from "./ProductCard";

export default function LatestProducts({ products }) {
  return (
    <section className="container-default py-16">
      <h2 className="section-heading">New Arrivals</h2>
      <div className="grid md:grid-cols-3 gap-8 justify-between">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
      <Link
        href={"/glasses"}
        className="px-8 mx-auto py-4 border bg-accent hover:scale-105 transition duration-200 text-center w-[250px] font-medium mt-4"
      >
        Explore All Glasses
      </Link>
    </section>
  );
}
