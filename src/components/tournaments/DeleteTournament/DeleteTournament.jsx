import React, { Component } from 'react';
import toastr from 'toastr';
//import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';
import Auth from '../../../utils/Auth';
import tournamentActions from '../../../state-management/actions/tournamentActions';

class DeleteTournament extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     tournament: {}
        // };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_DELETED, this.delete);
    }

    delete = (data) => {
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
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_DELETED, this.delete);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        console.log(id)
        tournamentActions.delete(id);
    }

    render() {
        return null;
    }
}

export default DeleteTournament;
