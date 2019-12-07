import React, { Component } from 'react';
import toastr from 'toastr';
import ClubForm from '../ClubForm/ClubForm';
import FormHelpers from '../../../utils/FormHelpers';
import Validator from '../../../utils/Validator';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import { Col, Container, Row } from 'react-bootstrap';

class UpdateClubPage extends Component {
    constructor(props) {
        super(props);

        const { club } = this.props.location.state;
        const id = this.props.match.params.id;


        this.state = {
            id,
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
        const id = this.state.id;
        this.props.history.push(`/club/details/${id}`);
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
        const id = this.state.id;
        clubActions.update(id, club);
    };

    validateClub(club) {
        return Validator.validateClub.bind(this)(club, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className="text-primary text-center mt-3 mb-3">Update Tennis Club</h1>
                        <ClubForm club={this.state.club} errors={this.state.errors}
                                  handleChange={this.handleChange} handleSubmit={this.updateClub}
                                  buttonText="Update Tennis Club" />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UpdateClubPage;

