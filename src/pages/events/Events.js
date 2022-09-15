import {PastFlyer, CurrentFlyer} from "./flyer/Flyer.js";
import { events } from "../../data/data.js";
import "./events.css";
import moment from "moment";
import { useState, useEffect } from "react";

const Event = ({ month_map, past_event }) => {
  return (
    <>
      {Object.entries(month_map).map((m, i) => {
        // m => ["August 2022", [{event}, {event}]]
        var month = m[0]
        var event_arr = m[1]

        return (
          <div className="event-outer-container" key={i}>
            <p>{month}</p>
            <hr />
            {past_event ? (
              <div className="flex-past">
                {event_arr.map((event, j) => (<PastFlyer key={j} event={event}  />))}
              </div>
            ) : (
              event_arr.map((event, j) => (<CurrentFlyer key={j} event={event} /> )))}
          </div>
        );
      })}
    </>
  );
};



// Mapping format => {August 2022: [{event}, {event}], July 2022: [{event}, {event}]}
// const Events = ({events}) => {
  const Events = () => {
  const [currentMonthsEventMapping, pastMonthsEventMapping] = [{}, {}];
  const [currEvents, pastEvents] = [[], []]
  
  events.forEach((event) => {
    if (moment(event.end_time) < moment()) {
      pastEvents.push(event)
    } else {
      currEvents.push(event)
    }
  })

  currEvents.sort((a, b) => moment(a.start_time) - moment(b.start_time));
  pastEvents.sort((a, b) => moment(b.start_time) - moment(a.start_time));

  currEvents.forEach((event) => {
    const month = moment(event.start_time).format("MMMM YYYY");
    currentMonthsEventMapping[month] ? currentMonthsEventMapping[month].push(event) : (currentMonthsEventMapping[month] = [event]);
  });

  pastEvents.forEach((event) => {
    const month = moment(event.start_time).format("MMMM YYYY");
    pastMonthsEventMapping[month] ? pastMonthsEventMapping[month].push(event) : (pastMonthsEventMapping[month] = [event]);
  });

  // automatically show past events when less than 3 current events present
  const currState = Object.entries(currentMonthsEventMapping).length < 3 ? true : false
  const [showPastEvents, setShowPastEvents] = useState(currState)

  const handleClick = e => {
    e.preventDefault();
    setShowPastEvents(!showPastEvents)
  }

  useEffect(() => {
    if (!showPastEvents) {
      window.scroll(0, 0)
    }
  }, [showPastEvents])
  return (
    <div className="events-container">

      <h3 className="router-title">Upcoming Events</h3>
      {Object.entries(currentMonthsEventMapping).length === 0 ? (
          <div className="nil-events">No current events. Will update soon! In the meantime, check out our previously thrown events below</div>
        ) : (
          <Event month_map={currentMonthsEventMapping} past_event={false} />
      )}

      <h3 className="router-title router-title-past">
        <button className="past-events" onClick={handleClick}>Past Events</button>
      </h3>
      {showPastEvents && (
        <>
          {Object.entries(pastMonthsEventMapping).length === 0 ? (
            <>No past events</>
          ) : (
            <Event month_map={pastMonthsEventMapping} past_event={true} />
          )}
        </>
      )}


    </div>
  );
};

export default Events;
