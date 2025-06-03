"use client";
import React, { useEffect, useState } from "react";
import Img from "./Img"; // تأكد أن Img يعمل كما يجب

export default function DarkModebtn() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      className="z-[9999] block p-2 dark:bg-gray-100 bg-gray-800 rounded-full shadow-md cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-full w-[25px] max-md:w-[20px] max-md:h-[20px] h-[25px] flex items-center justify-center">
        <div
          className={`absolute transition-transform duration-300 ${
            theme === "dark" ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <Img
            src="/moon.png"
            className="w-[25px] max-md:w-[25px] object-contain"
          />
        </div>
        <div
          className={`absolute transition-transform duration-300 ${
            theme === "dark" ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Img
            src="/sun.png"
            className="w-[25px] max-md:w-[25px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
