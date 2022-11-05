import { createClient } from "contentful";
import "./App.css";
// import axios from "axios";
// import { useState, useEffect } from "react";

const useContentful = () => {
  const cSpace = process.env.REACT_APP_CONTENTFUL_SPACE;
  const cAPI = process.env.REACT_APP_CONTENTFUL_API;

  const client = createClient({
    space: cSpace,
    accessToken: cAPI,
  });

  const getEvents = async () => {
    try {
      const events = await client.getEntries({
        content_type: "event",
        order: '-fields.startTime'
      });
      return events.items.map((item) => {
        const e = item.fields;
        return {
          ...item.fields,
          e,
        };
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getFeaturedArtists = async () => {
    try {
        const featuredArtists = await client.getEntries({ 
          content_type: "featuredSongs",
        //   order: 'fields.startT ime'
        });
        return featuredArtists.items[0].fields.featuredSongs.map((item) => { 
                const e = item.fields
                return { 
                    ...item.fields,
                    e
                } 
        });
      } catch (err) {
        console.log(err); 
      }
  }

  const getAbout = async () => {
    try {
      const about = await client.getEntries({
        content_type: "about",
        // order: '-fields.startTime'
      });

      return about.items[0].fields
    } catch (err) {
      console.log(err);
    }
  };

  return { getEvents, getFeaturedArtists, getAbout };
};

export default useContentful;
   