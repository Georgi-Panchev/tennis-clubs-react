import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import tournamentActions from '../actions/tournamentActions';
import TournamentService from '../../services/TournamentService';
import clubActions from '../actions/clubActions';
import ClubService from '../../services/ClubService';

class TournamentStore extends EventEmitter {
    create(clubId, tournament) {
        TournamentService.create(clubId, tournament)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_CREATED, data);
            });
    }

    allByClub(clubId) {
        TournamentService.allByClub(clubId)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENTS_BY_CLUB_FETCHED, data);
            });
    }

    all() {
        TournamentService.all()
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENTS_FETCHED, data);
            });
    }

    byId(id) {
        TournamentService.byId(id)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_DETAILS_FETCHED, data);
            });
    }

    attend(id) {
        TournamentService.attend(id)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_ATTENDED, data);
            });
    }

    leave(id) {
        TournamentService.leave(id)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_LEFT, data);
            });
    }

    update(id, tournament) {
        TournamentService.update(id, tournament)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_UPDATED, data);
            });
    }

    delete(id) {
        TournamentService.delete(id)
            .then((data) => {
                this.emit(this.eventTypes.TOURNAMENT_DELETED, data);
            });
    }

    handleAction(action) {
        switch (action.type) {
            case tournamentActions.types.CREATE_TOURNAMENT: {
                this.create(action.clubId, action.tournament);
                break;
            }
            case tournamentActions.types.ALL_TOURNAMENTS_BY_CLUB: {
                this.allByClub(action.clubId);
                break;
            }
            case tournamentActions.types.ALL_TOURNAMENTS: {
                this.all();
                break;
            }
            case tournamentActions.types.TOURNAMENT_DETAILS: {
                this.byId(action.id);
                break;
            }
            case tournamentActions.types.ATTEND_TOURNAMENT: {
                this.attend(action.id);
                break;
            }
            case tournamentActions.types.LEAVE_TOURNAMENT: {
                this.leave(action.id);
                break;
            }
            case tournamentActions.types.UPDATE_TOURNAMENT: {
                this.update(action.id, action.tournament);
                break;
            }
            case tournamentActions.types.DELETE_TOURNAMENT: {
                this.delete(action.id);
                break;
            }
            default: break;
        }
    }
}

const tournamentStore = new TournamentStore();

tournamentStore.eventTypes = {
    TOURNAMENT_CREATED: 'tournament_created',
    TOURNAMENTS_BY_CLUB_FETCHED: 'tournaments_by_club_fetched',
    TOURNAMENTS_FETCHED: 'tournaments_fetched',
    TOURNAMENT_DETAILS_FETCHED: 'tournament_details_fetched',
    TOURNAMENT_ATTENDED: 'tournament_attended',
    TOURNAMENT_LEFT: 'tournament_left',
    TOURNAMENT_UPDATED: 'tournament_updated',
    TOURNAMENT_DELETED: 'tournament_deleted'
};

dispatcher.register(tournamentStore.handleAction.bind(tournamentStore));

export default tournamentStore;
