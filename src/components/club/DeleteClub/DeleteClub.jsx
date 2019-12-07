import { Component } from 'react';
import toastr from 'toastr';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';

class DeleteClub extends Component {
    constructor(props) {
        super(props);

        clubStore.on(clubStore.eventTypes.CLUB_DELETED, this.delete);
    }

    delete = (data) => {
        console.log(data);
        if (!data.success) {
            toastr.error(data.message);
            this.props.history.push('/club/all');
            return;
        }

        toastr.success(data.message);
        this.props.history.push('/club/all');
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
