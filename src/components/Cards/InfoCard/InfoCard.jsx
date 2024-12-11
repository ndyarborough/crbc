// InfoCard.js
import React from 'react';
import './InfoCard.scss';
import Paragraph from '../../general/Paragraph';

function InfoCard({ imageSrc, title, description }) {
    return (
        <div className="info-card">
            <img src={imageSrc} alt={title} className="info-card-image" />
            <h3 className="info-card-title">{title}</h3>
            <Paragraph text={description} lineHeight='30px' size='12px' />
        </div>
    );
}

export default InfoCard;
