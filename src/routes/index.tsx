import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PublicProducts from "../pages/PublicProducts";
import Login from "../pages/Login";
import Dashboard from "../pages/DashBoard/Initial";
import Products from "../pages/DashBoard/Products";
import Sells from "../pages/DashBoard/Sells";


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={PublicProducts}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/dashboard" exact component={Dashboard}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/sells" exact component={Sells}/>
    </Switch>
);

export default Routes
