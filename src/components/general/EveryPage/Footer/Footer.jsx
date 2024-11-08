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
                    <Icon iconSrc={Facebook} altText='Facebook Icon' />
                    <Icon iconSrc={Youtube} altText='Youtube Icon' />
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
            <Icon iconSrc={FooterLogo} altText='Footer Logo' />
        </div>
    );
}

export default Footer;