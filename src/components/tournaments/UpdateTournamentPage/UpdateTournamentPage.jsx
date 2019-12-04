import React, { Component } from 'react';
import toastr from 'toastr';

import FormHelpers from '../../../utils/FormHelpers';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import CreateTournamentForm from '../CreateTournamentForm/CreateTournamentForm';

class UpdateTournamentPage extends Component {
    constructor(props) {
        super(props);

        const { tournament } = this.props.location.state;

        this.state = {
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
        this.props.history.push('/');
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
        const id = this.props.match.params.tournamentId;
        console.log(id)
        tournamentActions.update(id, tournament);
    };

    validateTournament(tournament) {
        let isFormValid = true;
        let errors = {};
        if (!tournament.title || tournament.title.length < 3) {
            errors.title = 'Minimum 3 Symbols!';
            isFormValid = false;
        }

        this.setState({ errors: errors });
        return isFormValid;
    }

    render() {
        return (
            <div>
                <h1>Update Tournament</h1>
                <CreateTournamentForm tournament={this.state.tournament} errors={this.state.errors} buttonText="Update Tournament"
                                      handleChange={this.handleChange} handleSubmit={this.updateTournament} />
            </div>
        );
    }
}

export default UpdateTournamentPage;
