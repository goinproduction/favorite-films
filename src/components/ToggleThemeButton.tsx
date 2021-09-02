import { Fab } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        floatBtn: {
            position: 'fixed',
            right: '3rem',
            bottom: '3rem',
        },
    })
);

const ToggleThemeButton = () => {
    const classes = useStyles();
    return (
        <Fab color='primary' variant='extended' className={classes.floatBtn}>
            Toggle Theme
        </Fab>
    );
};

export default ToggleThemeButton;
