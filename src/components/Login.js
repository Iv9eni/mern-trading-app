import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [users, setUsers] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/user/")
            .then(response => {
                if (response.data.length > 0) 
                    setUsers(response.data.map(user => user.username.toLowerCase()))
            })
            .catch(err => console.log(err));
    })

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onSubmit = (e) => {        
        e.preventDefault();

        if (users.includes(username.toLowerCase())) {
            console.log("Logged in!")
        }
        else {
            const user = {
                username: username.toLowerCase()
            } 
            axios.post("http://localhost:5000/user/add", user)
                .then(response => {
                    let newUsers = users.concat(username.toLowerCase())
                    setUsers(newUsers);
                    console.log("New user added.")
                })
                .catch(err => console.log(err));
        }
        props.changeName(username);
        navigate("/login");
    }

    return(
        <Container maxWidth="xs">
            <Box component="form" onSubmit={onSubmit}>
                <TextField fullWidth onChange={onChangeUsername} value={username} />
                <Button disabled={username.length < 3} type="submit" onClick={onSubmit} variant="outlined" fullWidth sx={{marginTop: 1}}>Login</Button>
            </Box>
        </Container>
    );
}

export default Login;