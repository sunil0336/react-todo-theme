import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    dispatch({
      type: "EDIT_TODO",
      payload: { id: todo.id, text }
    });
    setIsEditing(false);
  };

  return (
    <li className="flex justify-between items-center border p-3 rounded hover:shadow-md transition">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1 flex-1 mr-2 rounded
                     text-black dark:text-white
                     bg-white dark:bg-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <div
          onClick={() =>
            dispatch({ type: "TOGGLE_TODO", payload: todo.id })
          }
          className="flex items-center gap-2 flex-1 cursor-pointer select-none"
        >
          {/* Completed Icon */}
          {todo.completed && (
            <span className="text-green-500 font-bold">✓</span>
          )}

          {/* Todo Text */}
          <span
            className={`${
              todo.completed
                ? "line-through text-gray-400"
                : "hover:text-blue-500"
            }`}
          >
            {todo.text}
          </span>
        </div>
      )}

      <div className="flex gap-2 ml-2">
        {isEditing ? (
          <button onClick={saveEdit} title="Save">💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)} title="Edit">✏️</button>
        )}
        <button
          onClick={() =>
            dispatch({ type: "DELETE_TODO", payload: todo.id })
          }
          title="Delete"
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
