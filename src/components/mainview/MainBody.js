import React, {Component, useEffect, useState} from 'react';
import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import RestaurantCard from "../cards/RestaurantCard";
import {getRestaurants} from "../../utils/apis";
import DishCard from "../cards/DishCard";

class MainBody extends Component {


    render() {
        const {currentRest, items} = this.props;

        return (
            (currentRest ?
                    <Box>
                        <Typography variant="h5" component="div" fontWeight="700" align='left'>
                            {currentRest.name}
                        </Typography>
                        <Typography variant="body1" component="div" align='left' pb={3}>
                            {`(${currentRest.address})`}
                        </Typography>
                        <Grid container spacing={3} alignItems='center'>
                            {items
                                ?
                                items.map((item, idx) => (
                                    <Grid item sm={12} md={6} xl={3}>
                                        <DishCard key={idx} item={item}/>
                                    </Grid>))
                                :
                                ''
                            }
                        </Grid>
                    </Box>
                    :
                    <div>
                        {`Plz select a rest first.`}
                    </div>
            )
        );
    }
}

export default MainBody;