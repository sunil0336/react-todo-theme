import { TodoProvider } from "./context/TodoContext";
import { ThemeProvider } from "./context/ThemeContext";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
