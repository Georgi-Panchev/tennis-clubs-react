import { Component } from 'react';
import toastr from 'toastr';
import Auth from '../../../utils/Auth';
import userActions from '../../../state-management/actions/userActions';

class Logout extends Component {
    componentDidMount() {
        Auth.deauthenticateUser();
        Auth.removeUser();
        toastr.success('User Logged Out!');

        const isUserLoggedIn = Auth.isUserAuthenticated();
        userActions.updateNavbar(isUserLoggedIn);

        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

export default Logout;
