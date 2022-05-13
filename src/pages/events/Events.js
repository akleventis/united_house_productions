import Flyer from "./flyer/Flyer.js";
import { events} from '../../data/data.js'
import "./events.css";
import moment from "moment";

const Events = () => {
  const months = {};

  events.sort((a, b) => moment(a.startTime) - moment(b.startTime))
  events.forEach((event) => {
    const month = moment(event.startTime).format("MMMM YYYY");
    Object.hasOwn(months, month) ? months[month].push(event) : months[month] = [event]
  });

  return (
    <div className="events-container">
      <h3 className='router-title'>Upcoming Events</h3>
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
