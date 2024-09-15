import { create } from "zustand";

export const useActivedSection = create((set) => ({
  activedSection: "About",
  setActivedSection: (activedSection) => set({ activedSection }),
}));
