import React, { Component } from 'react';
import TournamentCard from '../../tournament/TournamentCard/TournamentCard';
import userActions from '../../../state-management/actions/userActions';
import userStore from '../../../state-management/stores/UserStore';
import { Button, CardColumns, Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            profileTournamentList: [],
        };

        userStore.on(userStore.eventTypes.PROFILE_GOT, this.profile);
    }

    profile = (data) => {
        console.log(data);
        this.setState({
            profileTournamentList: data.tournaments
        });
    };

    componentWillUnmount() {
        userStore.off(userStore.eventTypes.PROFILE_GOT, this.profile);
    }

    componentDidMount() {
        userActions.getProfile();
    }

    getProfileTournamentListElements() {
        if (this.state.profileTournamentList.length > 0) {
            return this.state.profileTournamentList
                .map((tournament) => (
                    <TournamentCard key={tournament._id} tournament={tournament} />
                ));
        }
    }

    render() {
        const profileTournamentListElements = this.getProfileTournamentListElements();
        const profileTournamentList = this.state.profileTournamentList;

        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="12">
                        <h1 className="text-primary text-center mt-3 mb-3">My Attended Tournaments</h1>
                        <CardColumns>
                            {profileTournamentListElements}
                        </CardColumns>
                        {profileTournamentList <= 0 && <Jumbotron>
                            <h1>No Tournaments Attended!</h1>
                            <Button as={Link} to={`/tournament/all`}
                                    variant="primary" className="m-3">
                                Tennis Tournaments
                            </Button>
                        </Jumbotron>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ProfilePage;

