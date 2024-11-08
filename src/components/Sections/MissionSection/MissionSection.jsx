import React from 'react';
import './MissionSection.scss';
import Text from '../../general/Text';
import Paragraph from '../../general/Paragraph';

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
                    {points.map((point, index) => (
                        <li key={index} className="mission-point">
                            <Paragraph text={point} />
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default MissionSection;
