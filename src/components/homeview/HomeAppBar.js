import React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import {Box, Button, Toolbar, Link, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function AppBar(props) {
    return <MuiAppBar elevation={0} position="fixed" {...props} />;
}

function HomeAppBar(props) {
    const navigate = useNavigate();

    return (
        <div>
            <AppBar position="fixed" sx={{bgcolor: 'primary.main'}}>
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box sx={{flex: 1}}/>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        href="/"
                        sx={{fontSize: 24}}
                    >
                        {'Easy Eats'}
                    </Link>
                    <Box sx={{flex: 1, display: 'flex', justifyContent: 'flex-end'}}>
                        <Button
                            sx={{ml: 3}}
                            onClick={() => {
                                navigate('/login')
                            }}
                        >
                            <Typography sx={{
                                fontSize: '16',
                                color: 'common.white'
                            }}>
                                Sign in
                            </Typography>
                        </Button>
                        <Button
                            sx={{ml: 3}}
                            onClick={() => {
                                navigate('/register')
                            }}
                        >
                            <Typography sx={{
                                fontSize: '16',
                                color: 'common.white'
                            }}>
                                Sign Up
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </div>
    );
}

export default HomeAppBar;