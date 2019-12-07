import React, { Component } from 'react';
import toastr from 'toastr';
import TournamentForm from '../TournamentForm/TournamentForm';
import FormHelpers from '../../../utils/FormHelpers';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import Validator from '../../../utils/Validator';
import { Col, Container, Row } from 'react-bootstrap';

class CreateTournamentPage extends Component {
    constructor(props) {
        super(props);

        const clubId = this.props.match.params.clubId;

        this.state = {
            clubId,
            tournament: {
                title: '',
                imageUrl: '',
                balls: '',
                fee: 0
            },
            errors: {
                title: '',
                imageUrl: '',
                balls: '',
                fee: ''
            }
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_CREATED, this.create);
    }

    create = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        const clubId = this.state.clubId;
        this.props.history.push(`/tournament/all/${clubId}`);
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_CREATED, this.create);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'tournament');
    };

    createTournament = (event) => {
        event.preventDefault();
        const tournament = this.state.tournament;

        if (!this.validateTournament(tournament)) {
            return;
        }

        console.log(tournament);
        const clubId = this.state.clubId;
        tournamentActions.create(clubId, tournament);
    };

    validateTournament(tournament) {
        return Validator.validateTournament.bind(this)(tournament, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className="text-primary text-center mt-3 mb-3">Create Tennis Tournament</h1>
                        <TournamentForm tournament={this.state.tournament} errors={this.state.errors}
                                        handleChange={this.handleChange} handleSubmit={this.createTournament}
                                        buttonText="Create Tennis Tournament" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default CreateTournamentPage;

