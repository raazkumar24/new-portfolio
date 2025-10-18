import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) return savedMode === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-16 left-5 z-50 p-3 rounded-full 
        bg-gradient-to-tr from-white/90 via-gray-100/70 to-gray-200/80 
        dark:from-gray-800 dark:via-gray-900 dark:to-black 
        backdrop-blur-md shadow-xl border border-gray-300/40 dark:border-gray-700/40
        hover:scale-110 hover:shadow-2xl transition-all duration-300 ease-out
        focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-yellow-400"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="block transition-transform duration-300 animate-in fade-in zoom-in-50">
        {isDarkMode ? (
          <FiSun className="w-6 h-6 text-yellow-400 hover:rotate-45 transition-transform duration-300" />
        ) : (
          <FiMoon className="w-6 h-6 text-indigo-600 hover:-rotate-45 transition-transform duration-300" />
        )}
      </span>
    </button>
  );
};

export default DarkModeToggle;
