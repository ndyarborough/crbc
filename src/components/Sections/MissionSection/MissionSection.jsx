import React from 'react';
import './MissionSection.scss';
import Text from '../../general/Text';
import Paragraph from '../../general/Paragraph'; // Keep if used for the main paragraph, but we'll replace it inside the list items

function MissionSection({ title, points, paragraph }) {
    return (
        <div className='mission-section'>
            <Text
                text={title}
                color='#365E79'
                fontFamily='Lato, sans-serif'
                fontWeight='bold'
                fontSize='32px'
            />
            {paragraph && (
                <Paragraph
                    text={paragraph}
                />
            )}
            {points && points.length > 0 && (
                <ol className="mission-points-list">
                    {points.map((point, index) => {
                        const colonIndex = point.indexOf(':');
                        let pointContent;

                        if (colonIndex !== -1) {
                            // Found a colon, so split the point
                            const labelPart = point.substring(0, colonIndex + 1); // Includes the colon
                            const restPart = point.substring(colonIndex + 1);    // Text after the colon

                            pointContent = (
                                <>
                                    <strong>{labelPart}</strong>
                                    {restPart}
                                </>
                            );
                        } else {
                            // No colon found, render the point as is (or handle as error/default)
                            // Using the original Paragraph component here would require it to be very simple
                            // or ensuring it doesn't conflict. For simplicity, just rendering text.
                            pointContent = point;
                        }

                        return (
                            <li key={index} className="mission-point">
                                {pointContent}
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
}

export default MissionSection;