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
                text='We understand showing up at a new place for the first time can be nerve-wracking, so here’s more information about CRBC and what what you can expect.'
            />

            <div className='info-card-container'>
                <InfoCard
                    imageSrc={Worship1}
                    title="Friendly Atmosphere"
                    description="From the parking lot the the fellowship hall, our friendly congregation is here to guide you and answer any questions you have."
                />
                <InfoCard
                    imageSrc={Worship2}
                    title="Engaging Worship"
                    description="Our Music Director, Mike Gregory, brings a joyful mix of hymns, contemporary songs, and even the occasional guitar solo."
                />
                <InfoCard
                    imageSrc={Worship3}
                    title="Community Outreach"
                    description="Every Sunday at 11am, our lead pastor, Danny Estave, delivers insightful sermons. You can also catch the live broadcast or watch the recorded sermon on YouTube."
                />
            </div>
        </div>
    );
}

export default Worship;