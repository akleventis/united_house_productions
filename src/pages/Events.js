import {Flyer} from "../components/index";
import "./events.css";
let djs = {
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

// const events = {
//   domii: {
//     headliner: djs.domii,
//     support: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
//     time: "9pm - 2:30am",
//     location: {
//       url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
//       name: "The Fruit",
//     },
//   },
//   tylr: {
//     headliner: djs.tylr,
//     support: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
//     time: "9pm - 2:30am",
//     location: {
//       url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
//       name: "The Fruit",
//     },
//   },
// };

const Events = (props) => {
  return (
    <div className="events-container">
      <h2 className='router-title'>Upcoming Events</h2>
      <Flyer {...props.events} />
      <Flyer {...props.events} />
      <Flyer {...props.events} />
    </div>
  );
};

export default Events;
