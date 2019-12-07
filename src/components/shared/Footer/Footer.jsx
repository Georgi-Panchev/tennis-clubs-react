import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => (
    <Navbar bg="primary" variant="dark" fixed="bottom">
        <Navbar.Brand className="mr-auto">Tennis</Navbar.Brand>
        <Navbar.Text className="mr-auto">Tennis Application</Navbar.Text>
        <Navbar.Brand>Tennis</Navbar.Brand>
    </Navbar>
);

export default Footer;

