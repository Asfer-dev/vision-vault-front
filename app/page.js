import FeaturedSection from "@/components/FeaturedSection";
import LatestProducts from "@/components/LatestProducts";
import { connectToDB } from "@/lib/database";
import Product from "@/models/product";

const fetchFeaturedProduct = async () => {
  const productId = "";
  await connectToDB();

  const product = await Product.findById(productId);
  return JSON.parse(JSON.stringify(product));
};

const fetchLatestProducts = async () => {
  await connectToDB();

  const products = await Product.find({}, null, {
    sort: { updatedAt: -1 },
    limit: 10,
  });

  return JSON.parse(JSON.stringify(products));
};

export default async function Home() {
  const products = await fetchLatestProducts();
  return (
    <main className="pt-20">
      <FeaturedSection />
      <LatestProducts products={products} />
    </main>
  );
}
