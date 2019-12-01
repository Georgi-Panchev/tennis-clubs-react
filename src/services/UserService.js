import Service from './Service';

const midUrl = '/user';

class UserService {
    static register(user) {
        return Service.post(`${midUrl}/register`, user);
    }

    static login(user) {
        return Service.post(`${midUrl}/login`, user);
    }
}

export default UserService;
