import { f1, f2 } from "../assets/index.js";

// TODO: Migrate to database
export const djs = {
  beebo: {
    name: "BEEBO",
    url: "https://www.instagram.com/BEEBO_MUSIC/"
  },
  sam_wolfe: {
    name: "SAM WOLFE",
    url: "https://www.instagram.com/samwolfemusic/",
  },
  j_5: {
    name: "J/5",
    url: "https://www.instagram.com/johnny.cupcvke/",
  },
  seance: {
    name: "Seance",
    url: "https://www.instagram.com/seancemusic666/",
  },
  u9: {
    name: "Ruiz0m & KAŸ",
    url: "",
  },
  united_house: {
    name : "United House Takeover",
    url: "https://www.intagram.com/unitedhouseproductions/",
  },
  duplex: {
    name: "DUPLEX",
    url: "https://www.instagram.com/duplex_music/",
    featured_song: "https://soundcloud.com/duplexmusic/duplex-house-step?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  dabaldo: {
    name: "DaBaldo",
    url: "https://www.instagram.com/_dabaldo_/",
    featured_song: "https://soundcloud.com/dabaldo/dabaldo-the-club-house-live?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  tylr: {
    name: "TYLR",
    url: "https://www.instagram.com/musicbytylr/",
    featured_song: "https://soundcloud.com/musicbytylr/2022-showcase-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  yespeez: {
    name: "YESPEEZ",
    url: "https://www.instagram.com/yespeezmusic/",
    featured_song: "https://soundcloud.com/alex-mahar-189115224/nobody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  vladislove: {
    name: "VLADISLOVE",
    url: "https://www.instagram.com/djvladislovee/",
  },
  dlmt: {
    name: "DLMT",
    url: "https://www.instagram.com/dlmtmusic/",
    featured_song: "",
  },
  jermjelly: {
    name: "Jerm Jelly",
    url: "https://www.instagram.com/jermjelly/",
    
  },
  mr_jupiter: {
    name: "Mr.Jupiter",
    url: "https://www.instagram.com/mrjupitermusicofficial/",
    feature_song: "https://soundcloud.com/lewis-cinco-ocho-crumsey/rec008wav?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  mvmtone: {
    name: "MvMTone",
    url: "https://www.instagram.com/mvmtone_dmvofficial/",
    feature_song: "https://soundcloud.com/antonio-geter/shib-b2b-mvmtone-techno-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  nikothekid: {
    name: "Niko The Kid",
    url: "https://www.instagram.com/nikothekid/",
  },
  diskull: {
    name: "DISKULL",
    url: "https://www.instagram.com/DISKULLOFFICIAL/",
  },
  gabriela: {
    name: "Gagriela Gonzalez",
    url: "https://instagram.com/DJGABRIELAGONZALEZ/"
  }
};

// YYYY-DD-MMTHH:MM:SS (24)
export const events = [
  {
    headliner: djs.dlmt,
    poster: f2,
    openers: [djs.dabaldo, djs.jermjelly, djs.yespeez],
    location: {
      name: "The Fruit",
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    },
    startTime: "2022-07-30T21:00:00.000",
    endTime: "2022-08-30T02:00:00.000",
    ticketURL: "https://www.eventbrite.com/e/united-house-productions-presents-dlmt-tickets-372119588707",
  },
  {
    headliner: djs.nikothekid,
    poster: f1,
    openers: [djs.diskull, djs.gabriela, djs.beebo],
    location: {
      url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
      name: "The Fruit",
    },
    startTime: "2022-08-20T21:00:00.000",
    endTime: "2022-08-20T02:00:00.000",
    ticketURL: "https://www.eventbrite.com/e/united-house-productions-presents-niko-the-kid-tickets-384039200587",
  },

];

export const featuredSongs = [
  {
    dj: djs.tylr,
    url: djs.tylr.featured_song,
  },
  {
    dj: djs.yespeez,
    url: djs.yespeez.featured_song,
  },
  {
    dj: djs.dabaldo,
    url: djs.dabaldo.featured_song,
  },
  {
    dj: djs.duplex,
    url: djs.duplex.featured_song,
  },
  {
    dj: djs.mr_jupiter,
    url: djs.mr_jupiter.feature_song,
  },
  {
    dj: djs.mvmtone,
    url: djs.mvmtone.feature_song,
  }
];



// ACTUAL PRODUCTS are stored server side 
// export const productMapping = [
//   {id: 1, name: "T-Shirt", price: 25, sizes: ["S", "M", "L", "XL"], size: "", img: Shirt},
//   {id: 2, name: "Bucket Hat", price: 15, sizes: ["Universal"], size: "Universal", img: Shroomy}
// ]

// // Information to display in shopping cart
// export const products = {
//   "T-Shirt": {
//     "S": {
//       id: "prod_LL0QYWYULvLiRJ", // S Shirt 
//       name: productMapping[0].name,
//       price: productMapping[0].price,
//       size: productMapping[0].sizes[0], // Small
//       img: productMapping[0].img,
//     },
//     "M": {
//       id: "prod_LL0V9nBF9SWBXe", // M Shirt 
//       name: productMapping[0].name, 
//       price: productMapping[0].price,
//       size: productMapping[0].sizes[1], // Medium
//       img: productMapping[0].img,
//     },
//     "L": {
//       id: "prod_LL0WQaYdbcAyrr", // L Shirt 
//       name: productMapping[0].name,
//       price: productMapping[0].price,
//       size: productMapping[0].sizes[2], // Large
//       img: productMapping[0].img,
//     },
//     "XL": {
//       id: "prod_LL0WG35KgIK1EP", // XL Shirt 
//       name: productMapping[0].name,
//       price: productMapping[0].price,
//       size: productMapping[0].sizes[3], // X-Large
//       img: productMapping[0].img,
//     }
//   },
//   "Bucket Hat": {
//     "Universal": {
//       id: "prod_LL0XoG82MFwFxR", // Bucket Hat 
//       name: productMapping[1].name,
//       price: productMapping[1].price,
//       size: productMapping[1].sizes[0], // Universal
//       img: productMapping[1].img,
//     }
//   }
// }
