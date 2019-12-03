import React, { Component } from 'react';
import toastr from 'toastr';
import CreateTournamentForm from '../CreateTournamentForm/CreateTournamentForm';
import FormHelpers from '../../../utils/FormHelpers';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';

class CreateTournamentPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        this.props.history.push('/');
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
        const clubId = this.props.match.params.clubId;
        tournamentActions.create(clubId, tournament);
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
                <h1>Create Tournament</h1>
                <CreateTournamentForm tournament={this.state.tournament} errors={this.state.errors}
                                      handleChange={this.handleChange} handleSubmit={this.createTournament} />
            </div>
        );
    }
}

export default CreateTournamentPage;
