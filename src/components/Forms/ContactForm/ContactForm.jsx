import './ContactForm.scss';
import Text from '../../general/Text';
import Label from '../../Forms/Label';
import Input from '../../Forms/Input';
import Button from '../../general/Button';

function ContactForm() {
    return (
        <form className='contact-form'>
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
                type="textarea"
                placeholder="What would you like the church to know?"
            />
            <Button 
                backgroundColor='#FF6600'
                text='SEND'
            />
        </form>
    );
}

export default ContactForm;
