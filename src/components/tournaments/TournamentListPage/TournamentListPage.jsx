import React, { Component } from 'react';
import TournamentCard from '../TournamentCard/TournamentCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';

class TournamentListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournamentList: [],
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENTS_FETCHED, this.all);
    }

    all = (data) => {
        console.log(data);
        this.setState({
            tournamentList: data.tournaments
        });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENTS_FETCHED, this.all);
    }

    componentDidMount() {
        tournamentActions.all();
    }

    getTournamentListElements() {
        if (this.state.tournamentList.length > 0) {
            return this.state.tournamentList
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }

        return 'No Tournaments available';
    }

    render() {
        const tournamentListElements = this.getTournamentListElements()
        return (
            <div>
                <h1>Tournament List Page</h1>
                {tournamentListElements}
            </div>
        );
    }
}

export default TournamentListPage;
