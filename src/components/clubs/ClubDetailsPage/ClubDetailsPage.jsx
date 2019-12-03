import React, { Component } from 'react';
import ClubDetailedCard from '../ClubDetailedCard/ClubDetailedCard';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';

class ClubDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            club: {}
        };

        clubStore.on(clubStore.eventTypes.CLUB_DETAILS_FETCHED, this.byId);
    }

    byId = (data) => {
        console.log(data);
        this.setState({
            club: data.club
        });
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUB_DETAILS_FETCHED, this.byId);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        clubActions.byId(id);
    }

    render() {
        return (
            <div>
                <h1>Club Details Page</h1>
                <ClubDetailedCard club={this.state.club} />
                {/*<CommentsPanel petId={this.state.id} />*/}
            </div>
        );
    }
}

export default ClubDetailsPage;
