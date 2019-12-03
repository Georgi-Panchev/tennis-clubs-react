import Service from './Service';

const midUrl = '/tournament';

class TournamentService {
    static create(clubId, tournament) {
        return Service.post(`${midUrl}/create/${clubId}`, tournament, true);
    }

    static allByClub(clubId) {
        return Service.get(`${midUrl}/all/${clubId}`, true);
    }

    static all() {
        return Service.get(`${midUrl}/all`, true);
    }

    static byId(id) {
        return Service.get(`${midUrl}/details/${id}`, true);
    }

    static attend(id) {
        return Service.put(`${midUrl}/attend/${id}`, {}, true);
    }

    static leave(id) {
        return Service.put(`${midUrl}/leave/${id}`, {}, true);
    }

    static update(id, tournament) {
        return Service.put(`${midUrl}/update/${id}`, tournament, true);
    }

    static delete(id) {
        return Service.delete(`${midUrl}/delete/${id}`, {}, true);
    }
}

export default TournamentService;
