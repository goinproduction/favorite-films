import { createContext, ReactNode, useState } from 'react';

interface ThemeContextProviderProps {
    children: ReactNode;
}

interface ThemeDefaultContext {
    theme: string;
}

const themeDefaultContextData = {
    theme: 'primary',
};

export const ThemeContext = createContext<ThemeDefaultContext>(
    themeDefaultContextData
);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState(themeDefaultContextData.theme);

    const toggleTheme = (theme: string) => setTheme(theme);

    const themeContextData = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
