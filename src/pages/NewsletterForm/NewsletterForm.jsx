import SectionHeader from '../../components/general/SectionHeader';
import Text from '../../components/general/Text';
import Input from '../../components/Forms/Input';
import Label from '../../components/Forms/Label';
import Button from '../../components/general/Button';
import RadioButton from '../../components/Forms/RadioButton';

import './NewsletterForm.scss';
import { useState } from 'react';

function NewsletterForm() {
    const [subscriptionType, setSubscriptionType] = useState('subscribe');

    const handleRadioChange = (event) => {
        setSubscriptionType(event.target.value);
    };

    return (
        <div className='newsletter-form'>
            <SectionHeader text='MANAGE SUBSCRIPTIONS' />
            <Text
                text='Subscribe to the CRBC Newsletter'
                color='#365E79'
                fontSize='20px'
                fontWeight='bold'
                fontFamily='Lato'
                className='space'
            />
            
            {/* Label for Name */}
            <Label
                text="Your Name"
                htmlFor="nameInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            {/* Name Group */}
            <div className="form-group">
                <Input
                    id="firstNameInput"
                    placeholder="First name"
                />
                <Input
                    id="lastNameInput"
                    placeholder="Last name"
                />
            </div>
            {/* Label for Email */}
            <Label
                text="Your Email Address"
                htmlFor="emailInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            {/* Input for Email */}
            <Input
                id="emailInput"
                type="email"
                placeholder="johnsmith@email.com"
            />
            {/* Subscription Options */}
            <div className="form-group-vertical">
                <RadioButton
                    id="subscribe"
                    name="subscriptionType"
                    value="subscribe"
                    label="Subscribe"
                    checked={subscriptionType === 'subscribe'}
                    onChange={handleRadioChange}
                />
                <RadioButton
                    id="unsubscribe"
                    name="subscriptionType"
                    value="unsubscribe"
                    label="Unsubscribe"
                    checked={subscriptionType === 'unsubscribe'}
                    onChange={handleRadioChange}
                />
            </div>
            {/* Submit Button */}
            <Button 
                backgroundColor='#FF6600'
                text='SUBMIT'
            />
        </div>
    );
}

export default NewsletterForm;