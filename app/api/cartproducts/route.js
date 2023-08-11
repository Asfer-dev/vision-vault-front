import { connectToDB } from "@/lib/database";
import Product from "@/models/product";

export const POST = async (req, res) => {
  const { ids } = await req.json();

  try {
    await connectToDB();

    const products = await Product.find({ _id: ids });

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
