import React, { Component } from 'react';
import ClubCard from '../ClubCard/ClubCard';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';

class ClubListPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clubList: [],
        };

        clubStore.on(clubStore.eventTypes.CLUBS_FETCHED, this.all);
    }

    all = (data) => {
        console.log(data);
        this.setState({
            clubList: data.clubs
        });
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUBS_FETCHED, this.all);
    }

    componentDidMount() {
        clubActions.all();
    }

    getClubListElements() {
        if (this.state.clubList.length > 0) {
            return this.state.clubList
                .map((club) => (
                    <ClubCard key={club._id} club={club} />
                ));
        }

        return 'No clubs available';
    }

    render() {
        const clubListElements = this.getClubListElements();
        return (
            <div>
                <h1>Club List Page</h1>
                {clubListElements}
            </div>
        );
    }
}

export default ClubListPage;
