import Flyer from "./event_info/Flyer.js";
import { events} from '../../data/data.js'
import "./events.css";
import moment from "moment";

const Events = (props) => {
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
      {Object.entries(months).map((month, i) => {
        return (
          <div key={i}>
            <p>{month[0]}</p>
            <hr />
            {month[1].map((event, j) => (
              <Flyer key={j} event={event} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
