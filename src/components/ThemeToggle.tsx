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

>
  {theme === "light" ? <FaSun  /> : <BsMoonStarsFill />}
</button>

  );
};

export default ThemeToggle;
