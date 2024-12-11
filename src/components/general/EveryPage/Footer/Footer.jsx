import './Footer.scss';
import Icon from '../../Icon';
import Facebook from '../../../../assets/imgs/facebook.png';
import Youtube from '../../../../assets/imgs/youtube.png';
import FooterLogo from '../../../../assets/imgs/footer-logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='column'>
                <div className='social-links'>
                    <Link target='_blank' to='https://www.facebook.com/crbcraleigh/'>
                        <Icon iconSrc={Facebook} altText='Facebook Icon' />
                    </Link>
                    <Link target='_blank' to='https://www.youtube.com/user/CreedmoorRoadBaptist'>
                        <Icon iconSrc={Youtube} altText='Youtube Icon' />
                    </Link>
                </div>
                <ul>
                    <Link to='meetthepastor'>
                        <li>Meet the Pastor</li>
                    </Link>
                    <Link to='contact'>
                        <li>Contact Us</li>
                    </Link>
                    <Link to='thegospel'>
                        <li>The Gospel</li>
                    </Link>
                </ul>
            </div>
            <div className='row3'>
                <Link to='/crbc '>
                    <Icon className='icon' iconSrc={FooterLogo} altText='Footer Logo' />
                </Link>
            </div>
        </div>
    );
}

export default Footer;