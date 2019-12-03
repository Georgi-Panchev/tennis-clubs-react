import React, { Component } from 'react';
import toastr from 'toastr';
import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';
import Auth from '../../../utils/Auth';

class LeaveTournament extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     tournament: {}
        // };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_LEFT, this.leave);
    }

    leave = (data) => {
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
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_LEFT, this.leave);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        tournamentActions.leave(id);
    }

    render() {
        return null;
    }
}

export default LeaveTournament;
