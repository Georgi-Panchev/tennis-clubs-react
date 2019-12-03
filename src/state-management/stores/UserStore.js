import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import userActions from '../actions/userActions';
import UserService from '../../services/UserService';

class UserStore extends EventEmitter {
    register(user) {
        UserService.register(user)
            .then((data) => {
                this.emit(this.eventTypes.USER_REGISTERED, data);
            });
    }

    login(user) {
        UserService.login(user)
            .then((data) => {
                this.emit(this.eventTypes.USER_LOGGED_IN, data);
            });
    }

    getProfile() {
        UserService.getProfile()
            .then((data) => {
                this.emit(this.eventTypes.PROFILE_GOT, data);
            });
    }

    handleAction(action) {
        switch (action.type) {
            case userActions.types.REGISTER_USER: {
                this.register(action.user);
                break;
            }
            case userActions.types.LOGIN_USER: {
                this.login(action.user);
                break;
            }
            case userActions.types.GET_PROFILE: {
                this.getProfile();
                break;
            }
            default: break;
        }
    }
}

const userStore = new UserStore();

userStore.eventTypes = {
    USER_REGISTERED: 'user_registered',
    USER_LOGGED_IN: 'user_logged_in',
    PROFILE_GOT: 'profile_got'
};

dispatcher.register(userStore.handleAction.bind(userStore));

export default userStore;
