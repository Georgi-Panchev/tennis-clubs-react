import { Component } from 'react';
import toastr from 'toastr';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';

class LeaveTournament extends Component {
    constructor(props) {
        super(props);

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_LEFT, this.leave);
    }

    leave = (data) => {
        console.log(data);
        if (!data.success) {
            toastr.error(data.message);
            this.props.history.push('/user/profile');
            return;
        }

        toastr.success(data.message);
        this.props.history.push('/user/profile');
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
