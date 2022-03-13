import data from "../data/index.js";

const getFromData = (key) =>
  new Promise((res, rej) =>
    data[key] ? res(data[key]) : rej(Error(`Could not get ${key}`))
  );

export const getDjs = () => getFromData("djs");

export const getEvents = () => getFromData("events");

export const getFeaturedSongs = () => getFromData("featuredSongs");

export const getProducts = () => getFromData("products");
