// components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500 dark:text-yellow-400" size={17} />
      ) : (
        <FaMoon className="text-gray-800 dark:text-gray-200" size={17} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
