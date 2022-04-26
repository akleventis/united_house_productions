import { Domii, Patty, Shirt, Shroomy } from "../assets/images/index.js";

export const djs = {
  domii: {
    name: "DOMii",
    url: "https://www.instagram.com/ariel_domii/",
  },
  
  duplex: {
    name: "DUPLEX",
    url: "https://www.instagram.com/duplex_music/",
  },
  dabaldo: {
    name: "DaBaldo",
    url: "https://www.instagram.com/_dabaldo_/",
  },
  tylr: {
    name: "TYLR",
    url: "https://www.instagram.com/musicbytylr/",
  },
  warriors: {
    name: "WARRIORS",
    url: "",
  },
  yespeez: {
    name: "YESPEEZ",
    url: "https://www.instagram.com/yespeezmusic/",
  },
  vladislove: {
    name: "VLADISLOVE",
    url: "https://www.instagram.com/djvladislovee/",
  },
};

// YYYY-DD-MMTHH:MM:SS (24)
export const events = [
  {
    headliner: djs.tylr,
    poster: Patty,
    openers: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
    location: {
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
      name: "The Fruit",
    },
    startTime: "2022-03-17T21:00:00.000",
    endTime: "2022-03-18T02:30:00.000",
    ticketURL: "",
  },
  {
    headliner: djs.domii,
    poster: Domii,
    openers: [djs.duplex, djs.yespeez, djs.vladislove, djs.warriors],
    location: {
      name: "The Fruit",
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    },
    startTime: "2022-04-16T21:00:00.000",
    endTime: "2022-04-17T02:30:00.000",
    ticketURL: "https://www.eventbrite.com/e/united-house-productions-presents-domii-tickets-273962728897",
  },
];

export const featuredSongs = [
  {
    dj: djs.tylr,
    url: "https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    dj: djs.yespeez,
    url: "https://soundcloud.com/alex-mahar-189115224/nobody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    dj: djs.dabaldo,
    url: "https://soundcloud.com/dabaldo/dabaldo-the-club-house-live?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  {
    dj: djs.duplex,
    url: "https://soundcloud.com/duplexmusic/duplex-house-step?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
  }
];

// UPDATE FLOW //

// ACTUAL PRODUCTS are stored server side 
export const productMapping = [
  {id: 1, name: "T-Shirt", price: 25, sizes: ["S", "M", "L", "XL"], size: "", img: Shirt},
  {id: 2, name: "Bucket Hat", price: 15, sizes: ["Universal"], size: "Universal", img: Shroomy}
]

// Information to display in shopping cart
export const products = {
  "T-Shirt": {
    "S": {
      id: "prod_LL0QYWYULvLiRJ", // S Shirt 
      name: productMapping[0].name,
      price: productMapping[0].price,
      size: productMapping[0].sizes[0], // Small
      img: productMapping[0].img,
    },
    "M": {
      id: "prod_LL0V9nBF9SWBXe", // M Shirt 
      name: productMapping[0].name, 
      price: productMapping[0].price,
      size: productMapping[0].sizes[1], // Medium
      img: productMapping[0].img,
    },
    "L": {
      id: "prod_LL0WQaYdbcAyrr", // L Shirt 
      name: productMapping[0].name,
      price: productMapping[0].price,
      size: productMapping[0].sizes[2], // Large
      img: productMapping[0].img,
    },
    "XL": {
      id: "prod_LL0WG35KgIK1EP", // XL Shirt 
      name: productMapping[0].name,
      price: productMapping[0].price,
      size: productMapping[0].sizes[3], // X-Large
      img: productMapping[0].img,
    }
  },
  "Bucket Hat": {
    "Universal": {
      id: "prod_LL0XoG82MFwFxR", // Bucket Hat 
      name: productMapping[1].name,
      price: productMapping[1].price,
      size: productMapping[1].sizes[0], // Universal
      img: productMapping[1].img,
    }
  }
}
