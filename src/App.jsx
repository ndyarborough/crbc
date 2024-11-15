import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/_variables.scss';

import Home from './pages/Home';
import WhatToExpect from './pages/WhatToExpect';
import BibleStudy from './pages/BibleStudy';
import Contact from './pages/Contact';
import EventDashboard from './pages/EventDashboard';
import GivingOptions from './pages/GivingOptions';
import NewsletterForm from './pages/NewsletterForm';
import MeetThePastor from './pages/MeetThePastor';
import StreamOnline from './pages/StreamOnline';
import SpecialEvents from './pages/SpecialEvents';
import Ministries from './pages/Ministries';
import TheGospel from './pages/TheGospel';
import PrayerAtCRBC from './pages/PrayerAtCRBC';
import MissionsAndValues from './pages/MissionsAndValues';

import Navbar from './components/general/EveryPage/Navbar';
import Footer from './components/general/EveryPage/Footer';


function App() {

  return (
    <Router>
      <div className='app'>
        <div>
          <Navbar />

          <div className='main-content'>
            <Routes>
              {/* Define routes here */}
              <Route path="/crbc" element={<Home />} />
              <Route path="/whattoexpect" element={<WhatToExpect />} />
              <Route path="/biblestudy" element={<BibleStudy />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/eventdashboard" element={<EventDashboard />} />
              <Route path="/givingoptions" element={<GivingOptions />} />
              <Route path="/newsletterform" element={<NewsletterForm />} />
              <Route path="/meetthepastor" element={<MeetThePastor />} />
              <Route path="/streamonline" element={<StreamOnline />} />
              <Route path="/specialevents" element={<SpecialEvents />} />
              <Route path="/ministries" element={<Ministries />} />
              <Route path="/thegospel" element={<TheGospel />} />
              <Route path="/prayeratcrbc" element={<PrayerAtCRBC />} />
              <Route path="/missionsandvalues" element={<MissionsAndValues />} />


            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>

  );
}

export default App;
