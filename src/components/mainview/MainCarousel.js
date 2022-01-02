import React, {Component} from 'react';
import {Box, Container, Divider, Grid, Stack} from "@mui/material";
import RestaurantCard from "../cards/RestaurantCard";
import {getRestaurants} from "../../utils/apis";

class MainCarousel extends Component {
    state = {
        restList: [],
        currentRest:null,
        error: false,
        errorMessage: '',
    };

    componentDidMount() {
        getRestaurants()
            .then((data)=>{
                this.setState({restList: data});
                console.log(data);
                console.log("Get restaurants successfully!");
            })
            .catch((err)=>{
                this.setState({error: true});
                this.setState({errorMessage: 'Fail to get the Restaurants.'});
                console.log(err);
            });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //inform the error to the MainContent.
        if(this.state.error === true) {
            this.props.handleError(this.state.errorMessage);
        }
    }
    render() {
        return (
            <Box >
                <Container >
                    <Grid container spacing={1}
                           sx={{overflow:"auto", padding:1}}>
                        {this.state.restList ? (this.state.restList.map((item) => (
                            <Grid item xs={12} sm={6} md={4} key={item.id} >
                                <RestaurantCard restaurant={item}
                                                handleSelect={()=>{
                                                    this.setState({currentRest:item});
                                                    this.props.handleSelectRest(item);
                                                }}/>
                            </Grid>
                        ))): null }
                    </Grid>
                </Container>
                <Divider variant="fullWidth" sx={{paddingBottom: 1, marginLeft: 4, marginRight:4}}/>
            </Box>
        );
    }
}

export default MainCarousel;