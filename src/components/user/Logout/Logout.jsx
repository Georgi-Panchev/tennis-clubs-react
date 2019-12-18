import { useEffect } from 'react';
import toastr from 'toastr';
import Auth from '../../../utils/Auth';
import userActions from '../../../state-management/actions/userActions';

const Logout = (props) => {
    useEffect(() => {
        Auth.deauthenticateUser();
        Auth.removeUser();
        toastr.success('User Logged Out!');

        const isUserLoggedIn = Auth.isUserAuthenticated();
        userActions.updateNavbar(isUserLoggedIn);

        props.history.push('/');
    });

    return null;
};

export default Logout;
