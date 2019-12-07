import { Component } from 'react';
import toastr from 'toastr';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';

class AttendTournament extends Component {
    constructor(props) {
        super(props);

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_ATTENDED, this.attend);
    }

    attend = (data) => {
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
