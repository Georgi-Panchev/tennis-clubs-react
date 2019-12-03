import dispatcher from '../dispatcher';

const commentActions = {
    types: {
        CREATE_COMMENT: 'CREATE_COMMENT',
        ALL_COMMENTS: 'ALL_COMMENTS'
    },

    create(id, comment) {
        dispatcher.dispatch({
            type: this.types.CREATE_COMMENT,
            id,
            comment
        });
    },

    all(id) {
        dispatcher.dispatch({
            type: this.types.ALL_COMMENTS,
            id
        });
    }
};

export default commentActions;
