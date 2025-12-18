import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex justify-end mb-4">
            <button
                onClick={toggleTheme}
                className="border px-4 py-1 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-700
             transition active:scale-95"
            >
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
    );
};

export default ThemeToggle;
