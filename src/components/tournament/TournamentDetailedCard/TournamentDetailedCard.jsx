import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';
import { Button, Card, CardDeck, ListGroup, ListGroupItem } from 'react-bootstrap';
import ball from '../../../images/ball.png';

const TournamentDetailedCard = (props) => {
    const { tournament } = props;
    const userId = Auth.getUser().userId;

    let linkElement = (
        <Button as={Link} to={`/tournament/attend/${tournament._id}`}
                variant="success" className="mt-3 mb-3">
            Attend Tournament
        </Button>
    );
    if (Object.keys(tournament).length !== 0
        && tournament.playersRegistered.find((user) => user._id === userId)) {
        linkElement = (
            <Button as={Link} to={`/tournament/leave/${tournament._id}`}
                    variant="danger" className="mt-3 mb-3">
                Leave Tournament
            </Button>
        );
    }

    let linkListElements = null;
    if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
        linkListElements = (
            <Card.Body className="p-0">
                <Button as={Link} to={{
                    pathname: `/tournament/update/${tournament._id}`,
                    state: {
                        tournament: tournament
                    }
                }} variant="primary" className="m-3">Update Tournament</Button>
                <Button as={Link} to={`/tournament/delete/${tournament._id}`}
                        variant="danger" className="m-3">
                    Delete Tournament
                </Button>
            </Card.Body>
        );
    }

    let playersListElements = null;
    if (Object.keys(tournament).length !== 0) {
        playersListElements = tournament.playersRegistered
            .map((user, index) => (
                <ListGroupItem key={index}>{user.username}</ListGroupItem>
            ));
    }

    return (
        <CardDeck>
            <Card.Img className="m-5" variant="top" src={tournament.imageUrl}
                      style={{ height: '27rem', width: '20rem' }}/>
            <Card className="m-5">
                <Card.Body className="p-0 mt-3 text-center">
                    <Card.Title className="text-center">{tournament.title}</Card.Title>
                    <ListGroup className="list-group-club">
                        <ListGroupItem>
                            <img src={ball} className="pr-3" alt="Balls:" />
                            {tournament.balls}
                        </ListGroupItem>
                        <ListGroupItem>Fee: {tournament.fee} $</ListGroupItem>
                    </ListGroup>
                    <Card.Body className="mt-3">
                        {linkElement}
                        {linkListElements}
                    </Card.Body>
                </Card.Body>
            </Card>
            <Card className="m-5">
                <Card.Body className="p-0 mt-3 text-center">
                    <Card.Title>Players Attended</Card.Title>
                    <ListGroup className="list-group-club">
                        {playersListElements}
                    </ListGroup>
                </Card.Body>
            </Card>
        </CardDeck>
    );
};

export default TournamentDetailedCard;
