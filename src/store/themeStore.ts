import {create} from "zustand";

type Theme = "dark" | "light";

interface ThemeStore {
    theme: Theme
    toggleTheme: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: (localStorage.getItem("theme") as Theme) || "light",

    toggleTheme: () =>
        set((state) => {
            const newTheme: Theme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem("theme", newTheme);
            return { theme: newTheme };
        }),
}));
