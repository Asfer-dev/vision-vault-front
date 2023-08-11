import { connectToDB } from "@/lib/database";
import Order from "@/models/order";
import Product from "@/models/product";

export const POST = async (req, res) => {
  const { name, email, city, postal, address, country, cartProducts } =
    await req.json();
  try {
    await connectToDB();
    const productIds = cartProducts;
    const uniqueIds = [...new Set(productIds)];

    const products = await Product.find({ _id: uniqueIds });

    let line_items = [];
    for (const productId of uniqueIds) {
      const product = products.find(
        (product) => product._id.toString() === productId
      );
      const quantity = productIds.filter((id) => id === productId)?.length || 0;
      if (quantity > 0) {
        line_items.push({
          quantity,
          price_data: {
            currency: "USD",
            product_data: { name: product.title },
            unit_amount: quantity * product.price,
          },
        });
      }
    }

    const newOrder = new Order({
      line_items,
      name,
      email,
      city,
      postal,
      address,
      country,
      paid: false,
    });
    newOrder.save();

    return new Response("Order placed", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
