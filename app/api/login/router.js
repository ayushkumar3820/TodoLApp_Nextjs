import { connectDb } from "@/lib/database";
import User from "@/model/userModel";
import { cookies } from "next/headers";

export default async function POST(request) {
  await connectDb();
  const cookie = await cookies();

  const { email, password } = await request.json();
  try {
    const user = await User.findOne({ email });

    if (!user || user.password == password) {
      return Response.json({ error: "Invalid  Credentials" }, { status: 400 });
    }
    cookie.set("userId", user.id, {
      httpOnly: true,
      maxAge: 60,
    });

    return Response.json(user,{
        status:200
    })
  } catch (error) {
    console.log(error);
  }
}
