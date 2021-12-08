import React, {useState} from 'react';
import {
    Backdrop,
    Box, Button,
    CircularProgress,
    Container,
    Divider, Grid, IconButton,
    InputAdornment,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import theme from "../theme";
import {Link, Navigate, useNavigate} from "react-router-dom";
import Message from "./Message";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {signup} from "../utils/apis";

function Register(props) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [isMatch, setIsMatch] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        setIsSubmitting(true);

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const signupData = {
            "email": data.get("email"),
            "password": data.get("password"),
            "firstName": data.get("firstName"),
            "lastName": data.get("lastName"),
        }

        if (signupData.password !== data.get("confirm_password")) {
            setIsMatch(false);
            return;
        }
        signup(signupData)
            .then(()=>{
                navigate('/login');
            })
            .catch((err)=>{
                setIsError(true);
                // console.log(err);
                setErrorMessage('Fail to Sign up');
                console.log("Signup failed: ", err.message);
                setIsSubmitting(false);
            });

    };

    return (
        <ThemeProvider theme={theme}>
            <div className='register-background'
                 style={{width: '100vw', height: '100vh', backgroundColor: '#FBE9E7'}}>
                <Backdrop
                    sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                    open={isSubmitting}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
                <Message open={isError} alertType='error' alertMessage={errorMessage} handleClose={() => {
                    setIsError(false)
                }}/>
                <Container component="main" maxWidth='xs'
                           sx={{
                               height: '560px',
                               display: 'inline-block',
                               position: 'relative',
                               top: '30%',
                               left: '0%',
                               borderRadius: '16px',
                               bgcolor: 'common.white'
                           }}>
                    <Box
                        paddingX='24px'
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h5" gutterBottom marked="center" align="center" color='warning.dark'
                                    sx={{fontWeight: 'bold', mt: 4}}>
                            Sign Up and Enjoy!
                        </Typography>
                        <Divider variant='middle'>
                            <Typography variant="body2" align="center">
                                {'Sign up with Email address as Username'}
                            </Typography>
                        </Divider>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="firstName"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="family-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        placeholder="Email Address/Username"
                                        autoFocus
                                        error={isEmpty}
                                        helperText={isEmpty ? 'Can not leave it empty' : ''}
                                        onChange={(e) => {
                                            if (!e.target.value) {
                                                setIsEmpty(true);
                                            } else {
                                                setIsEmpty(false);
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        error={!isMatch}
                                        helperText={isMatch ? "" : "The two passwords you typed do not match. "}
                                        onChange={() => {
                                            setIsMatch(true)
                                        }}
                                        name="password"
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        autoComplete="new-password"
                                        InputProps={{ // <-- This is where the toggle button is added.
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        onMouseDown={() => setShowPassword(!showPassword)}
                                                    >
                                                        {showPassword ? <Visibility/> : <VisibilityOff/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="confirm_password"
                                        label="Confirm Password"
                                        error={!isMatch}
                                        helperText={isMatch ? "" : "The two passwords you typed do not match. "}
                                        placeholder="Please enter above password again."
                                        type={"password"}
                                        id="confirm_password"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        disabled={true}
                                                    >
                                                        <VisibilityOff/>
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3, mb: 2, bgcolor: 'warning.dark',
                                    ':hover': {bgcolor: '#D84315'}
                                }}
                            >
                                Sign Up
                            </Button>
                            <Divider/>
                            <Grid container justifyContent="center">
                                <Grid item sx={{mt: 4, mb: 4}}>
                                    <Link to="/login" style={{
                                        textDecoration: 'none',
                                        color: 'black',
                                        fontSize: 14,
                                        fontFamily: "'Roboto Condensed', sans-serif",
                                    }}>
                                        {'Already have an account? Sign in'}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>

                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default Register;