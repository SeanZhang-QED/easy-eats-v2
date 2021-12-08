import React from 'react';
import theme from "../theme";
import {Outlet, useLocation} from 'react-router-dom';
import MainContent from "./MainContent";
import {Navigate} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

function Main(props) {
    const { isLogged } = props;

    let location = useLocation();

    return ( isLogged ? (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <React.Fragment>
                    <div>
                        {location.pathname === '/main' ? <MainContent /> : ''}
                        <Outlet />
                    </div>
                </React.Fragment>
            </ThemeProvider>
        ) : (
            <Navigate to={'/login'} />
        )

    )
}

export default Main;