// PrayerAtCRBC.js
import React, { useState, useRef } from 'react';
import './PrayerAtCRBC.scss';
import emailjs from 'emailjs-com'; // Import emailjs-com
import SectionHeader from '../../components/general/SectionHeader';
import Text from '../../components/general/Text';
import Paragraph from '../../components/general/Paragraph';
import PrayerForm from '../../components/Forms/PrayerForm'; // Import the new PrayerForm component

function PrayerAtCRBC() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        prayerRequest: '',
        shareWith: '',
    });

    const [emailSent, setEmailSent] = useState(false);
    const [errors, setErrors] = useState({});
    const form = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleRadioChange = (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            shareWith: value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last name is required.';
        if (!formData.prayerRequest) newErrors.prayerRequest = 'Prayer request is required.';

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = 'Email is required.';
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (!formData.shareWith) newErrors.shareWith = 'Please select who to share your prayer request with.';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) {
            return;
        }

        const { firstName, lastName, email, prayerRequest, shareWith } = formData;
        const subject = `Prayer Request from ${firstName} ${lastName}`;
        const body = `
            Hello,

            You have received a message from the Prayer Request Form of the CRBC Website

            Name: ${firstName} ${lastName}
            Email: ${email}
            Share with: ${shareWith}
            Prayer Request: 
            
            ${prayerRequest}
            

            Do not reply
        `;

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
            setEmailSent(true);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="prayer-at-crbc">
            <SectionHeader text="PRAYER AT CRBC" />
            <div className="content">
                <Text
                    text="Download the CRBC Prayer and Fasting Guide"
                    color="#365E79"
                    fontFamily="Lato, sans-serif"
                    fontWeight="bold"
                    fontSize="24px"
                    className="center"
                />
                <div className="download-container">
                    {/* ... (same as before for download texts) */}
                </div>
                <Text
                    text="How May We Pray for You?"
                    color="#365E79"
                    fontFamily="Lato, sans-serif"
                    fontWeight="bold"
                    fontSize="24px"
                    className="center"
                />
                <Paragraph text="We believe that prayer is vital to the Christian..." />
                <Paragraph text="CRBC will keep your prayer request confidential..." />
                <Paragraph text="If you have a prayer request to share, fill out the form below:" />

                <PrayerForm
                    formData={formData}
                    handleChange={handleChange}
                    handleRadioChange={handleRadioChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                />

                {emailSent && (
                    <Text text="Email sent successfully!" color="#4bb543" fontWeight="bold" fontFamily="Lato" />
                )}
            </div>
        </div>
    );
}

export default PrayerAtCRBC;