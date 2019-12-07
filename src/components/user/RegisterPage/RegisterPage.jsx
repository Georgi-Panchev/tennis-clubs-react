import React, { Component } from 'react';
import toastr from 'toastr';
import RegisterForm from '../RegisterForm/RegisterForm';
import FormHelpers from '../../../utils/FormHelpers';
import Validator from '../../../utils/Validator';
import userActions from '../../../state-management/actions/userActions';
import userStore from '../../../state-management/stores/UserStore';
import { Col, Row, Container } from 'react-bootstrap';

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                password: '',
                confirmPassword: ''
            },
            errors: {
                email: '',
                password: '',
                passwords: ''
            }
        };

        userStore.on(userStore.eventTypes.USER_REGISTERED, this.register);
    }

    register = (data) => {
        console.log(data);
        if (!data.success) {
            return toastr.error(data.message);
        }

        toastr.success(data.message);
        this.props.history.push('/user/login');
    };

    componentWillUnmount() {
        userStore.off(userStore.eventTypes.USER_REGISTERED, this.register);
    }

    handleChange = (event) => {
        FormHelpers.handleFormChange.bind(this)(event, 'user');
    };

    registerUser = (event) => {
        event.preventDefault();
        const user = this.state.user;

        if (!this.validateUser(user)) {
            return;
        }

        console.log(user);
        userActions.register(user);
    };

    validateUser(user) {
        return Validator.validateRegistration.bind(this)(user, 'errors');
    }

    render() {
        return (
            <Container className="mb-5">
                <Row className="justify-content-md-center">
                    <Col xs lg="5">
                        <h1 className="text-primary text-center mt-3 mb-3">Register User</h1>
                        <RegisterForm user={this.state.user} errors={this.state.errors}
                                      handleChange={this.handleChange} handleSubmit={this.registerUser} />
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default RegisterPage;


