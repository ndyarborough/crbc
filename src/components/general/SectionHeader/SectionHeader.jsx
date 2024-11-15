import React from 'react';
import './SectionHeader.scss';

function SectionHeader({ text, className }) {
    return (
        <h2 className={`section-header ${className}`}>{text}</h2>
    );
}

export default SectionHeader;
