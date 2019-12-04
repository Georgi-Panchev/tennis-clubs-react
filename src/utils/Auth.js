class Auth {
    static authenticateUser(token) {
        window.localStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return window.localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        window.localStorage.removeItem('token');
    }

    static getToken() {
        return window.localStorage.getItem('token');
    }

    static saveUser(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }

    static getUser() {
        const userJson = window.localStorage.getItem('user');
        if (userJson) {
            return JSON.parse(userJson);
        }

        return {};
    }

    static isUserAdmin() {
        let user = this.getUser();
        if (Object.keys(user).length > 0) {
            return user.roles.includes('Admin');
        }

        return false;
    }

    static removeUser() {
        window.localStorage.removeItem('user');
    }
}

export default Auth;
