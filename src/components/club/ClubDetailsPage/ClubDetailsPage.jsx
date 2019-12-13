import React, { Component } from 'react';
import ClubDetailedCard from '../ClubDetailedCard/ClubDetailedCard';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import { Col, Container, Row } from 'react-bootstrap';

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
        if (data.club) {
            this.setState({
                club: data.club
            });
        }
    };

    componentWillUnmount() {
        clubStore.off(clubStore.eventTypes.CLUB_DETAILS_FETCHED, this.byId);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        clubActions.byId(id);
    }

    render() {
        const title = this.state.club.title;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">{title} Club</h1>
                        <ClubDetailedCard club={this.state.club} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClubDetailsPage;

