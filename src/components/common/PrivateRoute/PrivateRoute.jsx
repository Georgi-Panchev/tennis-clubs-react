import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (Auth.isUserAuthenticated()) {
            return <Component {...props} />
        }

        return <Redirect to={{
            pathname: '/users/login',
            state: { from: props.location }
        }} />
    }} />
};

export default PrivateRoute;
