import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../../utils/Auth';

const ClubDetailedCard = (props) => {
    let linkListElements = null;
    if (Auth.isUserAuthenticated() && Auth.isUserAdmin()) {
        linkListElements = (
            <div>
                <Link to={`/tournament/create/${props.club._id}`}>Create Tournament</Link>
                <Link to={`/tournament/all/${props.club._id}`}>Club Tournaments</Link>
                <Link to={{
                    pathname: `/club/update/${props.club._id}`,
                    state: {
                        club: props.club
                    }
                }}>Update Club</Link>
                <Link to={`/club/delete/${props.club._id}`}>Delete Club</Link>
            </div>
        );
    }

    return(
        <div>
            <div>
                <div>Title: {props.club.title}</div>
                <div>City: {props.club.city}</div>
                <div>Courts: {props.club.courts}</div>
            </div>
            {linkListElements}
        </div>
    );
};

export default ClubDetailedCard;
