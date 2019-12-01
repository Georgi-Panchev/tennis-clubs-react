import React, { Component } from 'react';
import toastr from 'toastr';
import RegisterForm from '../RegisterForm/RegisterForm';
import FormHelpers from '../../../utils/FormHelpers';
import userActions from '../../../flux/actions/userActions';
import userStore from '../../../flux/stores/UserStore';

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
        let isFormValid = true;
        let errors = {};
        if (!user.username || user.username.length < 3 || user.username.length > 10) {
            errors.username = 'Username must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        if (!user.password || user.password.length < 3 || user.password.length > 10) {
            errors.password = 'Password must be between 3 and 10 characters long!';
            isFormValid = false;
        }

        if (user.password !== user.confirmPassword) {
            errors.passwords = 'Passwords do not match!';
            isFormValid = false;
        }

        this.setState({ errors: errors });
        return isFormValid;
    }

    render() {
        return (
            <div>
                <h1>Register User</h1>
                <RegisterForm user={this.state.user} errors={this.state.errors}
                              handleChange={this.handleChange} handleSubmit={this.registerUser} />
            </div>
        );
    }
}

export default RegisterPage;
