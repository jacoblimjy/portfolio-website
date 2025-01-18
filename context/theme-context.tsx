"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
	children,
}: ThemeContextProviderProps) {
	const [theme, setTheme] = useState<Theme>("light");

	// Function to apply the theme to the HTML tag
	const applyTheme = (theme: Theme) => {
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
			root.classList.remove("light");
		} else {
			root.classList.add("light");
			root.classList.remove("dark");
		}
	};

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		window.localStorage.setItem("theme", newTheme);
		applyTheme(newTheme);
	};

	useEffect(() => {
		// Check localStorage for a saved theme
		const localTheme = window.localStorage.getItem("theme") as Theme | null;

		if (localTheme) {
			setTheme(localTheme);
			applyTheme(localTheme);
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			// Use system preference if no saved theme
			setTheme("dark");
			applyTheme("dark");
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeContextProvider");
	}

	return context;
}