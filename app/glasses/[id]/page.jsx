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
        <div className="mx-auto w-1/2 mb-6">
          <hr />
        </div>
        <h1 className="section-heading">Details</h1>
        <table className="mx-auto -mt-4 font-medium w-full md:w-1/2 border text-gray-700">
          {product?.properties?.map((property) => (
            <tr
              className="odd:bg-slate-100 even:bg-slate-50"
              key={property.name}
            >
              <td className="p-3">{property.name}</td>
              <td className="p-3 font-semibold">
                {property.value === "" ? "N/A" : property.value}
              </td>
            </tr>
          ))}
        </table>
      </section>
    </main>
  );
}
