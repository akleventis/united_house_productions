import Flyer from "../components/events/Flyer.js";
import "./events.css";
import { useState, useEffect, useCallback } from "react";
import { getEvents } from "../api/index.js";
import moment from "moment";

const Events = () => {
  const [events, setEvents] = useState([]);
  const hydrateEvents = useCallback(() => {
    getEvents()
      .then((res) => setEvents(res))
      .catch(console.error);
  }, [setEvents]);

  useEffect(() => {
    hydrateEvents();
  }, [hydrateEvents]);

  const months = {};

  events.forEach((event) => {
    const month = moment(event.startTime).format("MMMM YYYY");
    if (Object.hasOwn(months, month)) {
      months[month].push(event);
    } else {
      months[month] = [event];
    }
  });

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {Object.entries(months).map(([month, eventsInMonth], i) => {
        return (
          <div key={i}>
            <p>{month}</p>
            <hr />
            {eventsInMonth.map((event, j) => (
              <Flyer key={j} event={event} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
