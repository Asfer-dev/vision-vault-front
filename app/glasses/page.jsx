import ProductCard from "@/components/ProductCard";
import { connectToDB } from "@/lib/database";
import Product from "@/models/product";

const fetchAllProducts = async () => {
  connectToDB();
  const products = await Product.find({}, null, { sort: { updatedAt: -1 } });
  return JSON.parse(JSON.stringify(products));
};

export default async function Products() {
  const products = await fetchAllProducts();
  return (
    <main className="py-24 container-default">
      <h1 className="page-heading">Glasses</h1>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </main>
  );
}
