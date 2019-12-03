import React, { Component } from 'react';
import TournamentCard from '../../tournaments/TournamentCard/TournamentCard';
import userActions from '../../../state-management/actions/userActions';
import userStore from '../../../state-management/stores/UserStore';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profileTournamentList: [],
        };

        userStore.on(userStore.eventTypes.PROFILE_GOT, this.profile);
    }

    profile = (data) => {
        console.log(data);
        this.setState({
            profileTournamentList: data.tournaments
        });
    };

    componentWillUnmount() {
        userStore.off(userStore.eventTypes.PROFILE_GOT, this.profile);
    }

    componentDidMount() {
        userActions.getProfile();
    }

    getProfileTournamentListElements() {
        if (this.state.profileTournamentList.length > 0) {
            return this.state.profileTournamentList
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }

        return 'No Tournaments available';
    }

    render() {
        const profileTournamentListElements = this.getProfileTournamentListElements()
        return (
            <div>
                <h1>Profile Tournament List Page</h1>
                {profileTournamentListElements}
            </div>
        );
    }
}

export default ProfilePage;
