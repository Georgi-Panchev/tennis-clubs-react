import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const TournamentCard = (props) => {
    const { tournament } = props;

    let linkElement = null;
    if (Auth.isUserAuthenticated()) {
        linkElement = (
            <Button as={Link} to={`/tournament/details/${tournament._id}`}
                    variant="primary" className="mt-3 mb-3">
                Details
            </Button>
        );
    }

    return (
        <Card style={{ width: '15rem' }} className="m-5">
            <Card.Img variant="top" src={tournament.imageUrl} style={{ height: '15rem' }} />
            <Card.Body className="p-0 pt-2 text-center">
                <Card.Title className="text-center">{tournament.title}</Card.Title>
                {tournament.club.title &&
                <ListGroup className="list-group-club">
                    <ListGroupItem>Club: {tournament.club.title}</ListGroupItem>
                </ListGroup>}
                {linkElement}
            </Card.Body>
        </Card>
    );
};

export default TournamentCard;
