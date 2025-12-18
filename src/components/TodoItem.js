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
    <li className="flex justify-between items-center border p-2 rounded">
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-1 flex-1 mr-2"
        />
      ) : (
        <span
          onClick={() =>
            dispatch({ type: "TOGGLE_TODO", payload: todo.id })
          }
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button onClick={saveEdit}>💾</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>✏️</button>
        )}
        <button
          onClick={() =>
            dispatch({ type: "DELETE_TODO", payload: todo.id })
          }
        >
          ❌
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
