import dispatcher from '../dispatcher';

const tournamentActions = {
    types: {
        CREATE_TOURNAMENT: 'CREATE_TOURNAMENT',
        ALL_TOURNAMENTS_BY_CLUB: 'ALL_TOURNAMENTS_BY_CLUB',
        ALL_TOURNAMENTS: 'ALL_TOURNAMENTS',
        TOURNAMENT_DETAILS: 'TOURNAMENT_DETAILS',
        ATTEND_TOURNAMENT: 'ATTEND_TOURNAMENT',
        LEAVE_TOURNAMENT: 'LEAVE_TOURNAMENT',
        UPDATE_TOURNAMENT: 'UPDATE_TOURNAMENT',
        DELETE_TOURNAMENT: 'DELETE_TOURNAMENT'
    },

    create(clubId, tournament) {
        dispatcher.dispatch({
            type: this.types.CREATE_TOURNAMENT,
            clubId,
            tournament
        });
    },

    allByClub(clubId) {
        dispatcher.dispatch({
            type: this.types.ALL_TOURNAMENTS_BY_CLUB,
            clubId
        });
    },

    all() {
        dispatcher.dispatch({
            type: this.types.ALL_TOURNAMENTS
        });
    },

    byId(id) {
        dispatcher.dispatch({
            type: this.types.TOURNAMENT_DETAILS,
            id
        });
    },

    attend(id) {
        dispatcher.dispatch({
            type: this.types.ATTEND_TOURNAMENT,
            id
        });
    },

    leave(id) {
        dispatcher.dispatch({
            type: this.types.LEAVE_TOURNAMENT,
            id
        });
    },

    update(id, tournament) {
        dispatcher.dispatch({
            type: this.types.UPDATE_TOURNAMENT,
            id,
            tournament
        });
    },

    delete(id) {
        dispatcher.dispatch({
            type: this.types.DELETE_TOURNAMENT,
            id
        });
    }
};

export default tournamentActions;
