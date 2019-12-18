import React, { Component } from 'react';
import toastr from 'toastr';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../../utils/Auth'
import FormHelpers from '../../../utils/FormHelpers';
import Validator from '../../../utils/Validator';
import userStore from '../../../state-management/stores/UserStore';
import userActions from '../../../state-management/actions/userActions';
import { Col, Container, Row } from 'react-bootstrap';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: ''
            },
            errors: {
                username: '',
                password: ''
            }
        };

        userStore.on(userStore.eventTypes.USER_LOGGED_IN, this.login);
    }

    login = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        Auth.authenticateUser(data.token);
        Auth.saveUser(data.user);
        toastr.success(data.message);

        const isUserLoggedIn = Auth.isUserAuthenticated();
        const username = data.user.username;
        userActions.updateNavbar(isUserLoggedIn, username);

        this.props.history.push('/');
    };

    componentWillUnmount() {
        userStore.off(userStore.eventTypes.USER_LOGGED_IN, this.login);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'user');
    };

    loginUser = (event) => {
        event.preventDefault();
        const user = this.state.user;

        if (!this.validateUser(user)) {
            return;
        }

        console.log(user);
        userActions.login(user);
    };

    validateUser(user) {
        return Validator.validateLogin.bind(this)(user, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <h1 className="text-primary text-center mt-3 mb-3">Login User</h1>
                        <LoginForm user={this.state.user} errors={this.state.errors}
                                   handleChange={this.handleChange} handleSubmit={this.loginUser} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default LoginPage;

