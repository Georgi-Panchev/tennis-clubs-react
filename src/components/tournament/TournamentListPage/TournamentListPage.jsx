import React, { Component } from 'react';
import TournamentCard from '../TournamentCard/TournamentCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import { Button, CardColumns, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TournamentListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournamentList: null,
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENTS_FETCHED, this.all);
    }

    all = (data) => {
        console.log(data);
        this.setState({
            tournamentList: data.tournaments
        });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENTS_FETCHED, this.all);
    }

    componentDidMount() {
        tournamentActions.all();
    }

    getTournamentListElements() {
        const tournamentList = this.state.tournamentList;

        if (tournamentList && tournamentList.length > 0) {
            return tournamentList
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }
    }

    render() {
        const tournamentListElements = this.getTournamentListElements();
        const tournamentList = this.state.tournamentList;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">Tennis Tournaments</h1>
                        <CardColumns>
                            {tournamentListElements}
                        </CardColumns>
                        {tournamentList && tournamentList.length === 0 && <Jumbotron>
                            <h1>No Tournaments Available!</h1>
                            <Button as={Link} to={`/club/all`} variant="primary" className="m-3">
                                Tennis Clubs
                            </Button>
                        </Jumbotron>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TournamentListPage;

