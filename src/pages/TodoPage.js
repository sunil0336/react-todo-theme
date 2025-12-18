import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import ThemeToggle from "../components/ThemeToggle";

const TodoPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-6">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
        <ThemeToggle />
        <h1 className="text-2xl font-bold mb-4 text-center">
          Todo App
        </h1>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
