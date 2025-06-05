"use client";

import React, { useEffect, createContext, useContext } from "react";

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
        const theme: Theme = "dark";

        // Function to apply the theme to the HTML tag
        const applyTheme = () => {
                const root = document.documentElement;
                root.classList.add("dark");
                root.classList.remove("light");
        };

        const toggleTheme = () => {
                // noop to keep dark mode enforced
        };

        useEffect(() => {
                applyTheme();
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