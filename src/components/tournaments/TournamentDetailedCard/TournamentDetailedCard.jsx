import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const TournamentDetailedCard = (props) => {
    const { tournament } = props;
    const userId = Auth.getUser().userId;

    let linkListElement = <Link to={`/tournament/attend/${props.tournament._id}`}>Attend</Link>;
    if (Object.keys(tournament).length !== 0 && tournament.playersRegistered.includes(userId)) {
        linkListElement = <Link to={`/tournament/leave/${props.tournament._id}`}>Leave</Link>;
    }

    return (
        <div>
            <div>
                <div>Title: {tournament.title}</div>
                <div>Balls: {tournament.balls}</div>
                <div>Fee: {tournament.fee}</div>
            </div>
            <div>
                {linkListElement}
            </div>
        </div>
    );
};

export default TournamentDetailedCard;
