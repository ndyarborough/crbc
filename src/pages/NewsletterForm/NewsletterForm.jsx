import SectionHeader from '../../components/general/SectionHeader';
import Text from '../../components/general/Text';
import Input from '../../components/Forms/Input';
import Label from '../../components/Forms/Label';
import Button from '../../components/general/Button';
import RadioButton from '../../components/Forms/RadioButton';

import './NewsletterForm.scss';
import { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

function NewsletterForm() {
    // Form data state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    // Subscription type state
    const [subscriptionType, setSubscriptionType] = useState('subscribe');
    // Error state
    const [errors, setErrors] = useState({});
    // Email sent confirmation
    const [emailSent, setEmailSent] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle radio button change (subscription type)
    const handleRadioChange = (event) => {
        setSubscriptionType(event.target.value);
    };

    // Basic form validation
    const validateForm = () => {
        const formErrors = {};

        // Validate First Name
        if (!formData.firstName) {
            formErrors.firstName = 'First name is required.';
        }

        // Validate Last Name
        if (!formData.lastName) {
            formErrors.lastName = 'Last name is required.';
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            formErrors.email = 'Email is required.';
        } else if (!emailPattern.test(formData.email)) {
            formErrors.email = 'Please enter a valid email address.';
        }

        // Validate Subscription Type
        if (!subscriptionType) {
            formErrors.subscriptionType = 'Please select a subscription option.';
        }

        return formErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        const formErrors = validateForm();
        setErrors(formErrors);

        // If there are validation errors, stop form submission
        if (Object.keys(formErrors).length > 0) {
            return;
        }

        const { firstName, lastName, email } = formData;
        const subject = `Newsletter Subscription Update from ${firstName} ${lastName}`;
        const body = `
            Hello,

            You have received an update to a newsletter subcription.

            Name: ${firstName} ${lastName}
            Email: ${email}
            Subscription Action: ${subscriptionType}
            

            Do not reply
        `;

        // Send email using emailjs
        try {
            const result = await emailjs.send(
                'service_nz4nqye',
                'template_lpc27li',
                {
                   subject: subject,
                   body: body,
                },
                '5OREva5nUuTkL7y-N'
            );

            console.log('Email sent successfully:', result.text);
            setEmailSent(true); // Set emailSent to true when email is sent successfully
        } catch (error) {
            console.error('Error sending email:', error);
        }
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

            {/* Name Input */}
            <Label
                text="Your Name"
                htmlFor="firstNameInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            <div className="form-group">
                <div className="col">
                    <Input
                        id="firstNameInput"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                    {errors.firstName && <Text className="error" text={errors.firstName} color="red" fontSize="14px" />}
                </div>

                <div className="col">
                    <Input
                        id="lastNameInput"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                    {errors.lastName && <Text className="error" text={errors.lastName} color="red" fontSize="14px" />}
                </div>
            </div>

            {/* Email Input */}
            <Label
                text="Your Email Address"
                htmlFor="emailInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            <Input
                id="emailInput"
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
                value={formData.email}
                onChange={handleInputChange}
            />
            {errors.email && <Text className="error" text={errors.email} color="red" fontSize="14px" />}

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
                {errors.subscriptionType && <Text className="error" text={errors.subscriptionType} color="red" fontSize="14px" />}
            </div>

            {/* Submit Button */}
            <Button
                backgroundColor='#FF6600'
                text='SUBMIT'
                onClick={handleSubmit}
            />

            {/* Success Message */}
            {emailSent && (
                <Text text="Your subscription request has been submitted!" color="#4bb543" fontWeight="bold" fontFamily="Lato" />
            )}
        </div>
    );
}

export default NewsletterForm;
