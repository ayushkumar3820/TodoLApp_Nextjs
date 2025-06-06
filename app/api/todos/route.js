import { readFile, writeFile } from "node:fs/promises";
import todos from "../../todos";
import { connectDb } from "@/lib/database";
import mongoose from "mongoose";
import Todo from "@/model/todoModel";
import { cookies } from "next/headers";
// import db from "../../lib/database";

export async function GET() {
  await connectDb();
  // const result=await db.collection("users").insertOne({name:"Ram"});
  // console.log(result);
  // console.log("object");

  // const result =await mongoose.connection.db.collection("users").insertMany({title:"learn next js "})

  // console.log(result);

  // const newTodo=await Todo.create({
  //   text:"Learn javascript",
  // })

  // console.log(newTodo);
  // console.log("object");
  // // const result=await Todo.find();
  // // console.log(result);

  // const newTodo = await Todo.find();

  // console.log(newTodo);

  // console.log(newTodo.map(id));

  // return Response.json(newTodo);

  const cookie=await  cookies();
  
  const newTodo = await Todo.find();

//  console.log(cookies.get("userId").value)
// cookie.set("userid","123",{
//   httpOnly:true,
//   maxAge:5
// })
  return Response.json(({id,text,completed})=>({id,text,completed}))

  // const response = new Response(JSON.stringify([]), {
  //   headers: {
  //     "set-cookie": "name-ayush:path=/",
  //   },
  // });

  // return response;

  // const todoJSONString = await readFile("./todos.json", "utf-8");
  // const todos = JSON.parse(todoJSONString);
  // return Response.json(todos);
}

export async function POST(request) {
  await connectDb();
  const todo = await request.json();
  // const newTodo = {
  //   id: crypto.randomUUID(),
  //   text: todo.text,
  //   completed: false,
  // };

  const { id, text, completed } = await Todo.create({ text: todo.text });

  todos.push(newTodo);
  await writeFile("todos.json", JSON.stringify(todos, null, 2));
  // return Response.json(newTodo, {
  //   status: 201,
  // });

  return Response.json(id, text, completed, {
    status: 201,
  });
}
