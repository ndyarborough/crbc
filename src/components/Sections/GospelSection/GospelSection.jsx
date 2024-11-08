import './GospelSection.scss';
import Text from '../../general/Text';
import Paragraph from '../../general/Paragraph';

function GospelSection({title, verses, paragraph}) {
    return (
        <div className='gospel-section'>
                <Text
                    text={title}
                    color='#365E79'
                    fontFamily='Lato, sans-serif'
                    fontWeight='bold'
                    fontSize='32px'
                />
                <Paragraph
                    text={paragraph}
                />
                <Text
                    text={verses}
                    color='#365E79'
                    fontFamily='Lato, sans-serif'
                    fontSize='16px'
                />
            </div>
    );
}

export default GospelSection;