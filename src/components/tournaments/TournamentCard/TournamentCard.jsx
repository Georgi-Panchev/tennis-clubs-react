import React from 'react';
import { Link } from 'react-router-dom';

const TournamentCard = (props) => (
    <div>
        <span>{props.tournament._id} - {props.tournament.title}</span>
        <Link to={`/tournament/details/${props.tournament._id}`}>Details</Link>
    </div>
);

export default TournamentCard;
