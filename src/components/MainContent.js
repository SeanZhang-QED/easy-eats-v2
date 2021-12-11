import React from 'react';
import theme from "../theme";
import {Box, CssBaseline, Divider, Grid, Link, Stack, Toolbar, Typography} from "@mui/material";
import {alpha, styled, ThemeProvider} from "@mui/material/styles";
import MainSideBar from "./MainSideBar";
import MainBody from "./MainBody";
import Paper from '@mui/material/Paper';
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

const BackGroundBox = styled('div')(({theme}) => ({
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.light,
    alignItems: 'center',
    justifyContent: 'center',
    width: "calc(100vw - 48px)",
    height: "calc(100vh - 64px - 55px)",
    marginLeft: '24px',
    marginRight: '24px',
    overflow: 'auto'
}));

const ContainerBox = styled('div')(({theme}) => ({
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    width: "calc(100% - 24px)",
    height: "calc(100% - 24px)",
    margin: '12px',
    overflow: 'auto'
}));


function MainContent(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BackGroundBox>
                <ContainerBox>
                    <Box>
                        <Grid container spacing={2} padding={0} >
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
                </ContainerBox>
            </BackGroundBox>
        </ThemeProvider>
    );
}

export default MainContent;