import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeButton from './components/ToggleThemeButton';
import AuthContextProvider from './contexts/AuthContext';
import MovieContextProvider from './contexts/MovieContext';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
function App() {
    return (
        <AuthContextProvider>
            <MovieContextProvider>
                <ProgressContextProvider>
                    <ThemeContextProvider>
                        <Navbar />
                        <ToggleThemeButton />
                        <Movies />
                    </ThemeContextProvider>
                </ProgressContextProvider>
            </MovieContextProvider>
        </AuthContextProvider>
    );
}

export default App;
