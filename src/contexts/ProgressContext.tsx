import { createContext, ReactNode } from 'react';

interface ProgressContextProviderProps {
    children: ReactNode;
}

interface DefaultContextProgress {
    lastTime: string;
    status: string;
}

const defaultProgress = {
    lastTime: '02/09/2021',
    status: 'In Progress',
};

export const ProgressContext =
    createContext<DefaultContextProgress>(defaultProgress);

const ProgressContextProvider = ({
    children,
}: ProgressContextProviderProps) => {
    return (
        <ProgressContext.Provider value={defaultProgress}>
            {children}
        </ProgressContext.Provider>
    );
};

export default ProgressContextProvider;
