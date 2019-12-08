import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import notFound from '../../../images/404-error.png';
import { Image } from 'react-bootstrap';

const NotFoundPage = () => (
    <Jumbotron className="text-center" style={{ height: '55rem' }}>
        <h1 className="text-danger mb-5">Page Not Found!</h1>
        <Image src={notFound} alt="404" />
    </Jumbotron>
);

export default NotFoundPage;
