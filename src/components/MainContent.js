import React from 'react';
import theme from "../theme";
import {Box, CssBaseline, Grid, Link, Typography} from "@mui/material";
import {ThemeProvider} from "@mui/material/styles";
import MainSideBar from "./MainSideBar";
import MainBody from "./MainBody";
import MainAppBar from "./MainAppBar";

function Copyright(props) {
    return (
        <Typography variant="caption" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="#">
                Easy Eats
            </Link>{' '}
            {new Date().getFullYear()}
            {'. All Rights Reserved. Website Made by Sean - '}
            <Link color="inherit" href="mailto:Sean.XUANZHANG@gmail.com">
                Xuan Zhang
            </Link>
            {'. '}
        </Typography>
    );
}

function MainContent(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <React.Fragment>
                <MainAppBar/>
                <Box sx={{flexGrow: 1}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={2}>
                            <MainSideBar/>
                        </Grid>
                        <Grid item xs={6} md={10}>
                            <MainBody/>
                        </Grid>
                    </Grid>
                </Box>
                <Box id="main-footer" xs={12} sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    margin: 2
                }}>
                    <Copyright/>
                </Box>
            </React.Fragment>
        </ThemeProvider>
    );
}

export default MainContent;