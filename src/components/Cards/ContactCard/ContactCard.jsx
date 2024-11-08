// ContactCard.js
import React from 'react';
import './ContactCard.scss';
import Button from '../../general/Button';

function ContactCard({ title, iconList, buttonText, onButtonClick }) {
    return (
        <div className="contact-card">
            <h3 className="contact-card-title">{title}</h3>

            <div className='content'>
                <div className="icon-list">
                    {iconList.map((icon, index) => (
                        <div key={index} className="icon-item">
                            <img src={icon.src} alt={icon.text} className="icon-img" />
                            <span className="icon-text">{icon.text}</span>
                        </div>
                    ))}
                </div>

                {buttonText && (
                    <Button textColor="#fff" backgroundColor="#365E79" borderColor="#fff" text={buttonText}></Button>
                )}
            </div>
        </div>
    );
}

export default ContactCard;
