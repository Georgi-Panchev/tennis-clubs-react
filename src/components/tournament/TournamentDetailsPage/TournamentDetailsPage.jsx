import React, { Component } from 'react';
import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import { Col, Container, Row } from 'react-bootstrap';

class TournamentDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournament: {}
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_DETAILS_FETCHED, this.byId);
    }

    byId = (data) => {
        console.log(data);
        if (data.tournament) {
            this.setState({
                tournament: data.tournament
            });
        }
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_DETAILS_FETCHED, this.byId);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        tournamentActions.byId(id);
    }

    render() {
        const title = this.state.tournament.title;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">{title} Tournament</h1>
                        <TournamentDetailedCard tournament={this.state.tournament} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TournamentDetailsPage;


