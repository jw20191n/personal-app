import { Route, Switch } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';

const Home = lazy( () => import('../pages/Home'));
const Login = lazy( () => import('../pages/Login'));
const Register = lazy( () => import('../pages/Register'));

const Router = () => (
    <Suspense fallback="loading...">
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/register" component={Register}></Route>
        </Switch>
    </Suspense>
)
   

export default Router;