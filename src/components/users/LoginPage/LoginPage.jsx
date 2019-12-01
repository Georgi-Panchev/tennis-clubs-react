import React, { Component } from 'react';
import toastr from 'toastr';
import LoginForm from '../LoginForm/LoginForm';
import Auth from '../../../utils/Auth'
import FormHelpers from '../../../utils/FormHelpers';
import userStore from '../../../flux/stores/UserStore';
import userActions from '../../../flux/actions/userActions';

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

        this.setState({ errors: errors });
        return isFormValid;
    }

    render() {
        return (
            <div>
                <h1>Login User</h1>
                <LoginForm user={this.state.user} errors={this.state.errors}
                           handleChange={this.handleChange} handleSubmit={this.loginUser} />
            </div>
        );
    }
}

export default LoginPage;
