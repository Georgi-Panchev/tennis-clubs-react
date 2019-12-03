import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

import ClubListPage from '../../clubs/ClubListPage/ClubListPage';
import CreateClubPage from '../../clubs/CreateClubPage/CreateClubPage';
import ClubDetailsPage from '../../clubs/ClubDetailsPage/ClubDetailsPage';

import CreateTournamentPage from '../../tournaments/CreateTournamentPage/CreateTournamentPage';

import RegisterPage from '../../users/RegisterPage/RegisterPage';
import LoginPage from '../../users/LoginPage/LoginPage';
import Logout from '../../users/Logout/Logout';
import ProfilePage from '../../users/ProfilePage/ProfilePage';

import TournamentListByClubPage from '../../tournaments/TournamentListByClubPage/TournamentListByClubPage';
import TournamentDetailsPage from '../../tournaments/TournamentDetailsPage/TournamentDetailsPage';
import TournamentListPage from '../../tournaments/TournamentListPage/TournamentListPage';
import AttendTournament from '../../tournaments/AttendTournament/AttendTournament';
import LeaveTournament from '../../tournaments/LeaveTournament/LeaveTournament';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={ClubListPage} />
        <PrivateRoute path="/club/create" component={CreateClubPage} />
        <PrivateRoute path="/club/details/:id" component={ClubDetailsPage} />

        <PrivateRoute path="/tournament/create/:clubId" component={CreateTournamentPage} />
        <PrivateRoute path="/tournament/all/:clubId" component={TournamentListByClubPage} />
        <PrivateRoute path="/tournament/all" component={TournamentListPage} />
        <PrivateRoute path="/tournament/details/:tournamentId" component={TournamentDetailsPage} />
        <PrivateRoute path="/tournament/attend/:tournamentId" component={AttendTournament} />
        <PrivateRoute path="/tournament/leave/:tournamentId" component={LeaveTournament} />

        <Route path="/user/register" component={RegisterPage} />
        <Route path="/user/login" component={LoginPage} />
        <PrivateRoute path="/user/logout" component={Logout} />
        <PrivateRoute path="/user/profile" component={ProfilePage} />
    </Switch>
);

export default Routes;
