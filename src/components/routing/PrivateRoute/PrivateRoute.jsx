import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const PrivateRoute = ({ component: Component, role, page, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (Auth.isUserAuthenticated() && role === 'user') {
            return <Component {...props} />
        }

        if (Auth.isUserAuthenticated() && Auth.isUserAdmin() && role === 'admin') {
            return <Component {...props} />
        }

        if (!Auth.isUserAuthenticated() && role === 'guest') {
            return <Component {...props} />
        }

        let pathname = '/user/login';
        if (page) {
            pathname = page;
        }

        return <Redirect to={{
            pathname: pathname,
            state: { from: props.location }
        }} />
    }} />
};

export default PrivateRoute;

