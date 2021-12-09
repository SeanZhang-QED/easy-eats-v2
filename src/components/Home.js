import React from 'react';
import HomeAppBar from "./HomeAppBar";
import HomeFooter from "./HomeFooter";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme";
import {CssBaseline} from "@mui/material";
import {Navigate} from "react-router-dom";

function Home(props) {
    const {isLogged} = props;

    return (!isLogged ? (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <React.Fragment>
                    <HomeAppBar/>
                    <p>
                        this is home page.
                    </p>
                    <HomeFooter/>
                </React.Fragment>
            </ThemeProvider>
        ) : (
            <Navigate to={'/main'}/>
        )
    );
}

export default Home;