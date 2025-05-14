import './Home.scss';
import Icon from '../../components/general/Icon';
import HomeLogo from '../../assets/imgs/home-logo.png';
import Button from '../../components/general/Button';
import SectionHeader from '../../components/general/SectionHeader';

import Map from '../../components/general/Map';
import Paragraph from '../../components/general/Paragraph';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <Icon iconSrc={HomeLogo} altText='CRBC Logo' />

            <div className='buttons-container'>
                <Link to='/eventdashboard'>
                    <Button textColor="#fff" backgroundColor="#365E79" borderColor="#fff" text='EVENT DASHBOARD'></Button>
                </Link>
                <Link to='/streamonline'>
                    <Button textColor="#000" backgroundColor="#fff" borderColor="#000" text='STREAM ONLINE'></Button>
                </Link>
                <Link to='/missionsandvalues'>
                    <Button textColor="#fff" backgroundColor="#365E79" borderColor="#fff" text='MISSIONS AND VALUES'> </Button>
                </Link>
                <Link to='/givingoptions'>
                    <Button textColor="#000" backgroundColor="#fff" borderColor="#000" text='GIVE ONLINE'></Button>
                </Link>
            </div>

            <div className='sermon-preview'>
                <SectionHeader text="SERMON PREVIEW" />
                <div className='sermon-preview-card'>
                    <div className='row'>
                        <div className='blue-text'>Mark 4: 35-41</div>
                        <div className='orange-date-text'>Sunday, 8/10 @11am</div>
                    </div>
                    <ul className='sermon-points'>
                        <li>Power over the storms of life</li>
                        <li>Faith amidst fear</li>
                    </ul>
                </div>
            </div>
            <div className='our-location'>
                <SectionHeader text="OUR LOCATION" />
                <Paragraph
                    text='Conveniently located on Creedmoor Road in Raleigh, NC (Hwy 50). We are a short distance from Interstates 540 and 440, and a little over a mile from Crabtree Valley Mall, making it easy to find and reach us.'
                />
                <Map />
            </div>
            <div className='featured-verse'>
                <Paragraph
                    text='“But whatever were gains to me I now consider loss for the sake of Christ. What is more, I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord.”'
                />
                <div className='blue-text'>Phillipians 3: 7-8</div>
            </div>
        </div>
    );
}

export default Home;