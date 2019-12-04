import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import userStore from '../../../state-management/stores/UserStore';

class Header extends Component {
    constructor(props) {
        super(props);

        const username = Auth.getUser().username;

        this.state = {
            username: username
        };

        userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.login);
    }

    login = (data) => {
        if (data.success) {
            this.setState({
                username: data.user.username
            });
        }
    };

    render() {
        let linkListElements = (
            <React.Fragment>
                <Link to="/user/register">Register</Link>
                <Link to="/user/login">Login</Link>
            </React.Fragment>
        );

        if (Auth.isUserAuthenticated()) {
            linkListElements = (
                <React.Fragment>
                    <Link to="/user/logout">Logout</Link>
                    <Link to="/user/profile">Profile</Link>
                    <span>{this.state.username}</span>
                </React.Fragment>
            );
        }

        if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
            linkListElements = (
                <React.Fragment>
                    <Link to="/user/logout">Logout</Link>
                    <Link to="/club/create">Create Club</Link>
                    <span>{this.state.username}</span>
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <Link to="/">ClubList</Link>
                <Link to="/tournament/all">All Tournaments</Link>
                {linkListElements}
            </React.Fragment>
        );
    }
}

export default Header;
