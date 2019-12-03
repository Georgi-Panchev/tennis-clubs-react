import React, { Component } from 'react';
import toastr from 'toastr';
import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';
import Auth from '../../../utils/Auth';

class AttendTournament extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     tournament: {}
        // };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_ATTENDED, this.attend);
    }

    attend = (data) => {
        console.log(data);
        if (!data.success) {
            toastr.error(data.message);
            this.props.history.push('/');
            return;
        }

        toastr.success(data.message);
        this.props.history.push('/');

        // this.setState({
        //     tournament: data.tournament
        // });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_ATTENDED, this.attend);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        tournamentActions.attend(id);
    }

    render() {
        return null;
    }
}

export default AttendTournament;
