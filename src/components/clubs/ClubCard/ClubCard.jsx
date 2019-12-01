import React from 'react';
import { Link } from 'react-router-dom';

const ClubCard = (props) => (
    <div>
        <span>{props.pet.id} - {props.pet.name}</span>
        <Link to={`/pets/details/${props.pet.id}`}>Details</Link>
    </div>
);

export default ClubCard;
