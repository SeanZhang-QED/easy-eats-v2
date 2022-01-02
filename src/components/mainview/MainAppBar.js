import React, {Component, useState} from 'react';
import {styled, alpha, ThemeProvider} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
    Chip
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {useNavigate} from "react-router-dom";
import theme from "../../theme";


export default function MainAppBar(props) {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const [searchValue, setSearchValue] = useState(null);
    const navigate = useNavigate();
    const {handleLogOut} = props;

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleLogOut}>Log out</MenuItem>
        </Menu>
    );

    return (
        // TODO: build the App Bar with a button to log out and navigate to the account page.
        <ThemeProvider theme={theme}>
            <Box sx={{flexGrow: 1}}>
                <AppBar sx={{bgcolor: 'common.white', boxShadow: 0}}>
                    <Toolbar>
                        <Box sx={{flexGrow: 1}}/>
                        <Box id='logo-section' sx={{
                            marginLeft: 6,
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            [theme.breakpoints.down('md')]: {
                                width: 'auto'
                            }
                        }}>
                            <Link
                                variant="h6"
                                underline="none"
                                color="primary.main"
                                href="/"
                                sx={{fontSize: 24}}
                            >
                                {'Easy Eats'}
                            </Link>
                        </Box>
                        <Box sx={{flexGrow: 1}}/>
                        <Box sx={{
                            display: 'flex',
                            height: '48px',
                            width: '114px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '27px',
                            transition: 'all .2s ease-in-out',
                            borderColor: theme.palette.primary.light,
                            backgroundColor: theme.palette.primary.light,
                        }}>
                            <IconButton
                                edge="start"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                                sx={{m: 0, color: 'primary.main'}}
                            >
                                <AccountCircle fontSize='large'/>
                            </IconButton>
                            <IconButton
                                edge="end"
                                onClick={() => {
                                    navigate('order')
                                }}
                                sx={{m: 0}}
                            >
                                <LocalMallIcon color='secondary' fontSize='large'/>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMenu}
            </Box>
        </ThemeProvider>
    );
}
