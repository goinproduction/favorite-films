import './App.css';
import Navbar from './components/Navbar';
import ToggleThemeButton from './components/ToggleThemeButton';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
    return (
        <ProgressContextProvider>
            <ThemeContextProvider>
                <Navbar />
                <ToggleThemeButton />
            </ThemeContextProvider>
        </ProgressContextProvider>
    );
}

export default App;
