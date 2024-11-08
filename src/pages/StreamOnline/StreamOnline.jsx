import './StreamOnline.scss';
import SectionHeader from '../../components/general/SectionHeader';
import Icon from '../../components/general/Icon';
import Button from '../../components/general/Button/Button';
import YTScreenshot from '../../assets/imgs/yt-screenshot.png';
import CRBCYoutube from '../../assets/imgs/crbc-on-youtube.png';
import CRBCPodcast from '../../assets/imgs/crbc-on-podcast.png';

function StreamOnline() {
    return (
        <div className='stream-online'>
            <SectionHeader text='STREAM ONLINE' />
            <Icon
                iconSrc={YTScreenshot}
                altText='Most recent youtube video'
            />

            <div className="social-buttons">
                <Button
                    backgroundColor="#fff"
                    textColor='#4B4B4B'
                    borderColor='#4B4B4B'
                    text="WATCH LIVE"
                    iconSrc={CRBCYoutube} // Provide the icon source here
                />

                <Button
                    backgroundColor="#fff"
                    textColor='#4B4B4B'
                    borderColor='#4B4B4B'
                    text="LISTEN TO RECORDING"
                    iconSrc={CRBCPodcast} // Provide the icon source here
                />
            </div>
        </div>
    );
}

export default StreamOnline;