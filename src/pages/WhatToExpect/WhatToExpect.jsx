import './WhatToExpect.scss';
import SectionHeader from '../../components/general/SectionHeader';
import Paragraph from '../../components/general/Paragraph';
import InfoCard from '../../components/Cards/InfoCard/InfoCard';
import Worship1 from '../../assets/imgs/worship1.png';
import Worship2 from '../../assets/imgs/worship2.png';
import Worship3 from '../../assets/imgs/worship3.png';

function Worship() {
    return (
        <div className='worship'>
            <SectionHeader text='What to Expect' />
            <div className='blue-text'>You are welcome here.</div>
            <Paragraph
                text='We understand showing up at a new place for the first time can be nerve-wracking, so here’s more information about CRBC. We meet for worship every Sunday morning at 11am. The services are one hour long or less.'
            />

            <div className='info-card-container'>
                <InfoCard
                    imageSrc={Worship1}
                    title="Friendly Atmosphere"
                    description="CRBC is a small, close community of believers. Where you will feel welcome. We never single out our guests, but people will notice you and greet you with warmth and care."
                />
                <InfoCard
                    imageSrc={Worship2}
                    title="Engaging Worship"
                    description="Our Music Director, Mike Gregory, leads a joyful mix of traditional hymns, contemporary praise songs, and even the occasional guitar solo."
                />
                <InfoCard
                    imageSrc={Worship3}
                    title="A Fresh Message"
                    description="Senior Pastor, Danny Estave, delivers insightful messages from God's word, not only explaining the meaning of the passages, but also applying their truths to our everyday lives. You can also catch the live broadcast or watch the recorded sermon on YouTube. (25-30 minutes)"
                />
            </div>
        </div>
    );
}

export default Worship;