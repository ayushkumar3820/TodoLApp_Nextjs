"use client";

import { PlusIcon } from "lucide-react";
import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input.trim());
      setInput("");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="add a new task ...."
          className="w-full p-3  pr-12  rounded-lg  bg-card border-border focus:outline-none focus:ring-2 focus:ring-pink-900 transition-all"
        />
        <button
          type="text"
          disabled={!input.trim()}
          className="absolute  right-2 top-1/2  -translate-y-1/2 p-1.5  rounded-md  bg-red-900 text-red-900 disabled:opacity-50  disabled:cursor-not-allowed hover:opacity-90  transition-opacity"
          aria-label="add todo"
        >
          <PlusIcon className="h-5 w-5"></PlusIcon>
        </button>
      </form>
    </>
  );
}
