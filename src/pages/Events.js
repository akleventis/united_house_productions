import Flyer from "../components/Flyer.js";
import { Domii } from "../assets/images/index";
import "./events.css";

const djs = {
  domii: {
    name: "DOMii",
    site: "",
    insta: "",
    soundcloud: "",
  },
  duplex: {
    name: "duplex",
    site: "",
    insta: "",
    soundcloud: "",
  },
  dabaldo: {
    name: "DaBaldo",
    site: "",
    insta: "",
    soundcloud: "",
  },
  tylr: {
    name: "TYLR",
    site: "",
    insta: "",
    soundcloud: "",
  },
  warriors: {
    name: "warriors",
    site: "",
    insta: "",
    soundcloud: "",
  },
  yespeez: {
    name: "yespeez",
    site: "",
    insta: "",
    soundcloud: "",
  },
  vladislove: {
    name: "vladislove",
    site: "",
    insta: "",
    soundcloud: "",
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
    poster: null,
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
  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>
      {events.map((event, i) => {
        return <Flyer key={i} event={event} />;
      })}
    </div>
  );
};

export default Events;
