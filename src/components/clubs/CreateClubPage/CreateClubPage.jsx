import React, { Component } from 'react';
import toastr from 'toastr';
import CreateClubForm from '../CreateClubForm/CreateClubForm';
import FormHelpers from '../../../utils/FormHelpers';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';

class CreateClubPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            club: {
                title: '',
                imageUrl: '',
                city: '',
                rank: '',
                courts: 0,
                hasLighting: false,
                hasIndoorCourts: false
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

        clubStore.on(clubStore.eventTypes.CLUB_CREATED, this.create);
    }

    create = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        this.props.history.push('/');
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUB_CREATED, this.create);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'club');
    };

    createClub = (event) => {
        event.preventDefault();
        const club = this.state.club;

        if (!this.validateClub(club)) {
            return;
        }

        console.log(club);
        clubActions.create(club);
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
                <h1>Create Club</h1>
                <CreateClubForm club={this.state.club} errors={this.state.errors}
                                handleChange={this.handleChange} handleSubmit={this.createClub} />
            </div>
        );
    }
}

export default CreateClubPage;
