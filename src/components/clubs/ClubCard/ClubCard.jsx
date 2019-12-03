import React from 'react';
import { Link } from 'react-router-dom';

const ClubCard = (props) => (
    <div>
        <span>{props.club._id} - {props.club.title}</span>
        <Link to={`/club/details/${props.club._id}`}>Details</Link>
    </div>
);

export default ClubCard;
