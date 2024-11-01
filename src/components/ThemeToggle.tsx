"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { BsMoonStarsFill } from "react-icons/bs";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  className="p-2 bg-white rounded-full dark:bg-black text-2xl transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-800"
>
  {theme === "light" ? <FaSun  /> : <BsMoonStarsFill />}
</button>

  );
};

export default ThemeToggle;
