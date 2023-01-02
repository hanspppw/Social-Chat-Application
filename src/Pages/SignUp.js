import React, { Component, useState } from 'react';
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
import { database } from '../firebase'
import { ref, push, child, update } from "firebase/database";

export default function SignUp() {
    const [showPassword, setShowPassword] = React.useState(false);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    }

    const handleSubmit = () => {
        let obj = {
            name: name,
            email: email,
            password: password,
        }
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }

    return (
        <div className="SignIn">
            <FormControl variant="standard">
                <InputLabel htmlFor="component-helper">Name</InputLabel>
                <Input
                    id="name"
                    aria-describedby="component-helper-text"
                    onChange={(e) => handleInputChange(e)}
                    value={name}
                />
                <FormHelperText id="name-helper">
                    Please enter your name
                </FormHelperText>
            </FormControl>

            <br />

            <FormControl variant="standard">
                <InputLabel htmlFor="component-helper">Email</InputLabel>
                <Input
                    id="email"
                    aria-describedby="component-helper-text"
                    onChange={(e) => handleInputChange(e)}
                    value={email}
                />
                <FormHelperText id="name-helper">
                    Please enter your email
                </FormHelperText>
            </FormControl>

            <br />
            <FormControl sx={{ m: 4, width: '21ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="password"
                    onChange={(e) => handleInputChange(e)}
                    value={password}
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
                <Button onClick={() => handleSubmit()} className="register_data" variant="contained">Create Account</Button>
            </div>
        </div>
    )
}
