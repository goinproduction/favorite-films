import { Grid } from '@material-ui/core';
import './App.css';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import ToggleThemeButton from './components/ToggleThemeButton';
import TopMovies from './components/TopMovies';
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
                        <Grid container>
                            <Grid item xs={4}>
                                <TopMovies />
                            </Grid>
                            <Grid item xs={8}>
                                <Movies />
                            </Grid>
                        </Grid>
                        <ToggleThemeButton />
                    </ThemeContextProvider>
                </ProgressContextProvider>
            </MovieContextProvider>
        </AuthContextProvider>
    );
}

export default App;
