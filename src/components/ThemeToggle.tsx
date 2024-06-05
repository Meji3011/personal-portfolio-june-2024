"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme || "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {theme === "light" ? (
        <Button variant="outline">
          <SunIcon className="h-5 w-5 shrink-0" />
        </Button>
      ) : (
        <Button variant="outline">
          <MoonIcon className="h-5 w-5 shrink-0" />
        </Button>
      )}
    </button>
  );
};

export default ThemeToggle;
