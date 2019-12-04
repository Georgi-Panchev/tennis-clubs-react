import React, { Component } from 'react';
import toastr from 'toastr';
import CreateClubForm from '../CreateClubForm/CreateClubForm';
import FormHelpers from '../../../utils/FormHelpers';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';

class UpdateClubPage extends Component {
    constructor(props) {
        super(props);

        const { club } = this.props.location.state;

        this.state = {
            club: {
                title: club.title,
                imageUrl: club.imageUrl,
                city: club.city,
                rank: club.rank,
                courts: club.courts,
                hasLighting: club.hasLighting,
                hasIndoorCourts: club.hasIndoorCourts
            },
            errors: {
                title: '',
                imageUrl: '',
                city: '',
                rank: '',
                courts: '',
                hasLighting: '',
                hasIndoorCourts: ''
            }
        };

        clubStore.on(clubStore.eventTypes.CLUB_UPDATED, this.update);
    }

    update = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        this.props.history.push('/');
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUB_UPDATED, this.update);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'club');
    };

    updateClub = (event) => {
        event.preventDefault();
        const club = this.state.club;

        if (!this.validateClub(club)) {
            return;
        }

        console.log(club);
        const id = this.props.match.params.id;
        console.log(id)
        clubActions.update(id, club);
    };

    validateClub(club) {
        let isFormValid = true;
        let errors = {};
        if (!club.title || club.title.length < 3) {
            errors.title = 'Minimum 3 Symbols!';
            isFormValid = false;
        }

        this.setState({ errors: errors });
        return isFormValid;
    }

    render() {
        return (
            <div>
                <h1>Update Club</h1>
                <CreateClubForm club={this.state.club} errors={this.state.errors} buttonText="Update Club"
                                handleChange={this.handleChange} handleSubmit={this.updateClub} />
            </div>
        );
    }
}

export default UpdateClubPage;
