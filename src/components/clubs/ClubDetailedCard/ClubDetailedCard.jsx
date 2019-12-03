import React from 'react';
import { Link } from 'react-router-dom';

const ClubDetailedCard = (props) => (
    <div>
        <div>
            <div>Title: {props.club.title}</div>
            <div>City: {props.club.city}</div>
            <div>Courts: {props.club.courts}</div>
        </div>
        <div>
            <Link to={`/tournament/create/${props.club._id}`}>Create Tournament</Link>
            <Link to={`/tournament/all/${props.club._id}`}>Club Tournaments</Link>
        </div>
    </div>
);

export default ClubDetailedCard;
