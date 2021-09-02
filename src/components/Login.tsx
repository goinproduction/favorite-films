import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    TextField,
} from '@material-ui/core';
import { ChangeEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [username, setUsername] = useState('');

    // context
    const { toggleAuth } = useContext(AuthContext);
    const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) =>
        setUsername(event.target.value);

    const onLoginSubmit = () => {
        toggleAuth(username);
        setUsername('');
    };
    return (
        <Dialog open>
            <DialogContent>
                <TextField
                    label='Username'
                    onChange={onUsernameChange}
                    required
                />
            </DialogContent>
            <DialogActions>
                <Button
                    color='primary'
                    variant='contained'
                    onClick={onLoginSubmit}
                    disabled={username == ''}
                >
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Login;
