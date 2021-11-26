import React from 'react';
import AppAppBar from "./AppAppBar";
import AppFooter from "./AppFooter";
import {ThemeProvider} from "@mui/material/styles";
import theme from "../theme";
import {CssBaseline} from "@mui/material";

function Home(props) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <React.Fragment>
                <AppAppBar />
                <p>
                    this is home page.
                </p>
                <AppFooter />
            </React.Fragment>
        </ThemeProvider>
    );
}

export default Home;