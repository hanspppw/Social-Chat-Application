import React, { Component } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="SignIn">
            <FormControl variant="standard">
                <InputLabel htmlFor="component-helper">Name</InputLabel>
                <Input
                    id="name"
                    aria-describedby="component-helper-text"
                />
                <FormHelperText id="name-helper">
                    Please enter your name
                </FormHelperText>
            </FormControl>

            <br />

            <FormControl variant="standard">
                <InputLabel htmlFor="component-helper">Email</InputLabel>
                <Input
                    id="name"
                    aria-describedby="component-helper-text"
                />
                <FormHelperText id="name-helper">
                    Please enter your email
                </FormHelperText>
            </FormControl>

            <br />
            <FormControl sx={{ m: 4, width: '21ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
                />
            </FormControl>

            <div id="SignInButton">
                <Button variant="contained">Create Account</Button>
            </div>
        </div>
    )
}
