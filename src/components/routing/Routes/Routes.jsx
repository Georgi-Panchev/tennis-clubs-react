import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserRoute from '../UserRoute/UserRoute';
import AdminRoute from '../AdminRoute/AdminRoute';

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
        <AdminRoute path="/club/create" component={CreateClubPage} />
        <UserRoute path="/club/details/:id" component={ClubDetailsPage} />
        <AdminRoute path="/club/update/:id" component={UpdateClubPage} />
        <AdminRoute path="/club/delete/:id" component={DeleteClub} />

        <AdminRoute path="/tournament/create/:clubId" component={CreateTournamentPage} />
        <AdminRoute path="/tournament/all/:clubId" component={TournamentListByClubPage} />
        <Route path="/tournament/all" component={TournamentListPage} />
        <UserRoute path="/tournament/details/:tournamentId" component={TournamentDetailsPage} />
        <UserRoute path="/tournament/attend/:tournamentId" component={AttendTournament} />
        <UserRoute path="/tournament/leave/:tournamentId" component={LeaveTournament} />
        <AdminRoute path="/tournament/update/:tournamentId" component={UpdateTournamentPage} />
        <AdminRoute path="/tournament/delete/:tournamentId" component={DeleteTournament} />

        <Route path="/user/register" component={RegisterPage} />
        <Route path="/user/login" component={LoginPage} />
        <UserRoute path="/user/logout" component={Logout} />
        <UserRoute path="/user/profile" component={ProfilePage} />

        <Route component={NotFoundPage} />
    </Switch>
);

export default Routes;
