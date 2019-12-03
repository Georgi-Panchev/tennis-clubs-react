import dispatcher from '../dispatcher';

const clubActions = {
    types: {
        CREATE_CLUB: 'CREATE_CLUB',
        ALL_CLUBS: 'ALL_CLUBS',
        CLUB_DETAILS: 'CLUB_DETAILS',
        UPDATE_CLUB: 'UPDATE_CLUB',
        DELETE_CLUB: 'DELETE_CLUB'
    },

    create(club) {
        dispatcher.dispatch({
            type: this.types.CREATE_CLUB,
            club
        });
    },

    all() {
        dispatcher.dispatch({
            type: this.types.ALL_CLUBS
        });
    },

    byId(id) {
        dispatcher.dispatch({
            type: this.types.CLUB_DETAILS,
            id
        });
    },

    update(id, club) {
        dispatcher.dispatch({
            type: this.types.UPDATE_CLUB,
            id,
            club
        });
    },

    delete(id) {
        dispatcher.dispatch({
            type: this.types.DELETE_CLUB,
            id
        });
    }
};

export default clubActions;
