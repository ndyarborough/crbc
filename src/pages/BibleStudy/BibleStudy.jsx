import './BibleStudy.scss';
import SectionHeader from '../../components/general/SectionHeader';
import EventCard from '../../components/Cards/EventCard/EventCard';
import BibleStudy1 from '../../assets/imgs/bible-study1.png';
import BibleStudy2 from '../../assets/imgs/bible-study2.png';
import BibleStudy3 from '../../assets/imgs/bible-study3.png';

function BibleStudy() {
    return (
        <div className='bible-study'>
            <SectionHeader text='BIBLE STUDY' />
            <div className='orange-text'>Sundays</div>
            <div className='event-card-container'>
                <EventCard
                    imageSrc={BibleStudy1}
                    title="The Gospel Project"
                    description="Join the Gospel Project each week as we continuously trace the need for redemption in the story of the gospel and in our stories, too."
                    dayOfWeek="SUNDAYS"
                    time="10:00 AM"
                />
                <EventCard
                    imageSrc={BibleStudy2}
                    title="The Gospel Project for Kids"
                    description='During our Sunday Service at 11am, all children are invited to "Childrens Church" to connect with their peers and learn about Christ in a fun, engaging environment.'
                    dayOfWeek="SUNDAYS"
                    time="10:00 AM"
                />
            </div>
            <div className='orange-text'>Wednesdays</div>

            <div className='event-card-container'>
                <EventCard
                    imageSrc={BibleStudy1}
                    title="The Bread of Life Study"
                    description="Join us at Panera Bread for a relaxed Bible study where we dive into Scripture over a warm meal."
                    dayOfWeek="WEDNESDAYS"
                    time="6:00 PM"
                />
            </div>
        </div>
    );
}

export default BibleStudy;