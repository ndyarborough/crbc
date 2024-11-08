import './PrayerAtCRBC.scss';
import SectionHeader from '../../components/general/SectionHeader';
import Text from '../../components/general/Text';
import Paragraph from '../../components/general/Paragraph';
import RadioButton from '../../components/Forms/RadioButton';
import Input from '../../components/Forms/Input';
import Label from '../../components/Forms/Label';
import Button from '../../components/general/Button';

function PrayerAtCRBC() {
    return (
        <div className='prayer-at-crbc'>
            <SectionHeader text='PRAYER AT CRBC' />
            <div className="content">
                <Text
                    text='Download the CRBC Prayer and Fasting Guide'
                    color='#365E79'
                    fontFamily='Lato, sans-serif'
                    fontWeight='bold'
                    fontSize='24px'
                    className='center'
                />
                <div className="download-container">
                    <Text
                        text='Regular Paper'
                        color='#365E79'
                        fontFamily='Lato, sans-serif'
                        fontWeight='bold'
                    />
                    <Text
                        text='CRBC 21-Day Prayer and Fasting Guide (Letter Size, 12pp, up to 12 sheets)'
                        color='#4B4B4B'
                        fontFamily='Lato, sans-serif'
                        className='underlined'
                    />
                    <Text
                        text='Booklet'
                        color='#365E79'
                        fontFamily='Lato, sans-serif'
                        fontWeight='bold'
                    />
                    <Text
                        text='CRBC 21-Day Prayer and Fasting Guide (Booklet, 12pp, 3 sheets, requires 2 sided printing (select "flip on short edge"))'
                        color='#4B4B4B'
                        fontFamily='Lato, sans-serif'
                        className='underlined'
                    />
                </div>
                <Text
                    text='How May We Pray for You?'
                    color='#365E79'
                    fontFamily='Lato, sans-serif'
                    fontWeight='bold'
                    fontSize='24px'
                    className='center'
                />
                <Paragraph
                    text='We believe that prayer is vital to the Christian. It is our way to communicate with God, and God asks that we cast our cares upon him. Maybe you or loved one is anxious, sick, struggling with sin, or perhaps just struggling to do the mission of God.  Whatever it is, we consider it a privilege to pray with you and for you.'
                />
                <Paragraph
                    text='CRBC will keep your prayer request confidential until you tell us otherwise. Below, you can choose who you want to know about your prayer request.   And if there is a way, other than by email, that you would like to be contacted, please include it in the body of your request. We thank you for trusting CRBC with your prayer request.'
                />
                <Paragraph
                    text='Please fill out the form below:'
                />
                <form className='prayer-form' action="#">
                    <Text
                        text='Who should we share this prayer request with?'
                        color='#4B4B4B'
                        fontFamily='Lato, sans-serif'
                        fontWeight='bold'
                        fontSize='24px'
                        className='center'
                    />
                    <div className="radio-button-container">
                        <RadioButton
                            label='The Pastor Only'
                        />
                        <RadioButton
                            label='The Pastor & Prayer Team'
                        />
                        <RadioButton
                            label='All Members of CRBC'
                        />
                    </div>
                    <Label
                        text='Your Name'
                    />
                    <div className="form-group">
                        <Input
                            placeholder='First name'
                        />
                        <Input
                            placeholder='Last name'
                        />
                    </div>
                    <Label
                        text='Your Email Address'
                    />
                    <Input
                        placeholder='johnsmith@email.com'
                    />
                    <Label
                        text='What is your prayer request?'
                    />
                    <Input type='textarea' />
                    <Button
                        backgroundColor='#FF6600'
                        text='SUBMIT'
                    />
                </form>
            </div>
        </div>
    );
}

export default PrayerAtCRBC;