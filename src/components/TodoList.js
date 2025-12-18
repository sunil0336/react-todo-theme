import { useTodo } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodo();

  if (todos.length === 0) {
    return <p className="text-center">No todos yet</p>;
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
