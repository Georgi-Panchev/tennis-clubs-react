import Service from './Service';

const midUrl = '/club';

class ClubService {
    static create(club) {
        console.log(club)
        return Service.post(`${midUrl}/create`, club,true);
    }

    static all(page = 1) {
        return Service.get(`${midUrl}/all?page=${page}`);
    }

    static byId(id) {
        return Service.get(`${midUrl}/details/${id}`, true);
    }
}

export default ClubService;
