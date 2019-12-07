import { Component } from 'react';
import toastr from 'toastr';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import tournamentActions from '../../../state-management/actions/tournamentActions';

class DeleteTournament extends Component {
    constructor(props) {
        super(props);

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_DELETED, this.delete);
    }

    delete = (data) => {
        console.log(data);
        if (!data.success) {
            toastr.error(data.message);
            this.props.history.push('/tournament/all');
            return;
        }

        toastr.success(data.message);
        this.props.history.push('/tournament/all');
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_DELETED, this.delete);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        tournamentActions.delete(id);
    }

    render() {
        return null;
    }
}

export default DeleteTournament;
