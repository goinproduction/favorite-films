import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core';
import { useContext, useState, ChangeEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { MovieContext } from '../contexts/MovieContext';
import { ThemeContext } from '../contexts/ThemeContext';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        movieInput: {
            marginRight: '5px',
        },
        movieChip: {
            fontSize: '2rem',
            padding: '30px 10px',
            margin: '5px',
        },
    })
);

const Movies = () => {
    const classes = useStyles();
    // state
    const [movie, setMovie] = useState('');

    // context
    const { theme } = useContext(ThemeContext);
    const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>;
    const { movies, addMovie, deleteMovie } = useContext(MovieContext);

    const onMovieInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMovie(e.target.value);
    };

    return (
        <>
            <Box display='flex' justifyContent='center' my={5}>
                <TextField
                    label='Your favorite movie'
                    variant='outlined'
                    className={classes.movieInput}
                    onChange={onMovieInputChange}
                    value={movie}
                ></TextField>
                <Button
                    variant='contained'
                    color={theme}
                    onClick={() => {
                        addMovie(movie);
                        setMovie('');
                    }}
                >
                    Add
                </Button>
            </Box>
            <Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
                {movies.map((movie) => (
                    <Chip
                        key={movie.id}
                        label={movie.title}
                        clickable
                        color={chipTheme}
                        className={classes.movieChip}
                        onDelete={deleteMovie.bind(this, movie.id)}
                    />
                ))}
            </Box>
        </>
    );
};

export default Movies;
