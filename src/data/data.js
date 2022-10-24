// All data will eventually live in the database 

// id (pKey), name, url
export const djs = {
  beebo: {
    name: "BEEBO",
    url: "https://www.instagram.com/BEEBO_MUSIC/"
  },
  sam_wolfe: {
    name: "SAM WOLFE",
    url: "https://www.instagram.com/samwolfemusic/",
    featured_song: "https://soundcloud.com/6amgroup/premiere-sam-wolfe-kreecher-1984-1605?in=samwolfemusic/sets/prison-break-1605-out-now&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
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
  duplex: {
    name: "DUPLEX",
    url: "https://www.instagram.com/duplex_music/",
    featured_song: "https://soundcloud.com/duplexmusic/duplex-flip-it?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  dabaldo: {
    name: "DaBaldo",
    url: "https://www.instagram.com/dabaldo_music/",
    featured_song: "https://soundcloud.com/dabaldo/dabaldo-the-club-house-live?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  criso: {
    name: "Criso",
    url: "https://www.instagram.com/crisosound/",
    featured_song: "https://soundcloud.com/crisosound/criso-field-of-vision-keota-master-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  yespeez: {
    name: "YESPEEZ",
    url: "https://www.instagram.com/yespeezmusic/",
    featured_song: "https://soundcloud.com/alex-mahar-189115224/nobody?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  vladislove: {
    name: "VLADISLOVE",
    url: "https://www.instagram.com/djvladislovee/",
  },
  dlmt: {
    name: "DLMT",
    url: "https://www.instagram.com/dlmtmusic/",
    featured_song: "https://soundcloud.com/dlmtmusic/bad-bunny-titi-me-pregunto-dlmt-remix-free-download?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  jermjelly: {
    name: "Jerm Jelly",
    url: "https://www.instagram.com/jermjelly/",
    
  },
  mr_jupiter: {
    name: "Mr. Jupiter",
    url: "https://www.instagram.com/mrjupitermusicofficial/",
    featured_song: "https://soundcloud.com/lewis-cinco-ocho-crumsey/rec008wav?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  mvmtone: {
    name: "MvMTone",
    url: "https://www.instagram.com/mvmtone_dmvofficial/",
    featured_song: "https://soundcloud.com/antonio-geter/shib-b2b-mvmtone-techno-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  nikothekid: {
    name: "Niko The Kid",
    url: "https://www.instagram.com/nikothekid/",
    featured_song: "https://soundcloud.com/nikothekid/sets/niko-the-kid-lemonade?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  },
  diskull: {
    name: "DISKULL",
    url: "https://www.instagram.com/DISKULLOFFICIAL/",
  },
  gabriela: {
    name: "Gagriela Gonzalez",
    url: "https://instagram.com/DJGABRIELAGONZALEZ/"
  },
  domii: {
    name: "DOMii",
    url: "https://www.instagram.com/ariel_domii/",
  },
  masteria: {
    name: "MASTERIA",
    url: "https://instagram.com/itsmasteria/",
    featured_song: "https://soundcloud.com/itsmasteria/bad-guy-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  },
  woah: {
    name: "WOAHH!",
    url: "https://instagram.com/woahh_music/",
    featured_song: "https://soundcloud.com/woahh/gorillaz-feel-good-inc-woahh-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  },
  basswalker: {
    name: "BASSWALKER",
    url: "https://instagram.com/basswalker_/",
    featured_song: "https://soundcloud.com/user-507608342/gimme-some-keys-v1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  },
  san_pacho: {
    name: "San Pacho",
    url: "https://instagram.com/sanpachomusic/",
    featured_song: "https://soundcloud.com/sanpachomusic/thevault001?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  },
  dexter: {
    name: "DEXTER",
    url: "https://instagram.com/thedextermusic/",
    featured_song: "https://soundcloud.com/thedextermusic/woman-is-a-god-final-master-91422?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false",
  },
  pimoux: {
    name: "Pimoux",
    url: "https://instagram.com/primoux/",
    featured_song: "https://soundcloud.com/primoux/bloodmoney-126?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&show_teaser=false"
  }
};


// dj's auto-inc unique id
// use id as foreign key in events db (openers/headliner)
// id, headliner (dj id), poster (string, s3 bucket url?), openers (array of dj id's), location_name, location_url, start_time, end_time, ticket_url
// YYYY-DD-MMTHH:MM:SS (24)
export const events = [
  {
    headliner: djs.san_pacho,
    openers: [djs.dexter, djs.pimoux],
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    location_name: "The Fruit",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/san_pacho.jpeg",
    start_time: "2022-12-02T22:00:00.000",
    end_time: "2022-12-03T02:00:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-san-pacho-tickets-423280652827",
  },
  {
    headliner: djs.masteria,
    openers: [djs.woah, djs.basswalker],
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    location_name: "The Fruit",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/masteria.jpeg",
    start_time: "2022-10-22T22:00:00.000",
    end_time: "2022-10-23T02:00:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-masteria-tickets-419754074737",
  },
  {
    headliner: djs.nikothekid,
    openers: [djs.diskull, djs.gabriela, djs.beebo],
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    location_name: "The Fruit",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/niko.jpeg",
    start_time: "2022-08-20T21:00:00.000",
    end_time: "2022-08-21T02:00:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-niko-the-kid-tickets-384039200587",
  },
  {
    headliner: djs.dlmt,
    openers: [djs.dabaldo, djs.jermjelly, djs.yespeez],
    location_name: "The Fruit",
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/dlmt.jpeg",
    start_time: "2022-07-30T21:00:00.000",
    end_time: "2022-07-31T02:00:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-dlmt-tickets-372119588707",
  },
  {
    headliner: djs.sam_wolfe,
    openers: [djs.j_5, djs.u9],
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    location_name: "The Fruit",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/sam.jpeg",
    start_time: "2022-07-09T21:00:00.000",
    end_time: "2022-07-10T02:00:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-niko-the-kid-tickets-384039200587",
  },
  {
    headliner: djs.domii,
    openers: [djs.duplex, djs.yespeez, djs.vladislove, djs.beebo],
    location_url: "https://www.google.com/maps/place/The+Fruit/@35.9906289,-78.8987875,17z/data=!3m1!4b1!4m5!3m4!1s0x89ace46f3381f42d:0x42006ab88a52e967!8m2!3d35.9906823!4d-78.8966525",
    location_name: "The Fruit",
    image_url: "https://uhp-image-upload.s3.amazonaws.com/domii.jpeg",
    start_time: "2022-04-16T21:00:00.000",
    end_time: "2022-04-17T02:30:00.000",
    ticket_url: "https://www.eventbrite.com/e/united-house-productions-presents-niko-the-kid-tickets-384039200587",
  },
];

// TODO: featured_artists_t
// dj (id), url string

export const featuredSongs = [
  {
    dj: djs.san_pacho,
    url: djs.san_pacho.featured_song,
  },
  {
    dj: djs.dexter,
    url: djs.dexter.featured_song,
  },
  {
    dj: djs.pimoux,
    url: djs.pimoux.featured_song,
  },
  {
    dj: djs.masteria,
    url: djs.masteria.featured_song,
  },
  {
    dj: djs.nikothekid,
    url: djs.nikothekid.featured_song,
  },
  {
    dj: djs.dlmt,
    url: djs.dlmt.featured_song,
  },
  {
    dj: djs.sam_wolfe,
    url: djs.sam_wolfe.featured_song,
  },
];