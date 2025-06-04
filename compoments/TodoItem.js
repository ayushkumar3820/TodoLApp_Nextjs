"use client"

import { Check, PencilIcon, TrashIcon, X } from "lucide-react";
import { useState } from "react";

export default function TodoItem({ todo, deleteTodo, toggleTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    if (editText.trim()) {
      updateTodo(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  return (
    <>
      <div
        className={`p-4 rounded-lg border border-gray-300 group bg-card hover:border-b-red-50  transition-all ${
          todo.completed ? "bg-opacity-70" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => toggleTodo(todo.id)}
            className={`flex justify-center items-center flex-shrink-0 w-5 h-5  rounded-md  border transition-all${
              todo.completed
                ? "bg-amber-700 border-red-900"
                : "border-green-800 hover:border-amber-300"
            }`}
            aria-label={
              todo.completed ? "Mark as inComplete" : "Mark as  completed"
            }
          >
            {todo.completed && <Check className="w-4 h-4 text-white "></Check>}
          </button>
          {isEditing ? (
            <div className="flex-1">
              <input
                type="text"
                value={editText}
                onChange={(e = setEditText(e.target.value))}
                onKeyDown={handleKeyDown}
                autoFocus
                className="w-full p-0 bg-transparent border-0 border-b border-red-800 focus:outline-none focus:ring-0"
              />
            </div>
          ) : (
            <p
              className={`flex transition-opacity ${
                todo.completed ? "line-through text-red-800" : ""
              }`}
            >
              {todo.text}
            </p>
          )}

          <div className=" flex items-center gap-1  opacity-0 group-hover:opacity-100 transition-opacity">
            {isEditing ? (
              <>
                <button
                  className="p-1.5 rounded-md  text-green-900 hover:bg-green-500/10  transition-colors"
                  onClick={handleSave}
                  aria-label="Save"
                >
                  <Check className="h-5 w-5" />
                </button>
                <button
                  className="p-1.5 rounded-md text-red-500 hover:bg-green-500/10 transition-colors"
                  onClick={handleCancel}
                  aria-label="cancel"
                >
                  <X className="h-5 w-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  className="p-1.5 rounded-md text-blue-500 hover:bg-green-500/10 transition-colors"
                  onClick={handleEdit}
                  aria-label="Edit"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  className=" p-1.5 rounded-md text-red-800 hover:bg-green-500/10 transition-colors"
                  onClick={() => deleteTodo(todo.id)}
                  aria-label="Delete"
                >
                  <TrashIcon className="h-5 w-5"></TrashIcon>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
