import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const ClubCard = (props) => {
    const { club } = props;

    let linkElement = null;
    if (Auth.isUserAuthenticated()) {
        linkElement = (
            <Button as={Link} to={`/club/details/${club._id}`}
                    variant="primary" className="mt-3 mb-3">
                Details
            </Button>
        );
    }

    return (
        <Card style={{ width: '15rem' }} className="m-5">
            <Card.Img variant="top" src={club.imageUrl} style={{ height: '15rem' }} />
            <Card.Body className="p-0 pt-2 text-center">
                <Card.Title className="text-center">{club.title}</Card.Title>
                <ListGroup className="list-group-club">
                    <ListGroupItem>City: {club.city}</ListGroupItem>
                </ListGroup>
                {linkElement}
            </Card.Body>
        </Card>
    );

};

export default ClubCard;
