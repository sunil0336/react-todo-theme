import { createContext, useContext, useReducer } from "react";
import { todoReducer } from "../reducer/todoReducer";
import useLocalStorage from "../hooks/useLocalStorage";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [storedTodos, setStoredTodos] = useLocalStorage("todos", []);

  const [todos, dispatch] = useReducer(todoReducer, storedTodos);

  // sync reducer state to localStorage
  const syncedDispatch = (action) => {
    dispatch(action);
    const updatedTodos = todoReducer(todos, action);
    setStoredTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ todos, dispatch: syncedDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => useContext(TodoContext);
