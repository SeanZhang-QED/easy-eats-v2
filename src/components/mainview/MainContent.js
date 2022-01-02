import React, {Component, useEffect} from 'react';
import  {useState} from 'react';
import theme from "../../theme";
import {
    Box,
    Card, CardContent, CardHeader,
    CardMedia, Container,
    CssBaseline,
    Divider,
    Grid, IconButton,
    Link,
    makeStyles,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import {alpha, styled, ThemeProvider} from "@mui/material/styles";
import MainSideBar from "./MainSideBar";
import MainBody from "./MainBody";
import Paper from '@mui/material/Paper';
import MainAppBar from "./MainAppBar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RestaurantCard from "../cards/RestaurantCard";
import {getMenus, getRestaurants} from "../../utils/apis";
import Message from "../Message";
import MainCarousel from "./MainCarousel";

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
    const [currentRest, setCurrentRest] = useState();
    const [menuItems, setMenuItems] = useState();
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [loading, setLoading] = useState(false);

    const handleError = (message)=>{
        setErrorMessage(message);
        setIsError(true);
    } ;

    const handleSelectRest = (restItem) => {
        setCurrentRest(restItem);
        // console.log("select the rest with id: ", restId);
    }

    // update the MainBody when current selected restaurant changed.
    useEffect(()=>{
        // fetch the dish from the backend
        if (!currentRest) return;
        // 1. start loading
        setLoading(true);
        // 2. fetch data
        getMenus(currentRest.id)
            .then((data)=>{
                console.log(data);
                console.log("Get all the Mume items back.");
                setMenuItems(data);
            })
            .catch((err)=>{
                console.log(err);
                setIsError(true);
                setErrorMessage("Fail to get all the Menu Items from server.");
            })
            .finally(()=>{
                setLoading(false);
            });
        // 3.
    },[currentRest]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Message open={isError} alertType='error' alertMessage={errorMessage} handleClose={() => {
                setIsError(false)
            }}/>
            <BackGroundBox>
                <ContainerBox>
                    <Box>
                        {
                            <Grid container spacing={2} padding={0} >
                                <Grid item xs={12}>
                                    <MainCarousel handleError={handleError} handleSelectRest={handleSelectRest}/>
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <MainSideBar/>
                                </Grid>
                                <Grid item xs={6} md={9}>
                                    <MainBody currentRest={currentRest} items={menuItems}/>
                                </Grid>
                            </Grid>
                        }
                    </Box>
                    <Box id="main-footer" xs={12} sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, margin: 2}}>
                        <Copyright/>
                    </Box>
                </ContainerBox>
            </BackGroundBox>
        </ThemeProvider>
    );
}

export default MainContent;