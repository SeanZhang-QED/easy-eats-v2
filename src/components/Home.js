import React from 'react';
import AppAppBar from "./AppAppBar";
import AppFooter from "./AppFooter";
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
                    <AppAppBar/>
                    <p>
                        this is home page.
                    </p>
                    <AppFooter/>
                </React.Fragment>
            </ThemeProvider>
        ) : (
            <Navigate to={'/main'}/>
        )
    );
}

export default Home;