// import { connectDb } from "@/lib/database";

import User from "@/model/userModel";

export default async function POST(request) {
  await connectDb();
  const user = request.json();

  try {
    const newuser = User.create(user);

    return Response.json(user, {
      status: 201,
    });
  } catch (err) {
    console.err(err);
    if (err.code === 11000) {
      return Response.json(
        { err: "Email already exit hai  " },
        {
          status: 409,
        }
      );
    } else {
      return Response.json(
        { error: "Something went wrong " },
        {
          status: 500,
        }
      );
    }
  }
}
