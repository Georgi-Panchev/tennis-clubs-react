import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const ClubCard = (props) => {
    let linkListElements = null;
    if (Auth.isUserAuthenticated()) {
        linkListElements = (
            <Link to={`/club/details/${props.club._id}`}>Details</Link>
        );
    }

    return (
        <div>
            <span>{props.club._id} - {props.club.title}</span>
            {linkListElements}
        </div>
    );
};

export default ClubCard;
