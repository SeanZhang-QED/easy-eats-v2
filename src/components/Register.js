import React, {useState} from 'react';
import {
    Backdrop,
    Box, Button,
    CircularProgress,
    Container,
    Divider, IconButton,
    InputAdornment,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import theme from "../theme";
import {Link, Navigate} from "react-router-dom";
import Message from "./Message";
import {Visibility, VisibilityOff} from "@mui/icons-material";

function Register(props) {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState();

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
                               height: '480px',
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
                        <Typography variant="h5" gutterBottom marked="center" align="center" color='secondary.dark'
                                    sx={{fontWeight: 'bold', mt: 4}}>
                            Sign Up and Enjoy!
                        </Typography>
                        <Divider variant='middle'>
                            <Typography variant="body2" align="center">
                                {'Sign in with Email address as Username'}
                            </Typography>
                        </Divider>
                    {/* TODO: Add the register form body */}

                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default Register;