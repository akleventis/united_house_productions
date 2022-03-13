import { Domii, Patty, Shirt, Shroomy } from "../assets/images/index.js";

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
    poster: Patty,
    supportingActs: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
    location: {
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
      name: "The Fruit",
    },
    startTime: "2022-04-17T21:00:00.000",
    endTime: "2022-04-18T02:30:00.000",
  },
];

const featuredSongs = [
  {
    artist: djs.tylr,
    url: "https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    artist: djs.yespeez,
    url: "https://soundcloud.com/alex-mahar-189115224/nobody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    artist: djs.dabaldo,
    url: "https://soundcloud.com/dabaldo/dabaldo-the-club-house-live?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
];

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 25,
    sizes: ["S", "M", "L", "XL"],
    img: Shirt,
  },
  { id: 2, name: "Bucket Hat", price: 15, sizes: ["Universal"], img: Shroomy },
];

const data = { djs, events, featuredSongs, products };

export default data;
