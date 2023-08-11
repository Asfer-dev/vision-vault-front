import ProductCard from "./ProductCard";

export default function LatestProducts({ products }) {
  return (
    <section className="container-default py-16">
      <h2 className="section-heading">New Arrivals</h2>
      <div className="grid md:grid-cols-3 gap-8 justify-between">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </section>
  );
}
