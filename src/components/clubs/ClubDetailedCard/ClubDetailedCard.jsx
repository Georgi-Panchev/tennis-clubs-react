import React from 'react';

const ClubDetailedCard = (props) => (
    <div>
        <div>Name: {props.pet.name}</div>
        <div>Type: {props.pet.type}</div>
        <div>Breed: {props.pet.breed}</div>
    </div>
);

export default ClubDetailedCard;
