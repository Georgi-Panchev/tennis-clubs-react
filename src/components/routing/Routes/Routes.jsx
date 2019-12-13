import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute/PrivateRoute';

import HomePage from '../../core/HomePage/HomePage';

import ClubListPage from '../../club/ClubListPage/ClubListPage';
import CreateClubPage from '../../club/CreateClubPage/CreateClubPage';
import ClubDetailsPage from '../../club/ClubDetailsPage/ClubDetailsPage';
import UpdateClubPage from '../../club/UpdateClubPage/UpdateClubPage';
import DeleteClub from '../../club/DeleteClub/DeleteClub';

import CreateTournamentPage from '../../tournament/CreateTournamentPage/CreateTournamentPage';
import TournamentListByClubPage from '../../tournament/TournamentListByClubPage/TournamentListByClubPage';
import TournamentDetailsPage from '../../tournament/TournamentDetailsPage/TournamentDetailsPage';
import TournamentListPage from '../../tournament/TournamentListPage/TournamentListPage';
import AttendTournament from '../../tournament/AttendTournament/AttendTournament';
import LeaveTournament from '../../tournament/LeaveTournament/LeaveTournament';
import UpdateTournamentPage from '../../tournament/UpdateTournamentPage/UpdateTournamentPage';
import DeleteTournament from '../../tournament/DeleteTournament/DeleteTournament';

import RegisterPage from '../../user/RegisterPage/RegisterPage';
import LoginPage from '../../user/LoginPage/LoginPage';
import Logout from '../../user/Logout/Logout';
import ProfilePage from '../../user/ProfilePage/ProfilePage';

import NotFoundPage from '../../core/NotFoundPage/NotFoundPage';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/club/all" component={ClubListPage} />
        <PrivateRoute path="/club/create" component={CreateClubPage} role="admin" />
        <PrivateRoute path="/club/details/:id" component={ClubDetailsPage} role="user" />
        <PrivateRoute path="/club/update/:id" component={UpdateClubPage} role="admin" />
        <PrivateRoute path="/club/delete/:id" component={DeleteClub} role="admin" />

        <PrivateRoute path="/tournament/create/:clubId" component={CreateTournamentPage} role="admin" />
        <PrivateRoute path="/tournament/all/:clubId" component={TournamentListByClubPage} role="admin" />
        <Route path="/tournament/all" component={TournamentListPage} />
        <PrivateRoute path="/tournament/details/:tournamentId" component={TournamentDetailsPage} role="user"/>
        <PrivateRoute path="/tournament/attend/:tournamentId" component={AttendTournament} role="user" />
        <PrivateRoute path="/tournament/leave/:tournamentId" component={LeaveTournament} role="user" />
        <PrivateRoute path="/tournament/update/:tournamentId" component={UpdateTournamentPage} role="admin" />
        <PrivateRoute path="/tournament/delete/:tournamentId" component={DeleteTournament} role="admin" />

        <PrivateRoute path="/user/register" component={RegisterPage} role="guest" page="/" />
        <PrivateRoute path="/user/login" component={LoginPage} role="guest" page="/" />
        <PrivateRoute path="/user/logout" component={Logout} role="user" />
        <PrivateRoute path="/user/profile" component={ProfilePage} role="user" />

        <Route component={NotFoundPage} />
    </Switch>
);

export default Routes;
