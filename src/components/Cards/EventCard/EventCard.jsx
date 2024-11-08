// EventCard.js
import React from 'react';
import './EventCard.scss';
import Paragraph from '../../general/Paragraph';

function EventCard({ imageSrc, title, description, dayOfWeek, time }) {
    return (
        <div className="event-card">
            <img src={imageSrc} alt={title} className="event-card-image" />
            <h3 className="event-card-title">{title}</h3>
            <Paragraph text={description} color='#365E79'/>
            
            <div className="event-card-banner">
                <span className="event-day">{dayOfWeek}</span>
                <span className="event-time">{time}</span>
            </div>
        </div>
    );
}

export default EventCard;
