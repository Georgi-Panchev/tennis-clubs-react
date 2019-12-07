import dispatcher from '../dispatcher';

const userActions = {
    types: {
        REGISTER_USER: 'REGISTER_USER',
        LOGIN_USER: 'LOGIN_USER',
        GET_PROFILE: 'GET_PROFILE',
        UPDATE_NAVBAR: 'UPDATE_NAVBAR'
    },

    register(user) {
        dispatcher.dispatch({
            type: this.types.REGISTER_USER,
            user
        });
    },

    login(user) {
        dispatcher.dispatch({
            type: this.types.LOGIN_USER,
            user
        });
    },

    getProfile() {
        dispatcher.dispatch({
            type: this.types.GET_PROFILE
        });
    },

    updateNavbar(isUserLoggedIn) {
        dispatcher.dispatch({
            type: this.types.UPDATE_NAVBAR,
            isUserLoggedIn
        });
    }
};

export default userActions;
