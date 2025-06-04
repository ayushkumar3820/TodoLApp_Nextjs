"use client"

import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  deleteTodo,
  toggleTodo,
  updateTodo,
}) {
  const [filter, setFilter] = useState("all");

  const filterTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - pendingCount;

  if (todos.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="text-red-700">Not todos yet. add one above!</div>
      </div>
    );
  }
  return (
    <>
      <div>
        <div className="mb-4  flex justify-center items-center">
          <div className="text-sm text-red-900">
            <span>{pendingCount}pending</span>
            {completedCount > 0 && <span>,{completedCount}completed</span>}
          </div>
          <div className="flex space-x-2 text-sm">
            <button
              onClick={setFilter("all")}
              className={`px-2 py-1 rounded-md transition-colors 
            ${
              filter === "all"
                ? "bg-red-800  text-red-800"
                : "hover:bg-amber-300"
            }`}
            >
              All
            </button>
            <button
              onClick={setFilter("active")}
              className={`px-2 py-1 rounded-md transition-colors
                ${
                  filter === "active"
                    ? "bg-red-800 text-red-700"
                    : "hover:bg-green-600"
                }`}
            >
              Active
            </button>
            <button
              onClick={setFilter("completed")}
              className={`px-2 py-1 rounded-md transition-colors
                ${
                  filter === "competed"
                    ? "bg-red-800 text-red-700"
                    : "hover:bg-green-600"
                }`}
            >
              completed
            </button>
          </div>
        </div>
        <ul className="space-y-3">
          <AnimatePresence>
            {filterTodos.map((todo) => (
              <motion.li
                key={todo.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TodoItem
                  todo={todo}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                  updateTodo={updateTodo}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </>
  );
}
