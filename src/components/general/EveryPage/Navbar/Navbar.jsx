import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { Squash as Hamburger } from 'hamburger-react';
import './Navbar.scss';
import Icon from '../../Icon';
import ChevronLeft from '../../../../assets/imgs/chevron-left.png';
import NavLogo from '../../../../assets/imgs/nav-logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate function
    const back = () => {
        console.log('navigating')
        navigate(-1)
    }
    return (
        <nav className='navbar'>
            <div className='row'>
                {/* Back button using ChevronLeft icon */}
                <Icon
                    iconSrc={ChevronLeft}
                    altText='Left Arrow'
                    onClick={back} // Go back one step in the history
                    style={{ cursor: 'pointer' }} // Add cursor pointer for clickable feedback
                />

                <Link to='/crbc'>
                    <Icon iconSrc={NavLogo} altText='CRBC Logo' />
                </Link>

                {/* Hamburger Icon */}
                <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </div>

            {/* Sliding Menu */}
            <div className={`slide-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/crbc" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/whattoexpect" onClick={() => setIsMenuOpen(false)}>What To Expect</Link></li>
                    <li><Link to="/biblestudy" onClick={() => setIsMenuOpen(false)}>Bible Study</Link></li>
                    <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
                    <li><Link to="/eventdashboard" onClick={() => setIsMenuOpen(false)}>Event Dashboard</Link></li>
                    <li><Link to="/givingoptions" onClick={() => setIsMenuOpen(false)}>Giving Options</Link></li>
                    <li><Link to="/newsletterform" onClick={() => setIsMenuOpen(false)}>NewsletterForm</Link></li>
                    <li><Link to="/meetthepastor" onClick={() => setIsMenuOpen(false)}>Meet The Pastor</Link></li>
                    <li><Link to="/streamonline" onClick={() => setIsMenuOpen(false)}>Stream Online</Link></li>
                    <li><Link to="/specialevents" onClick={() => setIsMenuOpen(false)}>Special Events</Link></li>
                    <li><Link to="/ministries" onClick={() => setIsMenuOpen(false)}>Ministries</Link></li>
                    <li><Link to="/thegospel" onClick={() => setIsMenuOpen(false)}>The Gospel</Link></li>
                    <li><Link to="/prayeratcrbc" onClick={() => setIsMenuOpen(false)}>Prayer at CRBC</Link></li>
                    <li><Link to="/missionsandvalues" onClick={() => setIsMenuOpen(false)}>Missions and Values</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;