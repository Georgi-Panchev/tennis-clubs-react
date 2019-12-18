import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import userStore from '../../../state-management/stores/UserStore';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const username = Auth.getUser().username;
    const isUserLoggedIn = Auth.isUserAuthenticated();

    const [ state, setState ] = useState({
        username: username,
        isUserLoggedIn: isUserLoggedIn
    });

    const updateNavbar = (isUserLoggedIn, username) => {
        setState({
            username: username,
            isUserLoggedIn: isUserLoggedIn
        });
    };

    useMemo(() => {
        userStore.on(userStore.eventTypes.NAVBAR_UPDATED, updateNavbar);
    },[]);

    let linkListElements = (
        <Nav>
            <Nav.Link as={Link} to="/user/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/user/login">Login</Nav.Link>
        </Nav>
    );
    let profileLinkElement = null;
    if (state.isUserLoggedIn) {
        linkListElements = (
            <Nav>
                <Navbar.Text className="text-dark">Welcome, <span className="text-warning">{state.username}</span></Navbar.Text>
                <Nav.Link as={Link} to="/user/logout">Logout</Nav.Link>
            </Nav>
        );
        profileLinkElement = <Nav.Link as={Link} to="/user/profile">User Profile</Nav.Link>;
    }

    let adminLinkElement = null;
    if (state.isUserLoggedIn && Auth.isUserAdmin()) {
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
};

export default Header;
