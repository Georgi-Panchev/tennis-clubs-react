import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const TournamentCard = (props) => {
    let linkListElements = null;
    if (Auth.isUserAuthenticated()) {
        linkListElements = (
            <Link to={`/tournament/details/${props.tournament._id}`}>Details</Link>
        );
    }

    return (
        <div>
            <span>{props.tournament._id} - {props.tournament.title}</span>
            {linkListElements}
        </div>
    );
};

export default TournamentCard;
