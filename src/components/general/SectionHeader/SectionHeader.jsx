import React from 'react';
import './SectionHeader.scss';

function SectionHeader({ text }) {
    return (
        <h2 className='section-header'>{text}</h2>
    );
}

export default SectionHeader;
