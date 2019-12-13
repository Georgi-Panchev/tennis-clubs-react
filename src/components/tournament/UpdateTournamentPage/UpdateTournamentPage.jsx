import React, { Component } from 'react';
import toastr from 'toastr';
import FormHelpers from '../../../utils/FormHelpers';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import TournamentForm from '../TournamentForm/TournamentForm';
import Validator from '../../../utils/Validator';
import { Col, Container, Row } from 'react-bootstrap';

class UpdateTournamentPage extends Component {
    constructor(props) {
        super(props);

        let tournament = '';
        if (this.props.location.state) {
            tournament = this.props.location.state.tournament;
        }
        const id = this.props.match.params.tournamentId;

        this.state = {
            id,
            tournament: {
                title: tournament.title,
                imageUrl: tournament.imageUrl,
                balls: tournament.balls,
                fee: tournament.fee
            },
            errors: {
                title: '',
                imageUrl: '',
                balls: '',
                fee: ''
            }
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_UPDATED, this.update);
    }

    update = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        const id = this.state.id;
        this.props.history.push(`/tournament/details/${id}`);
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_UPDATED, this.update);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'tournament');
    };

    updateTournament = (event) => {
        event.preventDefault();
        const tournament = this.state.tournament;

        if (!this.validateTournament(tournament)) {
            return;
        }

        console.log(tournament);
        const id = this.state.id;
        tournamentActions.update(id, tournament);
    };

    validateTournament(tournament) {
        return Validator.validateTournament.bind(this)(tournament, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className="text-primary text-center mt-3 mb-3">Update Tennis Tournament</h1>
                        <TournamentForm tournament={this.state.tournament} errors={this.state.errors}
                                        handleChange={this.handleChange} handleSubmit={this.updateTournament}
                                        buttonText="Update Tennis Tournament" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UpdateTournamentPage;

