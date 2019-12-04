import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const TournamentDetailedCard = (props) => {
    const { tournament } = props;
    const userId = Auth.getUser().userId;

    let linkElement = <Link to={`/tournament/attend/${props.tournament._id}`}>Attend</Link>;
    if (Object.keys(tournament).length !== 0 && tournament.playersRegistered.includes(userId)) {
        linkElement = <Link to={`/tournament/leave/${props.tournament._id}`}>Leave</Link>;
    }
    let linkListElements = null;
    if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
        linkListElements = (
            <div>
                <Link to={{
                    pathname: `/tournament/update/${props.tournament._id}`,
                    state: {
                        tournament: tournament
                    }
                }}>Update Tournament</Link>
                <Link to={`/tournament/delete/${tournament._id}`}>Delete Tournament</Link>
            </div>
        )
    }

    return (
        <div>
            <div>
                <div>Title: {tournament.title}</div>
                <div>Balls: {tournament.balls}</div>
                <div>Fee: {tournament.fee}</div>
            </div>
            <div>
                {linkElement}
                {linkListElements}
            </div>
        </div>
    );
};

export default TournamentDetailedCard;
