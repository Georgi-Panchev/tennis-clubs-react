import React from 'react';
import { Switch, Route } from 'react-router-dom';

import UserRoute from '../UserRoute/UserRoute';
import AdminRoute from '../AdminRoute/AdminRoute';

import ClubListPage from '../../clubs/ClubListPage/ClubListPage';
import CreateClubPage from '../../clubs/CreateClubPage/CreateClubPage';
import ClubDetailsPage from '../../clubs/ClubDetailsPage/ClubDetailsPage';

import CreateTournamentPage from '../../tournaments/CreateTournamentPage/CreateTournamentPage';

import RegisterPage from '../../users/RegisterPage/RegisterPage';
import LoginPage from '../../users/LoginPage/LoginPage';
import Logout from '../../users/Logout/Logout';
import ProfilePage from '../../users/ProfilePage/ProfilePage';
import UpdateClubPage from '../../clubs/UpdateClubPage/UpdateClubPage';
import DeleteClub from '../../clubs/DeleteClub/DeleteClub';

import TournamentListByClubPage from '../../tournaments/TournamentListByClubPage/TournamentListByClubPage';
import TournamentDetailsPage from '../../tournaments/TournamentDetailsPage/TournamentDetailsPage';
import TournamentListPage from '../../tournaments/TournamentListPage/TournamentListPage';
import AttendTournament from '../../tournaments/AttendTournament/AttendTournament';
import LeaveTournament from '../../tournaments/LeaveTournament/LeaveTournament';
import UpdateTournamentPage from '../../tournaments/UpdateTournamentPage/UpdateTournamentPage';
import DeleteTournament from '../../tournaments/DeleteTournament/DeleteTournament';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={ClubListPage} />
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
