import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeButton from './components/ToggleThemeButton';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
    return (
        <MovieContextProvider>
            <ProgressContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <ToggleThemeButton />
                    <Movies />
                </ThemeContextProvider>
            </ProgressContextProvider>
        </MovieContextProvider>
    );
}

export default App;
