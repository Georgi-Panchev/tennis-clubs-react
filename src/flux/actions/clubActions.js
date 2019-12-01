import dispatcher from '../dispatcher';

const clubActions = {
    types: {
        CREATE_CLUB: 'CREATE_CLUB',
        ALL_CLUBS: 'ALL_CLUBS',
        CLUB_DETAILS: 'CLUB_DETAILS'
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
    }
};

export default clubActions;
