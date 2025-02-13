import { useEffect, useState } from 'react';
import './StreamOnline.scss';
import SectionHeader from '../../components/general/SectionHeader';
import Button from '../../components/general/Button/Button';
import CRBCYoutube from '../../assets/imgs/crbc-on-youtube.png';
import CRBCPodcast from '../../assets/imgs/crbc-on-podcast.png';

const YOUTUBE_API_KEY = 'AIzaSyB8StElXpSpOrWon9KsAnbUuAFdZGfda94'; // Replace with your actual YouTube API Key
const CHANNEL_ID = 'UChUCr2xPXjXnjm7bzJsXIGA';  // Replace with your YouTube Channel ID

function StreamOnline() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                // Fetch recent videos
                const searchResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet&order=date&maxResults=5`
                );
                const searchData = await searchResponse.json();

                // Get video IDs
                const videoIds = searchData.items.map(item => item.id.videoId).join(',');

                // Fetch video details
                const detailsResponse = await fetch(
                    `https://www.googleapis.com/youtube/v3/videos?key=${YOUTUBE_API_KEY}&id=${videoIds}&part=snippet,statistics,contentDetails`
                );
                const detailsData = await detailsResponse.json();

                setVideos(detailsData.items);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };

        fetchVideos();
    }, []);

    // Helper to format ISO 8601 duration
    const formatDuration = isoDuration => {
        const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        if (!match) {
            console.warn('Invalid duration format:', isoDuration);
            return '0:00'; // Default fallback value
        }

        const hours = match[1] ? parseInt(match[1]) : 0;
        const minutes = match[2] ? parseInt(match[2]) : 0;
        const seconds = match[3] ? parseInt(match[3]) : 0;

        return [hours, minutes, seconds]
            .filter(value => value !== 0)
            .map(value => String(value).padStart(2, '0'))
            .join(':');
    };


    return (
        <div className='stream-online'>
            <SectionHeader text='STREAM ONLINE' />

            <div className="social-buttons">
                <Button
                    backgroundColor="#fff"
                    textColor='#4B4B4B'
                    borderColor='#4B4B4B'
                    text="WATCH LIVE"
                    iconSrc={CRBCYoutube}
                />
                <Button
                    backgroundColor="#fff"
                    textColor='#4B4B4B'
                    borderColor='#4B4B4B'
                    text="LISTEN TO RECORDING"
                    iconSrc={CRBCPodcast}
                />
            </div>

            <div className="video-thumbnails">
                {videos.map(video => (
                    <div key={video.id} className="video-card">
                        <a
                            href={`https://www.youtube.com/watch?v=${video.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={video.snippet.thumbnails.high.url}
                                alt={video.snippet.title}
                                className="video-thumbnail"
                            />
                        </a>
                        <div className="video-info">
                            <h3 className="video-title">{video.snippet.title}</h3>
                            <div className='row'>
                                <p className="video-views">{video.statistics.viewCount} views</p>
                                <p className="video-time">{formatDuration(video.contentDetails.duration)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StreamOnline;
