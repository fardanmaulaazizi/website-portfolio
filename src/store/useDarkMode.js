import { create } from "zustand";

export const useDarkMode = create((set) => ({
  isDarkMode:
    localStorage.getItem("theme") === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),
  setIsDarkMode: (darkMode) => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    set({ isDarkMode: darkMode });
  },
}));
