import './MeetThePastor.scss';
import SectionHeader from '../../components/general/SectionHeader';
import Text from '../../components/general/Text';
import Paragraph from '../../components/general/Paragraph';
import Icon from '../../components/general/Icon';
import Pastor from '../../assets/imgs/pastor.png';

function MeetThePastor() {
    return (
        <div className='meet-the-pastor'>
            <SectionHeader text='MEET THE PASTOR' />
            <div className="vertical-column">
                <Text
                    text='Senior Pastor -'
                    color='#365E79'
                    fontSize='24'
                    fontWeight='bold'
                    fontFamily='Krub'
                />
                <Text
                    text='Rev. Danny Estave'
                    color='#365E79'
                    fontSize='24'
                    fontWeight='bold'
                    fontFamily='Krub'
                />

                <Icon
                    iconSrc={Pastor}
                    altText='Picture of Danny Estave and his family'
                />

                <Text
                    text='Greetings,'
                    color='#4B4B4B'
                    fontSize='24'
                    fontWeight='bold'
                    fontFamily='Lato'
                />

                <Paragraph
                    text='At Creedmoor Road Baptist Church we seek to be a congegration that loves Jesus Christ. My hope for CRBC is that we would be a family of different backgrounds, ethnicities, and socioeconomic statuses who know and worship the one true God. In view of Christ’s redemption for us we want to walk in compassion, mercy, and grace. We pray that our minds and hearts would be fully shaped by Christ.'
                />

                <Paragraph
                    text='If you are looking for a church, or have questions about God we would love to have you come to one of our services. We are not a perfect congregation, but we are a congregation that loves God and loves others. Whether you are searching for a church home or trying to figure out your relationship with God then we want to welcome you. We hope to see you soon.'
                />

                <Text
                    text='- Pastor Danny Estave'
                    color='#365E79'
                    fontSize='24'
                    fontWeight='bold'
                    fontFamily='Krub'
                    className='center'
                />
            </div>
        </div>
    );
}

export default MeetThePastor;