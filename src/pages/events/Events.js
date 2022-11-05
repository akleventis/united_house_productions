import Flyer from "./flyer/Flyer.js";
import "./events.css";
import moment from "moment";

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
                {event_arr.map((event, j) => (<Flyer key={j} event={event} isCurrentEvent={false}/>))}
              </div>
            ) : (
              event_arr.map((event, j) => (<Flyer key={j} event={event} isCurrentEvent={true}/> )))}
          </div>
        );
      })}
    </>
  );
};



// Mapping format => {August 2022: [{event}, {event}], July 2022: [{event}, {event}]}
  const Events = ({events}) => {
      const [currEvents, pastEvents] = [[], []]
      const [currentMonthsEventMapping, pastMonthsEventMapping] = [{}, {}];

  
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
          <div className="nil-events">No current events. Will update soon! In the meantime, check out our previously thrown events below</div>
        ) : (
          <Event month_map={currentMonthsEventMapping} past_event={false} />
      )}

      <h3 className="router-title router-title-past">
        <button className="past-events">Past Events</button>
      </h3>
        <Event month_map={pastMonthsEventMapping} past_event={true} />
    </div>
  );
};
export default Events;
