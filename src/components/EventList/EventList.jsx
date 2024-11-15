import React from 'react';
import './EventList.scss';

function EventList({ groupedEvents, selectedDate }) {
    const selectedDateString = selectedDate.toDateString();

    return (
        <div className="event-list">
            {groupedEvents[selectedDateString] ? (
                <div className="event-container">
                    <div className="event-date">
                        <span className="event-day">
                            {selectedDate.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase()},
                        </span>
                        <span className="event-date-number">
                            {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }).toUpperCase()}
                        </span>
                    </div>

                    <div className="event-items">
                        {/* Loop through the events for the selected date */}
                        {groupedEvents[selectedDateString].map((event, index) => (
                            <div key={index} className="event-item">
                                <div className="event-details">
                                    <h4 className="event-title">{event.title}</h4>
                                    {/* Render the description with HTML tags */}
                                    <div
                                        className="event-description"
                                        dangerouslySetInnerHTML={{ __html: event.description }}
                                    />
                                    <p className="event-time-location">
                                        <strong>{event.time}</strong>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No events for this day.</p>
            )}
        </div>
    );
}

export default EventList;
