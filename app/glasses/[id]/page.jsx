import ProductInfo from "@/components/ProductInfo";
import ProductPhoto from "@/components/ProductPhoto";
import { connectToDB } from "@/lib/database";
import Product from "@/models/product";

const fetchSingleProduct = async (id) => {
  await connectToDB();
  const product = await Product.findById(id);
  return JSON.parse(JSON.stringify(product));
};

export default async function ProductPage({ params }) {
  const { id } = params;

  const product = await fetchSingleProduct(id);

  return (
    <main className="py-24 container-default">
      <h1 className="page-heading">{product?.title}</h1>
      <section className="grid md:grid-cols-2 gap-12">
        <ProductPhoto product={product} />
        <ProductInfo product={product} />
      </section>
      <section className="mt-12">
        <h1 className="section-heading">Details</h1>
      </section>
    </main>
  );
}
