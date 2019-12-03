import React, { Component } from 'react';
import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';

class TournamentDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournament: {}
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENT_DETAILS_FETCHED, this.byId);
    }

    byId = (data) => {
        console.log(data);
        this.setState({
            tournament: data.tournament
        });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENT_DETAILS_FETCHED, this.byId);
    }

    componentDidMount() {
        const id = this.props.match.params.tournamentId;
        tournamentActions.byId(id);
    }

    render() {
        return (
            <div>
                <h1>Tournament Details Page</h1>
                <TournamentDetailedCard tournament={this.state.tournament} />
                {/*<CommentsPanel petId={this.state.id} />*/}
            </div>
        );
    }
}

export default TournamentDetailsPage;
