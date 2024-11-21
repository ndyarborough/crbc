import React, { useState } from 'react';
import './ContactForm.scss';
import Text from '../../general/Text';
import Label from '../../Forms/Label';
import Input from '../../Forms/Input';
import Button from '../../general/Button';
import emailjs from 'emailjs-com'; // Import emailjs-com for email sending

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [emailSent, setEmailSent] = useState(false); // State for email sent confirmation

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate First Name and Last Name
        if (!formData.firstName) newErrors.firstName = "First name is required.";
        if (!formData.lastName) newErrors.lastName = "Last name is required.";

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Validate Message
        if (!formData.message) newErrors.message = "Message is required.";

        return newErrors;
    };

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
        const subject = `Contact Request from ${firstName} ${lastName}`;
        const body = `
            Hello,

            You have received a message from the Contact Us page of the CRBC Website

            Name: ${firstName} ${lastName}
            Email: ${email}
            Message: 
            
            ${formData.message}
            

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
        <form className='contact-form' onSubmit={handleSubmit}>
            <Text
                text='Contact CRBC'
                color='#4B4B4B'
                fontWeight='bold'
                fontSize='20px'
                fontFamily='Krub'
                className='title'
            />
            {/* Label for Name */}
            <Label
                text="Your Name"
                htmlFor="firstNameInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            {/* Name Group */}
            <div className="form-group">
                <div className="col">
                    <Input
                        id="firstNameInput"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    {errors.firstName && <Text className="error" text={errors.firstName} color="red" fontSize="14px" />}
                </div>
                <div className="col">
                    <Input
                        id="lastNameInput"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    {errors.lastName && <Text className="error" text={errors.lastName} color="red" fontSize="14px" />}
                </div>
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
                name="email"
                placeholder="johnsmith@email.com"
                value={formData.email}
                onChange={handleChange}
            />
            {errors.email && <Text className="error" text={errors.email} color="red" fontSize="14px" />}

            {/* Label for Message */}
            <Label
                text="Comment"
                htmlFor="messageInput"
                color="#365E79"
                fontSize="16px"
                fontWeight="bold"
            />
            {/* Input for Message */}
            <Input
                id="messageInput"
                name="message"
                type="textarea"
                placeholder="What would you like the church to know?"
                value={formData.message}
                onChange={handleChange}
            />
            {errors.message && <Text className="error" text={errors.message} color="red" fontSize="14px" />}

            <Button
                backgroundColor='#FF6600'
                text='SEND'
                type="submit"
            />

            {emailSent && (
                <Text text="Your message has been sent!" color="#4bb543" fontWeight="bold" fontFamily="Lato" />
            )}
        </form>
    );
}

export default ContactForm;