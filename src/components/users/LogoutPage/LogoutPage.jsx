import { Component } from 'react';
import Auth from '../../../utils/Auth';

class LogoutPage extends Component {
    componentDidMount() {
        Auth.deauthenticateUser();
        this.props.history.push('login');
    }

    render() {
        return null;
    }
}

export default LogoutPage;
