import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Navbar = () => {
    return (
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Box display='flex' justifyContent='space-between' alignContent='center' width={1} py={2}>
                    <Typography variant='h6'>Favorite Films</Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
