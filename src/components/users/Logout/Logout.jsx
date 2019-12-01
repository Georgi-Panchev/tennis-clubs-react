import { Component } from 'react';
import toastr from 'toastr';
import Auth from '../../../utils/Auth';

class Logout extends Component {
    componentDidMount() {
        Auth.deauthenticateUser();
        Auth.removeUser();
        toastr.success('User Logged Out!');
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

export default Logout;
