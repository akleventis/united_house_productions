import Flyer from "../components/events/Flyer.js";
import { Domii, Square } from "../assets/images/index.js";
import "./events.css";
import moment from "moment";

const djs = {
  domii: {
    name: "DOMii",
    site: "",
    insta: "",
  },
  duplex: {
    name: "duplex",
    site: "",
    insta: "",
  },
  dabaldo: {
    name: "DaBaldo",
    site: "",
    insta: "",
  },
  tylr: {
    name: "TYLR",
    site: "",
    insta: "",
  },
  warriors: {
    name: "warriors",
    site: "",
    insta: "",
  },
  yespeez: {
    name: "yespeez",
    site: "",
    insta: "",
  },
  vladislove: {
    name: "vladislove",
    site: "",
    insta: "",
  },
};

const events = [
  {
    headliner: djs.domii,
    poster: Domii,
    supportingActs: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
    location: {
      name: "The Fruit",
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    },
    startTime: "2022-04-16T21:00:00.000",
    endTime: "2022-04-17T02:30:00.000",
  },
  {
    headliner: djs.tylr,
    poster: Square,
    supportingActs: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
    location: {
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
      name: "The Fruit",
    },
    startTime: "2022-04-17T21:00:00.000",
    endTime: "2022-04-18T02:30:00.000",
  },
];

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
