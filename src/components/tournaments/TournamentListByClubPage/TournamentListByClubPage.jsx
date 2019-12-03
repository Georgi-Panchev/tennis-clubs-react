import React, { Component } from 'react';
import TournamentCard from '../TournamentCard/TournamentCard';
import tournamentActions from '../../../state-management/actions/tournamentActions';
import tournamentStore from '../../../state-management/stores/TournamentStore';

class TournamentListByClubPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tournamentListByClub: [],
        };

        tournamentStore.on(tournamentStore.eventTypes.TOURNAMENTS_BY_CLUB_FETCHED, this.allByClub);
    }

    allByClub = (data) => {
        console.log(data);
        this.setState({
            tournamentListByClub: data.tournaments
        });
    };

    componentWillUnmount() {
        tournamentStore.off(tournamentStore.eventTypes.TOURNAMENTS_BY_CLUB_FETCHED, this.allByClub);
    }

    componentDidMount() {
        const clubId = this.props.match.params.clubId;
        tournamentActions.allByClub(clubId);
    }

    getTournamentListByClubElements() {
        if (this.state.tournamentListByClub.length > 0) {
            return this.state.tournamentListByClub
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }

        return 'No Tournaments available';
    }

    render() {
        const tournamentListByClubElements = this.getTournamentListByClubElements()
        return (
            <div>
                <h1>Tournament List By Club Page</h1>
                {tournamentListByClubElements}
            </div>
        );
    }
}

export default TournamentListByClubPage;
