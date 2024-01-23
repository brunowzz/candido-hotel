"use client";

import { useState, useEffect } from "react";
import { ThemeContext } from "@/context/themeContext";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const verifyItem =
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme");
  const getItem = JSON.parse(localStorage.getItem("hotel-theme")!);
  const themeFromStorage: boolean = verifyItem ? getItem : false;

  const [darkTheme, setDarkTheme] = useState<boolean>(themeFromStorage);
  const [renderComponent, setRenderComponent] = useState<boolean>(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="text-[#1E1E1E] dark:bg-black dark:text-white">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
