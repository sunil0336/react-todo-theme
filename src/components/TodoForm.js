import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Date.now(),
        text,
        completed: false
      }
    });

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border p-2 rounded"
        placeholder="Add todo..."
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
