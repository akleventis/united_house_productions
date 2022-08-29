import { f1, f2 } from "../assets/index.js";

// TODO: djs_t
// id (pKey), name, url
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
    featured_song: "https://soundcloud.com/duplexmusic/duplex-flip-it?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  dabaldo: {
    name: "DaBaldo",
    url: "https://www.instagram.com/dabaldo_music/",
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
    featured_song: "https://soundcloud.com/lewis-cinco-ocho-crumsey/rec008wav?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
  },
  mvmtone: {
    name: "MvMTone",
    url: "https://www.instagram.com/mvmtone_dmvofficial/",
    featured_song: "https://soundcloud.com/antonio-geter/shib-b2b-mvmtone-techno-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
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


// TODO: events_t
// dj's auto-inc unique id
// use id as foreign key in events db (openers/headliner)
// id, headliner (dj id), poster (string, s3 bucket url?), openers (array of dj id's), location_name, location_url, startTime, endTime, ticketURL
// YYYY-DD-MMTHH:MM:SS (24)
export const events = [
  // {
  //   headliner: djs.dlmt,
  //   poster: f2,
  //   openers: [djs.dabaldo, djs.jermjelly, djs.yespeez],
  //   location: {
  //     name: "The Fruit",
  //     url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
  //   },
  //   startTime: "2022-07-30T21:00:00.000",
  //   endTime: "2022-08-30T02:00:00.000",
  //   ticketURL: "https://www.eventbrite.com/e/united-house-productions-presents-dlmt-tickets-372119588707",
  // },
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

// TODO: featured_artists_t
// dj (id), url string

export const featuredSongs = [
  {
    dj: djs.dabaldo,
    url: djs.dabaldo.featured_song,
  },
  {
    dj: djs.yespeez,
    url: djs.yespeez.featured_song,
  },
  {
    dj: djs.tylr,
    url: djs.tylr.featured_song,
  },
  {
    dj: djs.duplex,
    url: djs.duplex.featured_song,
  },
  {
    dj: djs.mr_jupiter,
    url: djs.mr_jupiter.featured_song,
  },
  {
    dj: djs.mvmtone,
    url: djs.mvmtone.featured_song,
  }
];