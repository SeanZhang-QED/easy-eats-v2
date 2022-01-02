import React from 'react';
import theme from "../theme";
import {Outlet, useLocation} from 'react-router-dom';
import MainContent from "./mainview/MainContent";
import {Navigate} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline, Toolbar} from "@mui/material";
import MainAppBar from "./mainview/MainAppBar";

function Main(props) {
    const { isLogged, handleLogOut } = props;

    let location = useLocation();

    return ( isLogged ? (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <MainAppBar handleLogOut={handleLogOut}/>
                <Toolbar />
                <React.Fragment>
                    <div>
                        {location.pathname === '/main' ? <MainContent /> : ''}
                        <Outlet />
                    </div>
                </React.Fragment>
            </ThemeProvider>
        ) : (
            <Navigate to={'/home'} />
        )

    )
}

export default Main;