import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleTheme}
        className="border px-3 py-1 rounded"
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
};

export default ThemeToggle;
