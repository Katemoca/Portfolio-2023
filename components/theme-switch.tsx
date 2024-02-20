"use client";

import React, { useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
  // We need to keep track of the STATE!!!
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = (theme: Theme) => {};

  return (
    <button className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all">
      <BsSun />
    </button>
  );
}
