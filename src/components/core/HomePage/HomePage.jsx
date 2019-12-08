import React from 'react';
import { Image, Jumbotron } from 'react-bootstrap';
import homeImage from '../../../images/grigor-dimitrov-tennis-player.jpg'

const HomePage = () => (
    <Jumbotron>
        <h1 className="text-success">Hello, Tennis Players!</h1>
        <p>Start playing tennis tournaments now!</p>
        <Image src={homeImage} fluid alt="Home Page" />
    </Jumbotron>
);

export default HomePage;
