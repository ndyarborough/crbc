import InfoCard from '../../components/Cards/InfoCard/InfoCard';
import './Ministries.scss';
import Ministries1 from '../../assets/imgs/ministries1.png';
import Ministries2 from '../../assets/imgs/ministries2.png';
import Ministries3 from '../../assets/imgs/ministries3.png';
import Ministries4 from '../../assets/imgs/ministries4.png';
import SectionHeader from '../../components/general/SectionHeader';

function Ministries() {
    return (
        <div className='ministries'>

            <SectionHeader text='MINISTRIES' />

            <div className="info-card-container">
            <InfoCard
                imageSrc={Ministries1}
                title='Creed Kids'
                description='The goal of our children’s ministry is to equip parents to shepherd their child’s heart, and to teach children what it means to love and live for Jesus. CRBC offers many opportunities for your children to grow and learn about Jesus. We offer Sunday School at 9:45am where your children will have fun and get relevant teaching. During this time the whole Church will be using the Gospel Project Curriculum. Children and adults will be learning the same lesson on their own levels. This is a great way for families to talk about what they have learned. We also have great family events throughout the year like our Easter Egg Hunt, and our Fall Festival.'
            />

            <InfoCard
                imageSrc={Ministries2}
                title='Adult Ministry'
                description='At CRBC we want to make Jesus known to our community and to the world. We provide a variety of small group ministries to build our relationships with God and others. We have Bible Study groups on Sunday mornings at 10:00am. We also have mid-week meetings where we get together in small groups to study the Bible, and talk about life. We do several ministries throughout the year to our community, our country, and world.'
            />

            <InfoCard
                imageSrc={Ministries3}
                title='Margaret Wheeler Circle'
                description='The Margaret Wheeler Missionary Circle (MWMC) is a group of women dedicated to supporting local and global missions. They promote CRBC’s mission efforts, collect donations for various causes, and engage in community outreach. MWMC also cares for home-bound church members through visits and cards. Join us in spreading the gospel and making a difference.'
            />

            <InfoCard
                imageSrc={Ministries4}
                title='J.O.Y. Club'
                description='The J.O.Y. Club (Just Older Youth or Jesus, Others, Yourself Club) is a vibrant group of mostly women, ranging from 30 to 80+, focused on sharing God’s love and spreading joy. They open meetings with prayer and song, send cards to members, and visit nursing homes and homebound members. The club also supports preschool teachers and participates in Senior Adult Rallies. Join us in keeping joy alive and sharing it with others.'
            />
            </div>
        </div>
    );
}

export default Ministries;