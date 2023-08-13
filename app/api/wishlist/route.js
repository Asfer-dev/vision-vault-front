import { connectToDB } from "@/lib/database";
import User from "@/models/user";

export const PATCH = async (req, res) => {
  const { wishlist, id } = await req.json();
  try {
    await connectToDB();
    const user = await User.findById(id);
    user.wishlist = wishlist;
    user.save();
    return new Response("item added", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const POST = async (req, res) => {
  const { id } = await req.json();
  try {
    await connectToDB();
    const user = await User.findById(id);
    const list = user.wishlist;
    return new Response(JSON.stringify({ list }), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};

export const DELETE = async (req, res) => {
  const query = req.query;
  const { id } = query;
  try {
    await connectToDB();
    const user = await User.findById(id);
    user.wishlist = [];
    user.save();
    return new Response("Wishlist cleared", { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
