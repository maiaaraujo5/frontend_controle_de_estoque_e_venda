import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PublicProducts from "../pages/PublicProducts";
import Login from "../pages/Login";


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={PublicProducts}/>
        <Route path="/login" exact component={Login}/>
    </Switch>
);

export default Routes
