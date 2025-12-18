import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
  return (
    <p className="text-center text-gray-500 italic">
      No todos yet. Add one above 👆
    </p>
  );
}

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
