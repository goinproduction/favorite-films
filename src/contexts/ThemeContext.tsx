import { createContext, ReactNode } from 'react';
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
    return (
        <ThemeContext.Provider value={themeDefaultContextData}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
