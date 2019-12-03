import Service from './Service';

const midUrl = '/club';

class ClubService {
    static create(club) {
        return Service.post(`${midUrl}/create`, club, true);
    }

    static all() {
        return Service.get(`${midUrl}/all`);
    }

    static byId(id) {
        return Service.get(`${midUrl}/details/${id}`, true);
    }

    static update(id, club) {
        return Service.put(`${midUrl}/update/${id}`, club, true);
    }

    static delete(id) {
        return Service.delete(`${midUrl}/delete/${id}`, {}, true);
    }
}

export default ClubService;
