import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';
import tennisCourt from '../../../tennis-court.png';
import lighting from '../../../light.png';
import indoorCourts from '../../../stadium.png';

const ClubDetailedCard = (props) => {
    const { club } = props;

    let firstLinkListElements = null;
    let secondListElements = null;
    if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
        firstLinkListElements = (
            <Card.Body className="p-0">
                <Button as={Link} to={`/tournament/create/${club._id}`}
                        variant="primary" className="m-3">
                    Create Tournament
                </Button>
                <Button as={Link} to={`/tournament/all/${club._id}`}
                        variant="primary" className="m-3">
                    Club Tournaments
                </Button>
            </Card.Body>
        );
        secondListElements = (
            <Card.Body className="p-0">
                <Button as={Link} to={{
                    pathname: `/club/update/${club._id}`,
                    state: {
                        club: club
                    }
                }} variant="primary" className="m-3">Update Club</Button>
                <Button as={Link} to={`/club/delete/${club._id}`}
                        variant="danger" className="m-3">
                    Delete Club
                </Button>
            </Card.Body>
        );
    }

    return (
        <CardDeck>
            <Card style={{ width: '35rem' }} className="m-5">
                <Card.Img variant="top" src={club.imageUrl} style={{ height: '35rem' }} />
            </Card>
            <Card style={{ width: '35rem' }} className="m-5">
                <Card.Body className="p-0 mt-5 text-center">
                    <Card.Title className="text-center">{club.title}</Card.Title>
                    <ListGroup className="list-group-club">
                        <ListGroupItem>City: {club.city}</ListGroupItem>
                        <ListGroupItem>Rank: {club.rank}</ListGroupItem>
                        <ListGroupItem>
                            <img src={tennisCourt} className="pr-3" alt="Courts:" />
                            {club.courts}
                        </ListGroupItem>
                        {club.hasLighting && <ListGroupItem>
                            <img src={lighting} className="pr-3" alt="Lights:" />
                            Lights
                        </ListGroupItem>}
                        {club.hasIndoorCourts && <ListGroupItem>
                            <img src={indoorCourts} className="pr-3" alt="Indoor Courts:" />
                            Indoor Courts
                        </ListGroupItem>}
                    </ListGroup>
                    <Card.Body className="mt-3">
                        {firstLinkListElements}
                        {secondListElements}
                    </Card.Body>
                </Card.Body>
            </Card>
        </CardDeck>
    );
};

export default ClubDetailedCard;
