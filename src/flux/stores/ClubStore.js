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

    // all(page = 1) {
    //     ClubService.all(page)
    //         .then((data) => {
    //             this.emit(this.eventTypes.PETS_FETCHED, data);
    //         });
    // }
    //
    // byId(id) {
    //     ClubService.byId(id)
    //         .then((data) => {
    //             this.emit(this.eventTypes.PET_DETAILS_FETCHED, data);
    //         });
    // }

    handleAction(action) {
        switch (action.type) {
            case clubActions.types.CREATE_CLUB: {
                this.create(action.club);
                break;
            }
            // case clubActions.types.ALL_PETS: {
            //     this.all(action.page);
            //     break;
            // }
            // case clubActions.types.PET_DETAILS: {
            //     this.byId(action.id);
            //     break;
            // }
            default: break;
        }
    }
}

const clubStore = new ClubStore();

clubStore.eventTypes = {
    CLUB_CREATED: 'club_created',
    CLUBS_FETCHED: 'clubs_fetched',
    CLUB_DETAILS_FETCHED: 'club_details_fetched'
};

dispatcher.register(clubStore.handleAction.bind(clubStore));

export default clubStore;
