import InfoCard from '../../components/Cards/InfoCard/InfoCard';
import './SpecialEvents.scss';
import sp1 from '../../assets/imgs/sp-1.png';
import sp2 from '../../assets/imgs/sp-2.png';
import sp3 from '../../assets/imgs/sp-3.png';
import SectionHeader from '../../components/general/SectionHeader';

function SpecialEvents() {
    return (
        <div className='special-events'>
            <SectionHeader text='SPECIAL EVENTS' />

            <div className="info-card-container">
                <InfoCard
                    imageSrc={sp1}
                    title='Reach Raleigh'
                    description='The Reach Raleigh crew visits hundreds of homes during the last week of July, greeting neighbors, taking prayer requests, and encouraging participation in our food drive. The drive supports the Point Church Food Ministry and the Food Bank of Central & Eastern NC. We also hand out cold water to park-goers at Lake Lynn and Shelley Lake. On Friday evening, CRBC hosts a free Outdoor Movie Night on our lawn, complete with movie-style refreshments.'
                />

                <InfoCard
                    imageSrc={sp2}
                    title='CRBC Fall Festival'
                    description='The CRBC Fall Festival, held on the third Friday in October, is a fun-filled event for preschool and elementary-aged children, but enjoyable for the whole family. The festival features inflatables, a hayride, games with candy prizes, and a classic cakewalk. Hot dogs, chips, popcorn, and drinks are provided. This free event is open to the entire community, with costumes optional.'
                />

                <InfoCard
                    imageSrc={sp3}
                    title='Family Christmas Night'
                    description='Join us the Sunday before Christmas at 4PM for our annual CRBC Family Christmas Worship Night and Fellowship. This special evening brings together church family and guests of all ages to celebrate the true meaning of Christmas. Enjoy carols, worship, and a message about why Jesus is the hope of the world. The event will also be streamed on YouTube.'
                />
            </div>
        </div>
    );
}

export default SpecialEvents;