import Button from '../../components/general/Button';
import Text from '../../components/general/Text';
import SectionHeader from '../../components/general/SectionHeader';

import './EventDashboard.scss';
import EventCalendar from '../../components/EventCalendar';
import { Link } from 'react-router-dom';


function EventDashboard() {
  const events = [
    { title: '', date: '', description: '', images: [] }
  ]

  return (
    <div className='event-dashboard'>
      <SectionHeader text='EVENT DASHBOARD' />

      <div className="button-container">
        <Link target='_blank' to='https://www.creedmoorroadbaptist.com/uploads/4/5/0/3/45035455/newsletter_november_10_2024.pdf'>
          <Button
            text='VIEW CURRENT NEWSLETTER'
            backgroundColor='#365E79'
            textColor='#fff'
            borderColor='#4B4B4B'
          />
        </Link>
        <Link to='/newsletterform'>
          <Button
            text='JOIN/LEAVE MAIL LIST'
            backgroundColor='#fff'
            borderColor='#4B4B4B'
            textColor='#4B4B4B'
          />
        </Link>
      </div>

      <Text
        text='Event Calendar'
        color='#365E79'
        fontFamily='Krub'
        fontWeight='bold'
      />
      {/* Calendar Goes Here - Use (simple-react-calendar) */}
      <EventCalendar />
      {/* Event Display Goes Here - Create based on Events on Selected Date */}
    </div>
  );
}

export default EventDashboard;