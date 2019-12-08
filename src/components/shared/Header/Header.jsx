import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import userStore from '../../../state-management/stores/UserStore';
import { Nav, Navbar } from 'react-bootstrap';

class Header extends Component {
    constructor(props) {
        super(props);

        const username = Auth.getUser().username;
        const isUserLoggedIn = Auth.isUserAuthenticated();

        this.state = {
            username: username,
            isUserLoggedIn: isUserLoggedIn
        };

        userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.login);
        userStore.on(userStore.eventTypes.NAVBAR_UPDATED, this.updateNavbar);
    }

    login = (data) => {
        if (data.success) {
            this.setState({
                username: data.user.username
            });
        }
    };

    updateNavbar = (isUserLoggedIn) => {
        this.setState({
            isUserLoggedIn: isUserLoggedIn
        });
    };

    render() {
        let linkListElements = (
            <Nav>
                <Nav.Link as={Link} to="/user/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/user/login">Login</Nav.Link>
            </Nav>
        );
        let profileLinkElement = null;
        if (this.state.isUserLoggedIn) {
            linkListElements = (
                <Nav>
                    <Navbar.Text>Welcome, <span className="text-warning">{this.state.username}</span></Navbar.Text>
                    <Nav.Link as={Link} to="/user/logout">Logout</Nav.Link>
                </Nav>
            );
            profileLinkElement = <Nav.Link as={Link} to="/user/profile">User Profile</Nav.Link>;
        }

        let adminLinkElement = null;
        if (this.state.isUserLoggedIn && Auth.isUserAdmin()) {
            adminLinkElement = <Nav.Link as={Link} to="/club/create">Create Tennis Club</Nav.Link>;
        }

        return (
            <Navbar bg="primary" variant="dark" sticky="top">
                <Navbar.Brand as={Link} to="/">Tennis</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/club/all">Tennis Clubs</Nav.Link>
                    <Nav.Link as={Link} to="/tournament/all">Tennis Tournaments</Nav.Link>
                    {profileLinkElement}
                    {adminLinkElement}
                </Nav>
                <Nav>
                    {linkListElements}
                </Nav>
            </Navbar>
        );
    }
}

export default Header;
