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
          <div key={i}>
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
const Events = () => {
  const [showPastEvents, setShowPastEvents] = useState(false)

  const handleClick = e => {
    e.preventDefault();
    setShowPastEvents(!showPastEvents)
  }

  useEffect(() => {
    if (!showPastEvents) {
      window.scroll(0, 0)
    }
  }, [showPastEvents])



  const [currentMonthsEventMapping, pastMonthsEventMapping] = [{}, {}];
  const [currEvents, pastEvents] = [[], []]
  
  events.forEach((event) => {
    if (moment(event.endTime) < moment()) {
      pastEvents.push(event)
    } else {
      currEvents.push(event)
    }
  })

  currEvents.sort((a, b) => moment(a.startTime) - moment(b.startTime));
  pastEvents.sort((a, b) => moment(b.startTime) - moment(a.startTime));

  currEvents.forEach((event) => {
    const month = moment(event.startTime).format("MMMM YYYY");
    currentMonthsEventMapping[month] ? currentMonthsEventMapping[month].push(event) : (currentMonthsEventMapping[month] = [event]);
  });

  pastEvents.forEach((event) => {
    const month = moment(event.startTime).format("MMMM YYYY");
    pastMonthsEventMapping[month] ? pastMonthsEventMapping[month].push(event) : (pastMonthsEventMapping[month] = [event]);
  });

  return (
    <div className="events-container">

      <h3 className="router-title">Upcoming Events</h3>
      {Object.entries(currentMonthsEventMapping).length === 0 ? (
          <>No current events, will update soon!</>
        ) : (
          <Event month_map={currentMonthsEventMapping} past_event={false} />
      )}
      <div className="b-div">
        <button className="past-events" onClick={handleClick}>Past events</button>
      </div>

      {showPastEvents && (
        <>
          <h3 className="router-title">Past Events</h3>
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
