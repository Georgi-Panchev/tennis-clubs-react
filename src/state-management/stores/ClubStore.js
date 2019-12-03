import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import clubActions from '../actions/clubActions';
import ClubService from '../../services/ClubService';

class ClubStore extends EventEmitter {
    create(club) {
        ClubService.create(club)
            .then((data) => {
                this.emit(this.eventTypes.CLUB_CREATED, data);
            });
    }

    all() {
        ClubService.all()
            .then((data) => {
                this.emit(this.eventTypes.CLUBS_FETCHED, data);
            });
    }

    byId(id) {
        ClubService.byId(id)
            .then((data) => {
                this.emit(this.eventTypes.CLUB_DETAILS_FETCHED, data);
            });
    }

    update(id, club) {
        ClubService.update(id, club)
            .then((data) => {
                this.emit(this.eventTypes.CLUB_UPDATED, data);
            });
    }

    delete(id) {
        ClubService.delete(id)
            .then((data) => {
                this.emit(this.eventTypes.CLUB_DELETED, data);
            });
    }

    handleAction(action) {
        switch (action.type) {
            case clubActions.types.CREATE_CLUB: {
                this.create(action.club);
                break;
            }
            case clubActions.types.ALL_CLUBS: {
                this.all();
                break;
            }
            case clubActions.types.CLUB_DETAILS: {
                this.byId(action.id);
                break;
            }
            case clubActions.types.UPDATE_CLUB: {
                this.byId(action.id, action.club);
                break;
            }
            case clubActions.types.DELETE_CLUB: {
                this.byId(action.id);
                break;
            }
            default: break;
        }
    }
}

const clubStore = new ClubStore();

clubStore.eventTypes = {
    CLUB_CREATED: 'club_created',
    CLUBS_FETCHED: 'clubs_fetched',
    CLUB_DETAILS_FETCHED: 'club_details_fetched',
    CLUB_UPDATED: 'club_updated',
    CLUB_DELETED: 'club_deleted'
};

dispatcher.register(clubStore.handleAction.bind(clubStore));

export default clubStore;
