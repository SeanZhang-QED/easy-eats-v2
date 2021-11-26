import React from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import MainContent from "./MainContent";

function Main(props) {

    let location = useLocation();

    return (
        <div>
            {location.pathname === '/main' ? <MainContent /> : ''}
            <Outlet />
        </div>
    );
}

export default Main;