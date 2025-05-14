import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./EventCalendar.scss";
import EventList from "../EventList";
import SectionHeader from "../general/SectionHeader";

function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  // Fetch events from the API
  useEffect(() => {
    fetch(
      "https://bpcrbcheadless.wpenginepowered.com/wp-json/tribe/events/v1/events"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const events = data.events.map((event) => ({
          date: new Date(event.start_date),
          title: event.title,
          description: event.description,
          time: new Date(event.start_date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          url: event.url,
        }));
        setEvents(events);
        // console.log('===================');
        // console.log(events)
        // console.log('===================');
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Filter events to show only those that match the selected date
  const eventsForSelectedDate = events
    .filter(
      (event) => event.date.toDateString() === selectedDate.toDateString()
    )
    .sort((a, b) => a.date - b.date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Get the number of events on a specific date
  const getEventCountOnDate = (date) => {
    return events.filter(
      (event) => event.date.toDateString() === date.toDateString()
    ).length;
  };

  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    const dateString = event.date.toDateString();
    if (!acc[dateString]) {
      acc[dateString] = [];
    }
    acc[dateString].push(event);
    return acc;
  }, {});

  // Format the selected date to "Nov 14th"
  const formatDateForDisplay = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const suffix =
      day === 1 || day === 21 || day === 31
        ? "st"
        : day === 2 || day === 22
        ? "nd"
        : day === 3 || day === 23
        ? "rd"
        : "th";
    return `${month} ${day}${suffix}`;
  };

  return (
    <div className="event-calendar">
      <div className="w-full flex justify-center p-4">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=5af100dedb2109acb9a256275ecfde8c3f9a6930a90c08700a26a19291341abd%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Church Calendar"
        ></iframe>
      </div>

      {/* <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        calendarType="gregory"
        formatShortWeekday={(locale, date) => date.toLocaleDateString(locale, { weekday: 'narrow' }).toUpperCase()}
        prev2Label={null}
        next2Label={null}
        tileContent={({ date, view }) => {
          const eventCount = getEventCountOnDate(date);
          return view === 'month' && eventCount > 0 ? (
            <div className="event-count">{eventCount}</div>
          ) : null;
        }}
      /> */}

      {/* Active Day Header */}
      {/* <SectionHeader 
        className="active-day"
        text={formatDateForDisplay(selectedDate)}
      /> */}
      {/* Pass grouped events to EventList */}
      {/* <EventList groupedEvents={groupedEvents} selectedDate={selectedDate} /> */}
    </div>
  );
}

export default EventCalendar;
