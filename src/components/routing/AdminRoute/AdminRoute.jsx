import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const AdminRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest} render={(props) => {
        if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
            return <Component {...props} />
        }

        return <Redirect to={{
            pathname: '/user/login',
            state: { from: props.location }
        }} />
    }} />
};

export default AdminRoute;
