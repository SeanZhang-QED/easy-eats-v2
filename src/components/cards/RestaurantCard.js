import React from 'react';
import {Box, Card, CardMedia, CardContent, Typography, Paper, CardActionArea} from "@mui/material";
import { makeStyles } from '@mui/styles';
import theme from "../../theme";
import {ThemeProvider} from "@emotion/react";

const RestaurantCard = (props) => {
    const {id, imageUrl, name, phone, address} = props.restaurant;
    const { handleSelect } = props;

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ height: '120px' ,display: 'flex', borderRadius: 3 }}  variant="outlined" >
                <CardActionArea onClick={()=>{handleSelect(id)}}>
                    <Box sx={{ display: 'flex', justifyContent:'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" fontWeight="700">
                                    {name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {address}
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={imageUrl}
                        />
                    </Box>
                </CardActionArea>
            </Card>
        </ThemeProvider>
    );
};

export default RestaurantCard;