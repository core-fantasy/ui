// Routes.js
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainPage from './MainPage'
import UserHome from "./UserHome";
import NotFound from "./NotFound";

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/userHome" component={UserHome}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
);