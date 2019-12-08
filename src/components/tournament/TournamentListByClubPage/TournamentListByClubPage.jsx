import React, { Component } from 'react';
import TournamentCard from '../TournamentCard/TournamentCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import { Button, CardColumns, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TournamentListByClubPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournamentListByClub: null,
            clubTitle: '',
            clubId: ''
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENTS_BY_CLUB_FETCHED, this.allByClub);
    }

    allByClub = (data) => {
        console.log(data);
        this.setState({
            tournamentListByClub: data.tournaments,
            clubTitle: data.club.title,
            clubId: data.club._id
        });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENTS_BY_CLUB_FETCHED, this.allByClub);
    }

    componentDidMount() {
        const clubId = this.props.match.params.clubId;
        tournamentActions.allByClub(clubId);
    }

    getTournamentListByClubElements() {
        const tournamentListByClub = this.state.tournamentListByClub;

        if (tournamentListByClub && tournamentListByClub.length > 0) {
            return tournamentListByClub
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }
    }

    render() {
        const tournamentListByClubElements = this.getTournamentListByClubElements();
        const clubTitle = this.state.clubTitle;
        const clubId = this.state.clubId;
        const tournamentListByClub = this.state.tournamentListByClub;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">{clubTitle} Tournaments</h1>
                        <CardColumns>
                            {tournamentListByClubElements}
                        </CardColumns>
                        {tournamentListByClub && tournamentListByClub.length === 0 && <Jumbotron>
                            <h1>No Tournaments Available!</h1>
                            <Button as={Link} to={`/tournament/create/${clubId}`}
                                    variant="primary" className="m-3">
                                Create Tournament
                            </Button>
                        </Jumbotron>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TournamentListByClubPage;
