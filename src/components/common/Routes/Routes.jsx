import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

import ClubListPage from '../../clubs/ClubListPage/ClubListPage';
import CreateClubPage from '../../clubs/CreateClubPage/CreateClubPage';
import ClubDetailsPage from '../../clubs/ClubDetailsPage/ClubDetailsPage';
import RegisterPage from '../../users/RegisterPage/RegisterPage';
import LoginPage from '../../users/LoginPage/LoginPage';
import Logout from '../../users/Logout/Logout';

const Routes = (props) => (
    <Switch>
        <Route path="/" exact component={ClubListPage} />
        <PrivateRoute path="/pet/create" component={CreateClubPage} />
        <PrivateRoute path="/pet/details/:id" component={ClubDetailsPage} />
        <Route path="/user/register" component={RegisterPage} />
        <Route path="/user/login" component={LoginPage} />
        <PrivateRoute path="/user/logout" component={Logout} />
    </Switch>
);

export default Routes;
