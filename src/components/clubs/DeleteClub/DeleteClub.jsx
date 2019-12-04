import React, { Component } from 'react';
import toastr from 'toastr';
//import TournamentDetailedCard from '../TournamentDetailedCard/TournamentDetailedCard';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import CommentsPanel from '../../comments/CommentsPanel/CommentsPanel';
import Auth from '../../../utils/Auth';

class DeleteClub extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     tournament: {}
        // };

        clubStore.on(clubStore.eventTypes.CLUB_DELETED, this.delete);
    }

    delete = (data) => {
        console.log(data);
        if (!data.success) {
            toastr.error(data.message);
            this.props.history.push('/');
            return;
        }

        toastr.success(data.message);
        this.props.history.push('/');

        // this.setState({
        //     tournament: data.tournament
        // });
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUB_DELETED, this.delete);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        clubActions.delete(id);
    }

    render() {
        return null;
    }
}

export default DeleteClub;
