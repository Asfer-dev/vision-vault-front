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
      <div className="mb-6 flex flex-col sm:flex-row items-end sm:items-start gap-8 sm:px-8">
        <div className="flex gap-3 items-center">
          <label htmlFor="">Category: </label>
          <select className="bg-neutral-100 hover:bg-neutral-200 transition duration-200 border px-3 py-2 font-medium">
            <option value="">All</option>
            <option value="">Eyeglasses</option>
            <option value="">Sunglasses</option>
          </select>
        </div>
        <div className="flex gap-3 items-center">
          <label htmlFor="">Gender: </label>
          <select className="bg-neutral-100 hover:bg-neutral-200 transition duration-200 border px-3 py-2 font-medium">
            <option value="">All</option>
            <option value="">Men</option>
            <option value="">Women</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-8">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </main>
  );
}
