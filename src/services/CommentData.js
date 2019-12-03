import Data from './Service';

const midUrl = '/pets/details';

class CommentData {
    static create(id, comment) {
        return Data.post(`${midUrl}/${id}/comments/create`, comment,true);
    }

    static all(id) {
        return Data.get(`${midUrl}/${id}/comments`, true);
    }
}

export default CommentData;
