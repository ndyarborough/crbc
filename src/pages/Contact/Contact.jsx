import SectionHeader from '../../components/general/SectionHeader';
import ContactCard from '../../components/Cards/ContactCard';
import Phone from '../../assets/imgs/phone.png';
import Email from '../../assets/imgs/email.png';
import Pin from '../../assets/imgs/pin.png';

import './Contact.scss';
import ContactForm from '../../components/Forms/ContactForm/ContactForm';

function Contact() {

    const iconList1 = [
        { src: Email, text: 'CreedmoorRoadBaptist@gmail.com' },
        { src: Phone, text: '+1 (919) 787-3317' },
    ];

    const iconList2 = [
        { src: Pin, text: 'Address: 123 Street, City, Country' },
    ];

    const handleButtonClick = () => {
        alert('Contact form will open');
    };


    return (
        <div className='contact-us'>
            <SectionHeader text='CONTACT US' />
            <div className='contact-card-container'>
                <ContactCard
                    title="Phone and Email "
                    iconList={iconList1}
                    onButtonClick={handleButtonClick}
                />
                <ContactCard
                    title="Address"
                    iconList={iconList2}
                    buttonText="GET DIRECTIONS"
                    onButtonClick={handleButtonClick}
                />
            </div>
            {/* Contact Form */}
            <ContactForm />

        </div>
    );
}

export default Contact;