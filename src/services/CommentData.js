import Service from './Service';

const midUrl = '/clubs/details';

class CommentData {
    static create(id, comment) {
        return Service.post(`${midUrl}/${id}/comments/create`, comment,true);
    }

    static all(id) {
        return Service.get(`${midUrl}/${id}/comments`, true);
    }
}

export default CommentData;

