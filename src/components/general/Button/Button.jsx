import React from 'react';
import Icon from '../Icon'; // Adjust path as necessary
import './Button.scss';

function Button({ backgroundColor, borderColor, textColor, text, onClick, type, iconSrc }) {
  const style = {
    backgroundColor: backgroundColor || '#FF6600', // Default to orange if no backgroundColor
    borderColor: borderColor || '#FF6600',         // Default to orange if no borderColor
    color: textColor || '#fff',                    // Default to white text color
  };

  return (
    <button
      className="button"
      style={style}
      onClick={onClick}
      type={type || 'button'} // Default to 'button' type, can be changed to 'submit'
    >
      {iconSrc && <Icon iconSrc={iconSrc} altText="Button icon" />} {/* Display icon if iconSrc is provided */}
      <span className="button-text">{text}</span>
    </button>
  );
}

export default Button;
