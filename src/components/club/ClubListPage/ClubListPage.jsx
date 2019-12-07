import React, { Component } from 'react';
import ClubCard from '../ClubCard/ClubCard';
import clubActions from '../../../state-management/actions/clubActions';
import clubStore from '../../../state-management/stores/ClubStore';
import { Button, CardColumns, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

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
    }

    render() {
        const clubListElements = this.getClubListElements();
        const clubList = this.state.clubList;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">Tennis Clubs</h1>
                        <CardColumns>
                            {clubListElements}
                        </CardColumns>
                        {clubList <= 0 && <Jumbotron>
                            <h1>No Clubs Available!</h1>
                            {Auth.isUserAdmin() &&
                            <Button as={Link} to={'/club/create'}
                                    variant="primary" className="m-3">
                                Create Club
                            </Button>}
                        </Jumbotron>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ClubListPage;

