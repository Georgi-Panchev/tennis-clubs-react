import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import commentActions from '../actions/commentActions';
import CommentData from '../../services/CommentData';

class CommentStore extends EventEmitter {
    create(id, comment) {
        CommentData.create(id, comment)
            .then((data) => {
                this.emit(this.eventTypes.COMMENT_CREATED, data);
            });
    }

    all(id) {
        CommentData.all(id)
            .then((data) => {
                this.emit(this.eventTypes.COMMENTS_FETCHED, data);
            });
    }

    handleAction(action) {
        switch (action.type) {
            case commentActions.types.CREATE_COMMENT: {
                this.create(action.id, action.comment);
                break;
            }
            case commentActions.types.ALL_COMMENTS: {
                this.all(action.id);
                break;
            }
            default: break;
        }
    }
}

const commentStore = new CommentStore();

commentStore.eventTypes = {
    COMMENT_CREATED: 'comment_created',
    COMMENTS_FETCHED: 'comments_fetched'
};

dispatcher.register(commentStore.handleAction.bind(commentStore));

export default commentStore;
