import React, { Component } from 'react';
import toastr from 'toastr';
import ClubForm from '../ClubForm/ClubForm';
import FormHelpers from '../../../utils/FormHelpers';
import Validator from '../../../utils/Validator';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import { Col, Container, Row } from 'react-bootstrap';

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
        this.props.history.push('/club/all');
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
        return Validator.validateClub.bind(this)(club, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <h1 className="text-primary text-center mt-3 mb-3">Create Tennis Club</h1>
                        <ClubForm club={this.state.club} errors={this.state.errors}
                                  handleChange={this.handleChange} handleSubmit={this.createClub}
                                  buttonText="Create Tennis Club" />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default CreateClubPage;
