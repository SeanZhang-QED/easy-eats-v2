import React from 'react';
import {Box, Container, Grid, Link, Typography} from "@mui/material";
import Linkedin from '../assets/images/linkedin.svg';
import Github from '../assets/images/github.svg';

function Copyright(props) {
    return (
        <Typography variant="caption" color="common.white" align="center" {...props}>
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

const iconStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#869fb2',
    mr: 1,
    '&:hover': {
        bgcolor: '#9E9E9E',
    },
};

function HomeFooter(props) {
    return (
        <Typography
            component="footer"
            sx={{ display: 'flex',
                color:'common.white',
                bgcolor: '#757575',
                position:'fixed',
                bottom:0,
                left: 0,
                right: 0,
            }}
        >
            <Container sx={{ my: 5, display: 'flex' }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography color='white' variant="h6" marked="left" sx={{textAlign:'left'}} gutterBottom>
                            Social media
                        </Typography>
                        <Grid
                            container
                            direction="column"
                            spacing={2}
                            sx={{ height: 120 }}
                        >
                            <Grid item sx={{ display: 'flex' }}>
                                <Box component="a" href="#/" sx={iconStyle}>
                                    <img
                                        src={Github}
                                        alt="Github"
                                    />
                                </Box>
                                <Box
                                    component="a"
                                    href="#"
                                    sx={iconStyle}
                                >
                                    <img
                                        src={Linkedin}
                                        alt="LinkedIn"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='white' variant="h6" marked="left" sx={{textAlign:'left'}} gutterBottom>
                            About
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0, alignItems: 'start', textAlign:'left'}}>
                            <Box component="li" sx={{ py: 0.5,
                                ":hover": {
                                    color: '#9E9E9E'
                                }
                            }}>
                                <Link href="#"  color="inherit"
                                >Easy Eats</Link>
                            </Box>
                            <Box component="li" sx={{
                                py: 0.5,
                                ":hover": {
                                    color: '#9E9E9E'
                                } }}>
                                <Link href="#"  color="inherit"  >Me</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography color='white' variant="h6" marked="left" sx={{textAlign:'left'}} gutterBottom>
                            Other
                        </Typography>
                        <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0, alignItems: 'start', textAlign:'left'}}>
                            <Box component="li"
                                 sx={{
                                     py: 0.5,
                                    ":hover": {
                                        color: '#9E9E9E'
                                    }
                                 }}
                            >
                                <Link href="#"  color="inherit">Easy Eats - Gourmet</Link>
                            </Box>
                            <Box component="li"
                                 sx={{
                                     py: 0.5,
                                     ":hover": {
                                         color: '#90CAF9'
                                     }
                                 }}
                            >
                                <Link href="#"  color="inherit">...</Link>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} >
                        <Copyright />
                    </Grid>
                </Grid>
            </Container>
        </Typography>
    );
}

export default HomeFooter;