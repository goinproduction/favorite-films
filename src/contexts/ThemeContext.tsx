import { PropTypes } from '@material-ui/core';
import { createContext, ReactNode, useState } from 'react';

interface ThemeContextProviderProps {
    children: ReactNode;
}

interface ThemeDefaultContext {
    theme: PropTypes.Color;
}

const themeDefaultContextData = {
    theme: 'primary' as PropTypes.Color,
};

export const ThemeContext = createContext<ThemeDefaultContext>(
    themeDefaultContextData
);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(
        themeDefaultContextData.theme
    );

    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme);

    const themeContextData = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
