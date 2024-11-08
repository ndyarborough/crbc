import React from 'react';
import './Icon.scss';

function Icon({ iconSrc, altText = 'icon', onClick}) {
    return (
        <div className='icon' onClick={onClick}>
            <img src={iconSrc} alt={altText} className="icon-image" />
        </div>
    );
}

export default Icon;
