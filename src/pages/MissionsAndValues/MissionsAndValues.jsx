import Paragraph from '../../components/general/Paragraph';
import SectionHeader from '../../components/general/SectionHeader';
import MissionSection from '../../components/Sections/MissionSection/MissionSection';
import Text from '../../components/general/Text';
import './MissionsAndValues.scss';

function MissionsAndValues() {
    return (
        <div className='missions-and-values'>
            <SectionHeader text='MISSIONS AND VALUES' />
            <Paragraph
                text='One day everything will be restored back to God’s design, and those who trust Jesus by faith will enjoy eternity in the new heaven and earth.'
            />
            <MissionSection
                title="Mission:"
                paragraph="At Creedmoor Road Baptist Church we exist to be disciples who make disciples of all nations."
            // points={[
            //     "Empower communities through education.",
            //     "Promote sustainable practices.",
            //     "Foster inclusivity and collaboration."
            // ]}
            />
            <MissionSection
                title="Core Values:"
                points={[
                    "The Bible is our sole authority.",
                    "We expect the gospel to change lives.",
                    "We apply God's Word to our daily lives.",
                    "We invest in all generations to reach the next generation.",
                    "We serve our community to impact lives for the gospel.",
                    "We pay trusting in God's power."
                ]}
            />

            <MissionSection
                title="Our Seven Life Marks:"
                points={[
                    "Christlikeness: Am I becoming more like Jesus?",
                    "Evangelism: Am I close to someone far from God?",
                    "Service: Where am I serving?",
                    "Giving: Am I growing in generosity?",
                    "Influence: Who am I invested in?",
                    "Family: How am I improving my family relationships?",
                    "Accountability: Who is asking me the tough questions?"
                ]}
            />

            <Text
                text='The Pathway:'
                color='#365E79'
                fontFamily='Lato, sans-serif'
                fontWeight='bold'
                fontSize='32px'
                className='space-top'
            />
            <Paragraph 
                text='Since we are a church that seeks to be disciples who make disciples then this is the pathway for us to be disciples. We expect our members to be involved in each of these four areas:'
            />
            <ol className='special-list'>
                <li>Know God:</li>
                <Paragraph
                    text='We want you to know God more by attending our worship service each Sunday as Pastor Danny teaches the Bible.'
                />
                <li>Be Discipled:</li>
                <Paragraph
                    text='We want you to come and find discipleship in one of our Sunday School classes each Sunday Morning.'
                />
                <li>Live in Community:</li>
                <Paragraph
                    text='We want you to find community in one of our mid-week gatherings in the home or at church as you navigate life, guided by God’s Word.'
                />
                <li>Change the World:</li>
                <Paragraph
                    text='We want you to join God’s work in changing the world through missions, evangelism, and volunteering.'
                />
            </ol>
            
            <Text
                text='Sometimes we say "no" so we can say "yes."'
                color='#365E79'
                fontFamily='Lato, sans-serif'
                fontWeight='bold'
                fontSize='24px'
            />
            <Paragraph 
                text='We believe that God has a specific mission for Creedmoor Road Baptist Church, and we are most effective when we are focused on where he is leading us.' 
            />

        </div>
    );
}

export default MissionsAndValues;