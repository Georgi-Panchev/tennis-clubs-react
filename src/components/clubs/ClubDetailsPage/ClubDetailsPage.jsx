import React, { Component } from 'react';
import ClubDetailedCard from '../ClubDetailedCard/ClubDetailedCard';
import clubActions from '../../../flux/actions/clubActions';
import petStore from '../../../flux/stores/ClubStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';

class ClubDetailsPage extends Component {
    constructor(props) {
        super(props);

        const id = this.props.match.params.id;

        this.state = {
            id,
            pet: {}
        };

        petStore.on(petStore.eventTypes.PET_DETAILS_FETCHED, this.byId);
    }

    byId = (data) => {
        this.setState({
            pet: data
        });
    };

    componentWillUnmount() {
        petStore.off(petStore.eventTypes.PET_DETAILS_FETCHED, this.byId);
    }

    componentDidMount() {
        clubActions.byId(this.state.id);
    }

    render() {
        return (
            <div>
                <h1>Pet Details Page</h1>
                <ClubDetailedCard pet={this.state.pet} />
                <CommentsPanel petId={this.state.id} />
            </div>
        );
    }
}

export default ClubDetailsPage;
