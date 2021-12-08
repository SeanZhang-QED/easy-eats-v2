import React, {useEffect, useState} from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import {
    Backdrop,
    Box,
    Button, CircularProgress,
    Container,
    Divider,
    IconButton,
    InputAdornment, Paper,
    TextField,
    ThemeProvider,
    Typography,
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import theme from "../theme";
import {login} from "../utils/apis";
import Message from "./Message";
import axios from "axios";

function Login(props) {
    const { isLogged, handleLogged } = props;
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isPEmpty, setIsPEmpty ] = useState(false);
    const [ isUEmpty, setIsUEmpty ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState();
    const [ willNaviTo, setWillNaviTo] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        // 1. get the form data
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // 2. set isSubmitting to true
        setIsSubmitting(true);
        // 3. dent data to the backend
        const opt = {
            method: "POST",
            url: `/authenticate`,
            data: {
                email: data.get('username'),
                password: data.get('password')
            },
            headers: { "Content-Type": "application/json" }
        };
        axios(opt)
            .then((res) => {
                if (res.status === 200) {
                    // case 1: success -> navigate to main
                    const { data } = res;
                    // console.log("received the response: \n", data);
                    handleLogged(data);
                    // setIsSubmitting(false);
                    navigate('/main');
                }
            })
            .catch((err) => {
                // case 2: inform the user
                setIsError(true);
                // console.log(err);
                setErrorMessage('Fail to log in');
                console.log("login failed: ", err.message);
                setIsSubmitting(false);
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <div >
                { isLogged ? (
                    // if the user is logged in, then redirect to home page
                    <Navigate to="/main" />
                ) : (
                    // otherwise, render the login component
                    <div className='login-background' style={{width:'100vw', height:'100vh'}}>
                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={isSubmitting}
                            // onClick={handleClose}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                        <Message open={isError} alertType='error' alertMessage={errorMessage} handleClose = {() => {setIsError(false)}} />
                        <Container component="main" maxWidth='xs'
                                   sx={{
                                       height:'480px',
                                       display: 'inline-block',
                                       position: 'relative',
                                       top: '30%',
                                       left: '0%',
                                       borderRadius: '16px',
                                       bgcolor:'common.white'
                                   }}>
                            <Box
                                paddingX='24px'
                                sx={{
                                    height:'100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent:'space-between',
                                    alignItems: 'center',
                                    textAlign:'center',
                                }}
                            >
                                <Typography variant="h5" gutterBottom marked="center" align="center" color='secondary.dark'
                                            sx={{fontWeight: 'bold', mt:4}}>
                                    Hi, Welcome Back
                                </Typography>
                                <Divider variant='middle'>
                                    <Typography variant="body2" align="center">
                                        {'Sign in with Email address as Username'}
                                    </Typography>
                                </Divider>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="username"
                                        label="UserName"
                                        name="username"
                                        autoComplete="username"
                                        placeholder="Email Address/Username"
                                        autoFocus
                                        error={isUEmpty}
                                        helperText={isUEmpty ? 'Email is required':''}
                                        onChange={(e)=>{
                                            if(!e.target.value){
                                                setIsUEmpty(true);
                                            } else {
                                                setIsUEmpty(false);
                                            }
                                        }}
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        autoComplete="current-password"
                                        error={isPEmpty}
                                        helperText={isPEmpty ? 'Password is required':''}
                                        onChange={(e)=>{
                                            if(!e.target.value){
                                                setIsPEmpty(true);
                                            } else {
                                                setIsPEmpty(false);
                                            }
                                        }}
                                        InputProps={{ // <-- This is where the toggle button is added.
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        disabled={isSubmitting}
                                        sx={{ mt: 3, mb: 2, bgcolor: 'secondary.dark' }}
                                    >
                                        {isSubmitting ? 'In progress' : 'Sign In'}
                                    </Button>
                                    <Divider />
                                    <Box sx={{mt: 4, mb: 4}}>
                                        <Link to="/register" style={{
                                            textDecoration: 'none',
                                            color: 'black',
                                            fontSize: 14,
                                            fontFamily: "'Roboto Condensed', sans-serif",
                                        }} >
                                            {"Don't have an account? Sign Up Now!"}
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
}

export default Login;